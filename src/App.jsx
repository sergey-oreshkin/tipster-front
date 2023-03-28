import { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Main from './components/Main/Main';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LoginPage from './components/LoginPage/LoginPage';
import Authorization from './components/Authorization/Authorization';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProfile } from './store/API/ProfileApi';
import { tokenStorageName } from './utils/constants';


const App = () => {

  const { loggedIn } = useSelector(state => state);
  const dispatcher = useDispatch();

  useEffect(() => {
    if (localStorage.getItem(tokenStorageName)) {
      dispatcher(getProfile());
    }
  }, [])

  return (
    <div className="App">

      <Switch>

        <Route exact path='/'>
          <Main isEntrance={loggedIn} />
        </Route>

        <ProtectedRoute path='/profile' loggedIn={loggedIn} >
          <Header isEntrance={loggedIn} />
          <h2>profile</h2>
          <Footer />
        </ProtectedRoute>

        <Route path='/signin'>
          {!loggedIn
            ?
            <LoginPage />
            :
            <Redirect to='/' />
          }
        </Route>

        <Route path='/authorization'>
          <Authorization />
        </Route>

        <Route path='*'>
          <h2>Not Found</h2>
        </Route>

      </Switch>

    </div>
  );
}

export default App;
