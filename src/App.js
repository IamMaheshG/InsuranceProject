import { Switch, Route, Redirect } from 'react-router-dom';
// import { useContext } from 'react';
import { useSelector } from 'react-redux';
// import AuthContext from './components/store/Auth-Context';
import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';

function App() {
  //  const authContext = useContext(AuthContext);
  const auth = useSelector((state) => state.auth)
  console.log(auth.isLoggedIn)
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        {
          !auth.isLoggedIn &&
          <Route path='/auth'>
            <AuthPage />
          </Route>
        }
        {
          auth.isLoggedIn &&
          <Route path='/profile'>
            <UserProfile />
          </Route>
        }
        {
          !auth.isLoggedIn &&
          <Route path='*'>
            <Redirect to="/" />
          </Route>
        }
      </Switch>
    </Layout>
  );
}

export default App;
