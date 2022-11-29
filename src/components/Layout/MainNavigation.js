import { Link, useHistory} from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../store/Auth-Context';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const authContext = useContext(AuthContext)
  const isLOggedIn= authContext.isLoggedIn;
  const history=useHistory()

  const handleLogout = ()=> {
    authContext.logout();
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
            !isLOggedIn && <li>
              <Link to='/auth'>Login</Link>
            </li>
          }
          {
            isLOggedIn && <li>
              <Link to='/profile'>Profile</Link>
            </li>
          }
          {
            isLOggedIn &&
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
