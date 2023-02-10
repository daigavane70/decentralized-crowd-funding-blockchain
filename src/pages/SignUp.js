import { useState, useEffect } from "react";
import "../App.css";

const SignUp = () => {
    const initialValues = { username: "", email: "", password: "", confirmPassword:"" };

    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);


    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username) {
            errors.username = "Username is required!";
        }
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
            errors.password = "Password cannot exceed more than 10 characters";
        }

        if (!values.confirmPassword) {
            errors.confirmPassword = "This field is required";
        } else if (values.password !== values.confirmPassword) {
            errors.confirmPassword = "The two passwords do not match";
        } 
        return errors;
    };


    return (
        <div className="container">

            {Object.keys(formErrors).length === 0 && isSubmit && (
                <div className="ui message success">Signed Up successfully</div>
            )}

            <form onSubmit={handleSubmit}>
                <h1>Sign Up Form</h1>
                <div className="ui divider"></div>
                <div className="ui form">
                    <div className="field">
                        <label>Username</label>
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={formValues.username}
                            onChange={handleChange}
                        />
                    </div>
                    <p style={{color:"red"}}>{formErrors.username}</p>
                    <div className="field">
                        <label>Email</label>
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            value={formValues.email}
                            onChange={handleChange}
                        />
                    </div>
                    <p style={{color:"red"}}>{formErrors.email}</p>
                    <div className="field">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formValues.password}
                            onChange={handleChange}
                        />
                    </div>
                    <p style={{color:"red"}}>{formErrors.password}</p>
                    <div className="field">
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={formValues.confirmPassword}
                            onChange={handleChange}
                        />
                    </div>
                    <p style={{color:"red"}}>{formErrors.confirmPassword}</p>
                    <button className="fluid ui button blue">Sign Up!</button>
                </div>
            </form>
        </div>
    );
}

export default SignUp;