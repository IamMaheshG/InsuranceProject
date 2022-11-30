import * as React from "react";
import classes from './ProfileForm.module.css';
const ProfileForm = () => {
  const [users, setUsers] = React.useState([]);
  const [enteredName, setEnteredName] = React.useState('');

  const handleEnteredUserName = (e) => {
    const name=e.target.value;
    // const userdata= [...users]
    setEnteredName(name)
  }

  const formSubmissionHandler = (e) => {
    e.preventDefault();
    setEnteredName('');
  }
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
      <form onSubmit={formSubmissionHandler}>
        <div className={classes.formControl}>
          <label htmlFor='name'>Filter Name</label>
          <input
            type='text'
            id='name'
            value={enteredName}
            onChange={handleEnteredUserName}
          />
        </div>
      </form>
      <div className={classes.flex}>
        {users.length &&
          users.filter((user)=> user.first_name.includes(enteredName) || user.last_name.includes(enteredName)).map((user) => {
            return (
              <div key={user.id}>
                <p>
                  <strong>{user.first_name}</strong>
                  <span>{` `}</span>
                  <strong>{user.last_name}</strong>
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