import styles from './styles.module.css'
import {Link, useNavigate} from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios'

const Signup =()=>{

    const [data, setData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:""
    });
    const navigate =  useNavigate();
    const [error, setError] = useState();
    const handleChange = ({Target:input})=>{
        setData({...data,[input.name]:input.value})

    }
    

    const handleSubmit = async (e)=>{
      e.preventDefault();
      try {
        const url = "https://localhost:8080/api/users";
        const {data:res} = await axios.post(url, data);
         navigate("/login");
         console.log(res.message);
      } catch (error) {
        if(error.response && error.response.status>=400 
          && error.response.status <=500)
          {
              setError(error.response.data.message);
          }

      }
    }
    
    return (
      <div className={styles.signup_container}>
        <div className={styles.signup_form_container}>
            <div className={styles.left}>
              <h1>Welcome Back1</h1>
              <Link to='/login'>
                <button type='button' className={styles.white_btn}>
                  Sign In
                </button>      
              </Link>
            </div>
            <div className={styles.right}>
              <form className={styles.form_container} onSubmit={handleSubmit}>
                <h1>Create your account</h1>
                <input 
                type="text"
                placeholder='First Name'
                name='firstName'
                value={data.firstName} 
                onchange = {handleChange}
                required
                className={styles.input}
                />
                <input 
                type="text"
                placeholder='Last Name'
                name='lastName'
                value={data.lastName} 
                onchange = {handleChange}
                required
                className={styles.input}
                />
                <input 
                type="email"
                placeholder='Email'
                name='email'
                value={data.email} 
                onchange = {handleChange}
                required
                className={styles.input}
                />
                <input 
                type="password"
                placeholder='Password'
                name='password'
                value={data.password} 
                onchange = {handleChange}
                required
                className={styles.input}
                />
                {error && <div className={styles.err_msg}>{error}</div>}
                <button type="submit" className={styles.green_btn}>
                  SignUp
                </button>
              
              </form>
            </div>

        </div>

      </div>

    )
};

export default Signup;