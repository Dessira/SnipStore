import { BrowserRouter as Router, Route, Switch} from "react-router-dom"

import Draft from './Draft'
import Signin from './Signin'
import Signup from './Signup'
import Home from './Home'
import User from './User'
import Setting from './Setting'
import Overview from './Overview'

function App() {
  return (
    <Router>
    <div className="App">
	    <div className='content'>
	        <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/sign-in">
              <Signin/>
            </Route>
            <Route exact path="/sign-up">
              <Signup/>
            </Route>
            <Route exact path="/user/:id">
              <User/>
            </Route>
            <Route exact path="/draft/:id">
              <Draft/>
            </Route>
	  <Route exact path="/setting/:id">
	  <Setting />
	  </Route>
	  <Route exact path="/overview/:id">
	  <Overview />
	  </Route>
          </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
