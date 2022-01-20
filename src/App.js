import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [formValues, setFormValues] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validateInput(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validateInput = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.name) {
      errors.name = "Please enter your name!";
    } else if (values.name.length < 4) {
      errors.name = "name must be more than 4 characters!";
    }  
    if (!values.email) {
      errors.email = "Please enter your email!";
    } else if (!regex.test(values.email)) {
      errors.email = "Please enter a valid email!";
    }
    if (!values.username) {
      errors.username = "Please enter your user name!";
    } else if (!/^[A-Za-z]+/.test(values.username.trim())) {
      errors.username = "Please enter a valid user name!";
    }
    if (!values.password) {
      errors.password = "Please enter your password!";
    } else if (values.password.length < 6) {
      errors.password = "Password must be more than 6 characters";
    }
    if (!values.confirmpassword) {
      errors.confirmpassword = "Please enter your confirm password!";
    } else if (values.confirmpassword !== values.password) {
      errors.confirmpassword = "Passwords not match!";
    }
    return errors;
  };

  return (
    <div className="container">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="signedinMessage">Done!</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )}
      <form onSubmit={handleSubmit}>
        <h1>Signup</h1>
        <div className="Form">
        <div className="field">
            <label>Name</label>
            <input className="form-control" type="text" name="name" placeholder="Name" value={formValues.name} onChange={handleChange}/>
            </div>
            <p>{formErrors.name}</p>      
          <div className="field">
            <label>Email</label>
            <input className="form-control" type="text" name="email" placeholder="Email" value={formValues.email} onChange={handleChange}/>
            </div>
            <p>{formErrors.email}</p>
            <div className="field">
            <label>User Name</label>
            <input className="form-control" type="text" name="username" placeholder="Username" value={formValues.username} onChange={handleChange}/>
            </div>
            <p>{formErrors.username}</p>
            <div className="field"> 
            <label>Password</label>
            <input className="form-control" type="password" name="password" placeholder="Password" value={formValues.password} onChange={handleChange} />
            </div>
            <p>{formErrors.password}</p>
            <div className="field"> 
            <label>Confirm Password</label>
            <input className="form-control" type="password" name="confirmpassword" placeholder="Confirm Password" value={formValues.confirmpassword} onChange={handleChange} />
            </div>
            <p>{formErrors.confirmpassword}</p>
            <button className="btn btn-primary">Submit</button>
            </div>
      </form>
    </div>
  );
}

export default App;
          
            
            
            
              
              
              
              
              
            
          
          
          
