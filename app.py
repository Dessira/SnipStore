from flask import Flask, request, jsonify, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS
import os
from helper import signup_func, signin_func 

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})

basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'test.sqlite')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
ma = Marshmallow(app)

#class for users and drafts

class User(db.Model):
    """Class that defines the user attributes
    """
    __tablename__ = 'User'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200), nullable=False)
    email = db.Column(db.String(200), nullable=False)
    password = db.Column(db.String(100), nullable=False)
    def __init__(self, name, email, password):
        self.name = name
        self.email = email
        self.password = password

class Draft(db.Model):
    """Class that defines the Draft attributes"""
    __tablename__ = 'Draft'
    draft_id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('User.id'))
    draft_name = db.Column(db.String(300), nullable=False)
    draft_txt = db.Column(db.Text)
    def __init__(self, draft_name, draft_txt, user_id):
        self.draft_name = draft_name
        self.draft_txt = draft_txt
        self.user_id = user_id

class UserSchema(ma.Schema):
    """"""""
    class Meta:
        fields = ('id', 'name', 'email', 'password')
class DraftSchema(ma.Schema):
    """"""""
    class Meta:
        fields = ('draft_id', 'user_id', 'draft_txt', "draft_name")
        include_relationships = True
        load_instance = True

user_schema = UserSchema()
users_schema = UserSchema(many=True)

draft_schema = DraftSchema()
drafts_schema = DraftSchema(many=True)

#create user
@app.route('/signup', methods=["POST"])
def sign_up():
    """"""""
    name = request.json['name']
    email = request.json['email']
    password = request.json['password']
    check = signup_func(User, email)

    if check == False:
        new_user = User(name, email, password)
        db.session.add(new_user)
        db.session.commit()
        return user_schema.jsonify(new_user)
    else:
        return {"id": -1}

@app.route('/signin', methods=['POST'])
def sign_in():
    """"""
    email = request.json['email']
    password = request.json['password']

    users = signin_func(User)

    for user in users:
        if (user.email == email) and (user.password == password):
            """url = url_for('user_page', id = user.id)
            return redirect(url, code=303)"""
            return user_page(user.id)
    return {"id": -1}

@app.route('/user', methods=["GET"])
def total_users():
    """"""""
    all_users = User.query.all()
    total = users_schema.dump(all_users)
    return jsonify(total)

@app.route('/user/<id>', methods=["GET", "POST"])
def user_page(id):
    """"""
    user = User.query.get(id)
    #return user_schema.jsonify(user)
    return {"id": user.id, "token": "boom"}

@app.route('/user/<id>', methods=["PUT"])
def update_user(id):
    """"""
    user = User.query.get(id)

    name = request.json['name']
    email = request.json['email']
    password = request.json['password']

    user.name = name
    user.email = email
    user.password = password

    db.session.commit()
    return user_schema.jsonify(user)

@app.route('/user/<id>', methods=["DELETE"])
def delete_user(id):
    """"""
    user = User.query.get(id)
    Draft.query.filter_by(user_id=id).delete()
    db.session.delete(user)
    db.session.commit()
    return user_schema.jsonify(user)

@app.route('/user/draft/<id>', methods=["POST"])
def create_draft(id):
    """"""
    draft_name = request.json['draft_name']
    draft_txt = request.json['draft_txt']
    user_id = id

    new_draft = Draft(draft_name, draft_txt, user_id)
    db.session.add(new_draft)
    db.session.commit()
    print(new_draft.draft_txt)
    return draft_schema.jsonify(new_draft)

@app.route('/user/draft/<id>', methods=["GET"])
def all_user_drafts(id):
    """"""
    all_drafts = Draft.query.filter_by(user_id=id).all()
    total = drafts_schema.dump(all_drafts)
    return jsonify(total)

@app.route('/user/draft/<id>/<d_id>', methods=["GET"])
def one_draft(id, d_id):
    """"""
    draft = Draft.query.filter_by(user_id=id).filter_by(draft_id=d_id).first()
    return draft_schema.jsonify(draft)

@app.route('/user/draft/<id>/<d_id>', methods=["PUT"])
def update(id, d_id):
    """"""
    draft = Draft.query.filter_by(user_id=id).filter_by(draft_id=d_id).first()
    draft_name = request.json['draft_name']
    draft_txt = request.json['draft_txt']

    draft.draft_name = draft_name
    draft.draft_txt = draft_txt

    db.session.commit()
    return draft_schema.jsonify(draft)

@app.route('/user/draft/<id>/<d_id>', methods=["DELETE"])
def delete_draft(id, d_id):
    """"""
    draft = Draft.query.filter_by(user_id=id).filter_by(draft_id=d_id).first()
    db.session.delete(draft)
    db.session.commit()
    return draft_schema.jsonify(draft)

if __name__ == "__main__":
    app.run(debug=True)