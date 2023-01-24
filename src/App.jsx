import {useState} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Main from './components/Main/Main';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {

  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <div className="App">

      <Switch>

        <Route exact path='/'>
          <Main isEntrance={loggedIn} />
        </Route>

        <ProtectedRoute path='/profile' loggedIn={loggedIn} >
          <Header isEntrance={loggedIn}/>
          <h2>profile</h2>
          <Footer />
        </ProtectedRoute>

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
