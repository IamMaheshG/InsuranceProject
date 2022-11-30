import ProfileForm from './ProfileForm';
import InsuranceForm from './InsuranceForm';
import classes from './UserProfile.module.css';

const UserProfile = () => {
  return (
    <section className={classes.profile}>
      <ProfileForm />
      <h1>Life-Insurance Quote Form</h1>
      <InsuranceForm/>
    </section>
  );
};

export default UserProfile;
