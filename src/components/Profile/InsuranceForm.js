
import classes from './InsuranceForm.module.css'
const InsuranceForm = (props) => {
    
    const formSubmissionHandler = (e) => {
        e.preventDefault();
    }
    return (
        <div className={classes.app}>
            <form onSubmit={formSubmissionHandler}>
                <fieldset>
                    <legend>Personal Details</legend>
                    <p>
                        <label>
                            Salutation
                            <br />
                            <select name="salutation">
                                <option>--None--</option>
                                <option>Mr.</option>
                                <option>Ms.</option>
                                <option>Mrs.</option>
                                <option>Dr.</option>
                                <option>Prof.</option>
                            </select>
                        </label>
                    </p>
                    <p>
                        <label>First name: <input name="firstName" /></label>
                    </p>
                    <p>
                        <label>Last name: <input name="lastName" /></label>
                    </p>
                    <p>
                        Gender :
                        <label><input type="radio" name="gender" value="male" /> Male</label>
                        <label><input type="radio" name="gender" value="female" /> Female</label>
                    </p>
                    <p>
                        <label>Email:<input type="email" name="email" /></label>
                    </p>
                    <p>
                        <label>Date of Birth:<input type="date" name="birthDate" /></label>
                    </p>
                    <p>
                        <label>Phone Number: <input type="number" /></label>
                    </p>
                    <p>
                        <label>Which Life Plan?</label>
                        <select id="insurance" name="insurance">
                            <option value="5yearsTerm">5 Year Term</option>
                            <option value="10yearsTerm">10 Year Term</option>
                            <option value="universetime">Universia time</option>
                            <option value="Lifetime">Life time</option>
                            <option value="notsure">I am unsure and need advice.</option>
                        </select>
                    </p>
                    <p>
                        <label>
                            Address :
                            <br />
                            <textarea name="address" cols="30" rows="3"></textarea>
                        </label>
                    </p>
                    <p>
                        <label>Height: <input name="height" /></label>
                    </p>
                    <p>
                        <label>Weight: <input name="weight" /></label>
                    </p>
                    <p>
                        <label>Describe health issue?</label>
                        <textarea name="health issue" cols="30" rows="3"></textarea>
                    </p>
                    <p>
                        <button type="submit">Submit</button>
                    </p>
                </fieldset>
            </form>
        </div>
    );
};

export default InsuranceForm;
