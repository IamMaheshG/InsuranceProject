import * as React from "react";
import classes from './ProfileForm.module.css';
const ProfileForm = () => {
  const [users, setUsers] = React.useState([]);
  const f = async () => {
    const res = await fetch("https://reqres.in/api/users/");
    const json = await res.json();
    setUsers(json.data);
  };
  React.useEffect(() => {
    f();
  }, []);
  return (
    <div className="App">
      <div className={classes.flex}>
        {users.length &&
          users.map((user) => {
            return (
              <div key={user.id}>
                <p>
                  <strong>{user.first_name}</strong>
                </p>
                <p>{user.email}</p>
                <img alt={user.first_name} key={user.avatar} src={user.avatar} />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default ProfileForm;