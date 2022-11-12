from flask_sqlalchemy import SQLAlchemy

def signin_func(table):
    """Returns all users in the database"""
    users = table.query.order_by(table.id).all()
    return users

def signup_func(table, mail):
    """"""
    user = table.query.filter_by(email=mail).first()
    if user == None:
        return False
    else:
        return True
