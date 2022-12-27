import {useState} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Main from './components/Main/Main';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Header from './components/Header/Header';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">

      <Switch>

        <Route exact path='/'>
          <Main isEntrance={loggedIn} />
        </Route>

        <ProtectedRoute path='/notes'loggedIn={loggedIn} >
          <Header isEntrance={loggedIn} />
          <h2>карточки</h2>
        </ProtectedRoute>

        <ProtectedRoute path='/profile' loggedIn={loggedIn} >
          <Header isEntrance={loggedIn}/>
          <h2>profile</h2>
        </ProtectedRoute>

        <Route path='/signup'>
          {!loggedIn ? (<h2>Register</h2>
          ) : (
          <Redirect to='/'/>)}
        </Route>

        <Route path='/signin'>
          {!loggedIn ? (<h2>Login</h2>
          ) : (
          <Redirect to='/'/> )}
        </Route>

        <Route path='*'>
          <h2>Not Found</h2>
        </Route>

      </Switch>

    </div>
  );
}

export default App;
