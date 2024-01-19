import React,{useState} from 'react';
import axios from 'axios';
import styles from '../Home/Home.module.css';

function Home() {
    const [isSignUp, setIsSignUp] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState({});

    const handleClick = (isSignUpOption)=>{
        setIsSignUp(isSignUpOption);
        setFormData({
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        });
        setErrors({});
    }
    const validateForm = () =>{
        const newErrors = {};

        if(isSignUp && (!formData.name || !formData.name.trim())){
            newErrors.name = 'Name is required';
        }
        if(!formData.email || !formData.email.trim()){
            newErrors.email = 'Email is required';
        }
        if(!formData.password || !formData.password.trim()){
            newErrors.password = 'Password is required';
        }
        if(isSignUp && ((formData.password !== formData.confirmPassword) ||  (!formData.confirmPassword && !formData.confirmPassword.trim()))){
            newErrors.confirmPassword = 'Passwords do not match';
            setFormData((prevFormData)=>({
                ...prevFormData,
                password: '',
                confirmPassword: '',
            }));
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleAuthRequest = async (url) => {
        try {
          const response = await axios.post(url, formData);
          console.log(response.data);  
        } catch (error) {
          console.error(error.response.data);  
        }
      };

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(!validateForm()){
            return;
        }

        const url = isSignUp ? 'http://localhost:4000/sign-up' : 'http://localhost:4000/login';
        handleAuthRequest(url);

        console.log('form data',formData);
        if(isSignUp){
            console.log('Sign Up successfull');
            setIsSignUp(false);
            setFormData({
                name: '',
                email: '',
                password: '',
                confirmPassword: '',
            });
        }else{
            console.log('Login successfull');
            setFormData({
                email: '',
                password: '',
            });
        }
    }

  return (
    <div className={styles.homeContainer}>
        <div className={styles.container}>
            <h1 className={styles.header}>QUIZZIE</h1>
            <div className={styles.options}>
                <h3 onClick={() => handleClick(true)} style={{ color: isSignUp ? '#A9BCFF' : '#474444' }}>Sign up</h3>
                <h3 onClick={() => handleClick(false)} style={{ color: !isSignUp ? '#A9BCFF' : '#474444' }}>Log In</h3>
            </div>
            <div className={styles.inputArea}>
                <form className={styles.formArea} onSubmit={handleSubmit} id='myForm'>
                    {isSignUp && (
                        <div className='nameArea'>
                        <label htmlFor="name" style={{ marginRight: '3vw' }}>Name</label>
                        <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder={errors.name || ''} 
                        value={formData.name} 
                        style={{ borderColor: errors.name ? 'red' : '' }}
                        onChange={(e)=>setFormData({...formData, name: e.target.value})}
                        />
                        </div>
                    )}
                    <div className='emailArea'>
                        <label htmlFor="email" style={{marginRight:'3vw'}}>Email</label>
                        <input 
                        type="email"
                        id="email" 
                        name="email" 
                        placeholder={errors.email || ''}
                        value={formData.email}
                        style={{ borderColor: errors.email ? 'red' : '' }}
                        onChange={(e)=>setFormData({...formData,email: e.target.value
                        })}
                        />
                    </div>
                    <div className='passArea'>
                        <label htmlFor="password" style={{marginRight:'3vw'}}>Password</label>
                        <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder={errors.password || ''}
                        value={formData.password}
                        style={{ borderColor: errors.password ? 'red' : '' }}
                        onChange={(e)=>setFormData({...formData, password: e.target.value})} 
                        />
                    </div>
                    {isSignUp && (
                        <div className='confPassArea'>
                          <label htmlFor="confirm-password" style={{ marginRight: '3vw' }}>Confirm Password</label>
                          <input 
                          type="password" id="confirm-password" name="confirmPassword" 
                          placeholder={errors.confirmPassword || ''}
                          value={formData.confirmPassword}
                          style={{ borderColor: errors.confirmPassword ? 'red' : '' }}
                          onChange={(e)=>setFormData({...formData, confirmPassword: e.target.value})}
                          />
                        </div>
                      )}
                </form>
            </div>
            <button type='submit' form='myForm'>{isSignUp ? 'Sign Up' : 'Log In'}</button>
        </div>
    </div>
  )
}

export default Home;

