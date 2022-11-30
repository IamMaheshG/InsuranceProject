import { Link, useHistory} from 'react-router-dom';
// import { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/Auth-Slice';
// import AuthContext from '../store/Auth-Context';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  // const authContext = useContext(AuthContext)
  // const isLOggedIn= authContext.isLoggedIn;
  const auth=useSelector(state=>state.auth);
  const dispatch=useDispatch()
  const history=useHistory()

  const handleLogout = ()=> {
   // authContext.logout();
    dispatch(authActions.isLogout())
    history.replace('/')
  }
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>Zurish Insurance</div>
      </Link>
      <nav>
        <ul>
          {
            !auth.isLoggedIn && <li>
              <Link to='/auth'>Login</Link>
            </li>
          }
          {
            auth.isLoggedIn && <li>
              <Link to='/profile'>Profile</Link>
            </li>
          }
          {
            auth.isLoggedIn &&
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          }
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
