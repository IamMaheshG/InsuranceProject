import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import classes from './InsuranceForm.module.css'
const InsuranceForm = (props) => {
    const [username, setUserName] = useState('');
    const [useremail, setUserEmail] = useState('');
    const [userSaluation, setUserSaluation] = useState('');
    const [userLastName, setUserLastName] = useState('');
    const [selected, setSelected] = useState('male');
    const [userDateOfBirth, setUserDateOfBirth] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [insurancePlan, setInsurancePlan] = useState('');
    const [userAddress, setUserAddress] = useState('');
    const [userHeight, setUserHeight] = useState('');
    const [userWeight, setUserWeight] = useState('');
    const [userHealthIssue, setUserHealthIssue] = useState('')
    const [userData, setUserData] = useState({})
    const [open, oenDialogBox] = useState(false)

    const handleSaluation = (e) => {
        setUserSaluation(e.target.value)
    }

    const hadleUserName = (e) => {
        setUserName(e.target.value)
    }

    const handleUserEmail = (e) => {
        setUserEmail(e.target.value)
    }

    const handleUserLastName = (e) => {
        setUserLastName(e.target.value)
    }

    const handleChange = event => {
        setSelected(event.target.value);
    };

    const hanldeUserDateOfBirth = (e) => {
        setUserDateOfBirth(e.target.value)
    }

    const handlePhoneNumber = (e) => {
        setPhoneNumber(e.target.value)
    }

    const handleInsurancePlan = (e) => {
        setInsurancePlan(e.target.value)
    }

    const hanldeUserAddress = (e) => {
        setUserAddress(e.target.value)
    }

    const handleUserHeight = (e) => {
        setUserHeight(e.target.value)
    }

    const hanldeUserWeight = (e) => {
        setUserWeight(e.target.value)
    }

    const handleUserHealthIssue = (e) => {
        setUserHealthIssue(e.target.value)
    }

    const formSubmissionHandler = (e) => {
        e.preventDefault();
        const userData = {
            firstName: username,
            lastName: userLastName,
            email: useremail,
            saluation: userSaluation,
            gender: selected,
            dateOfBith: userDateOfBirth,
            userPhoneNumber: phoneNumber,
            insurancePlan: insurancePlan,
            address: userAddress,
            userheight: userHeight,
            userweight: userWeight,
            userHealthIssue: userHealthIssue
        }
        setUserData(userData)
        // set dialog box
        oenDialogBox(true)
        // rest form data
        setUserSaluation('')
        setUserName('')
        setUserEmail('')
        setUserLastName('')
        setSelected('');
        setUserHealthIssue('')
        setUserWeight('')
        setUserHeight('')
        setUserAddress('')
        setInsurancePlan('')
        setPhoneNumber('')
        setUserDateOfBirth('')
    }

    const handleClose = () => {
        oenDialogBox(false)
    }
    return (
        <div className={classes.app}>
            <form onSubmit={formSubmissionHandler}>
                <fieldset className={classes.fieldSet}>
                    <legend>Personal Details</legend>
                    <div className={classes.formControl}>
                        <label>
                            Salutation
                            <br />
                            <select name="salutation" onChange={handleSaluation} value={userSaluation}>
                                <option>--None--</option>
                                <option>Mr.</option>
                                <option>Ms.</option>
                                <option>Mrs.</option>
                                <option>Dr.</option>
                                <option>Prof.</option>
                            </select>
                        </label>
                    </div>
                    <div className={classes.formControl}>
                        <label>First name:
                            <br />
                            <input name="firstName" onChange={hadleUserName}
                                value={username}
                            /></label>
                    </div>
                    <div className={classes.formControl}>
                        <label>Last name:
                            <br />
                            <input name="lastName" onChange={handleUserLastName}
                                value={userLastName}
                            /></label>
                    </div>
                    <div className={classes.gender}>
                        <label>Gender :<input type="radio" name="gender" value="male"
                            checked={selected === 'male'}
                            onChange={handleChange}
                        /> Male</label>
                        <label><input type="radio" name="gender" value="female"
                            checked={selected === 'female'}
                            onChange={handleChange}
                        /> Female</label>
                    </div>
                    <br/>
                    <div className={classes.formControl}>
                        <label>Email:
                            <br />
                            <input type="email" name="email" onChange={handleUserEmail}
                                value={useremail}
                            /></label>
                    </div>
                    <div className={classes.formControl}>
                        <label>
                            Date of Birth:
                            <br />
                            <input type="date" name="birthDate"
                                onChange={hanldeUserDateOfBirth}
                                value={userDateOfBirth}
                            /></label>
                    </div>
                    <div className={classes.formControl}>
                        <label>Phone Number:
                            <br />
                            <input type="number"
                                onChange={handlePhoneNumber}
                                value={phoneNumber}
                            /></label>
                    </div>
                    <div className={classes.formControl}>
                        <label>Which Life Plan?
                        <br />
                        <select id="insurance" name="insurance"
                            onChange={handleInsurancePlan}
                            value={insurancePlan}
                        >
                            <option value="5yearsTerm">5 Year Term</option>
                            <option value="10yearsTerm">10 Year Term</option>
                            <option value="universetime">Universia time</option>
                            <option value="Lifetime">Life time</option>
                            <option value="notsure">I am unsure and need advice.</option>
                        </select>
                        </label>
                    </div>
                    <div className={classes.formControl}>
                        <label>
                            Address :
                            <br />
                            <textarea name="address" cols="30" rows="3" onChange={hanldeUserAddress}
                                value={userAddress}
                            ></textarea>
                        </label>
                    </div>
                    <div className={classes.formControl}>
                        <label>Height: <input name="height"
                            onChange={handleUserHeight}
                            value={userHeight}
                        /></label>
                    </div>
                    <div className={classes.formControl}>
                        <label>Weight: <input name="weight"
                            onChange={hanldeUserWeight}
                            value={userWeight}
                        /></label>
                    </div>
                    <div className={classes.formControl}>
                        <label>Describe your health issue?
                        <br />
                        <textarea name="health issue" cols="30" rows="3"
                            onChange={handleUserHealthIssue}
                            value={userHealthIssue}
                        ></textarea>
                        </label>
                    </div>
                    <div className={classes.formControl}>
                        <button type="submit">Submit</button>
                    </div>
                </fieldset>
            </form>
            <Dialog open={open}
                onClose={handleClose}
            >
                <DialogTitle>You can re-check, your entered details.</DialogTitle>
                <DialogContent>
                    <DialogContentText>{`saluation:${userData.saluation}`}</DialogContentText>
                    <DialogContentText>{`firstname:${userData.firstName}`}</DialogContentText>
                    <DialogContentText>lastname:{userData.lastName}</DialogContentText>
                    <DialogContentText>gender:{userData.gender}</DialogContentText>
                    <DialogContentText>email:{userData.email}</DialogContentText>
                    <DialogContentText>date-of-birth:{userData.dateOfBith}</DialogContentText>
                    <DialogContentText>phone-number:{userData.userPhoneNumber}</DialogContentText>
                    <DialogContentText>address:{userData.address}</DialogContentText>
                    <DialogContentText>insurance-plan:{userData.insurancePlan}</DialogContentText>
                    <DialogContentText>height:{userData.userheight}</DialogContentText>
                    <DialogContentText>weight:{userData.userweight}</DialogContentText>
                    <DialogContentText>health-issue:{userData.userHealthIssue}</DialogContentText>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default InsuranceForm;
