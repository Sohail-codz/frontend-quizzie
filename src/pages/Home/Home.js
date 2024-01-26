import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../Home/Home.module.css';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home() {
    const navigate = useNavigate();
    const [isSignUp, setIsSignUp] = useState(true);
    const [isSignUpSuccess, setIsSignUpSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState({});

    const handleClick = (isSignUpOption) => {
        setIsSignUp(isSignUpOption);
        setIsSignUpSuccess(false); 
        setErrors({});
        setFormData({
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        });
    };

    const validateForm = () => {
        const newErrors = {};

        if (isSignUp && (!formData.name || !formData.name.trim())) {
            newErrors.name = 'Name is required';
        }
        if (!formData.email || !formData.email.trim()) {
            newErrors.email = 'Email is required';
        }
        if (!formData.password || !formData.password.trim()) {
            newErrors.password = 'Password is required';
        }
        if (
            isSignUp &&
            (formData.password !== formData.confirmPassword )
        ) {
            newErrors.confirmPassword = 'Passwords do not match';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleAuthRequest = async (url) => {
        try {
            const response = await axios.post(url, formData);
            console.log(response.data);
            if (isSignUp) {
                setIsSignUpSuccess(true);
                toast.success('Sign Up Successful!', { position:'top-center', autoClose: 2000 });
            }
            if (!isSignUp) {
                const { token, } = response.data;
                localStorage.setItem('jwtToken', token);  
                setIsSignUpSuccess(true);
                toast.success('Login Successful!', { position:'top-center', autoClose: 2000 });
                setTimeout(() => {
                    navigate('/dashboard');
                  }, 3000);
            }
        } catch (error) {
            console.error(error.response.data);
            if (error.response.data.error) {
                const errorMessage = error.response.data.error.toLowerCase();
                if (isSignUp && errorMessage.includes('exists')) {
                    setErrors({ email: error.response.data.error });
                } else if (!isSignUp && errorMessage.includes('password')) {
                    setErrors({ password: error.response.data.error });
                } else if(!isSignUp && errorMessage.includes('not')){
                    setErrors({ email: error.response.data.error });
                }
            }
            console.log(error)
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!validateForm() || errors.email || errors.password) {
            return;
        }
    
        const url = isSignUp
            ? 'http://localhost:4000/sign-up'
            : 'http://localhost:4000/login';
    
        try {
            await handleAuthRequest(url);
    
            if (isSignUpSuccess) {
                setIsSignUpSuccess(true);
            } else {
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    name: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                }));
            }
        } catch (error) {
            console.log(error)
            console.error(error.response.data);
            setFormData((prevFormData) => ({
                ...prevFormData,
                password: '',
                confirmPassword: '',
            }));
        }
    };
    
    useEffect(() => {
        if (isSignUpSuccess) {
            setIsSignUp(false);
            setIsSignUpSuccess(false);
            setFormData({
                name: '', 
                email: '',
                password: '',
                confirmPassword: '',
            });
        }
        const expirationTime = 60*60*1000; 
            setTimeout(() => {
                localStorage.removeItem('jwtToken');
            }, expirationTime);
    }, [isSignUpSuccess]);


    // useEffect(()=>{
    //     const expirationTime = 2000; 
    //         setTimeout(() => {
    //             console.log('removing token');
    //             localStorage.removeItem('jwtToken');
    //         }, expirationTime);
    // },[])

    return (
        <div className={styles.homeContainer}>
            <div className={styles.container}>
                <h1 className={styles.header}>QUIZZIE</h1>
                <div className={styles.options}>
                    <h3 className={styles.signup}
                        onClick={() => handleClick(true)}
                        style={{ color: isSignUp ? '#A9BCFF' : '#474444'}}
                    >
                        Sign up
                    </h3>
                    <h3 className={styles.login}
                        onClick={() => handleClick(false)}
                        style={{ color: !isSignUp ? '#A9BCFF' : '#474444' }}
                    >
                        Log In
                    </h3>
                </div>
                <div className={styles.inputArea}>
                    <form className={styles.formArea} onSubmit={handleSubmit} id='myForm'>
                        {isSignUp && (
                            <div className='nameArea'>
                                <label htmlFor='name' style={{ marginRight: '3vw' }}>
                                    Name
                                </label>
                                <input
                                    className={styles.inputStyles}
                                    type='text'
                                    id='name'
                                    name='name'
                                    placeholder={errors.name || ''}
                                    value={formData.name}
                                    style={{ borderColor: errors.name ? 'red' : '' }}
                                    onChange={(e) =>
                                        setFormData({ ...formData, name: e.target.value })
                                    }
                                />
                            </div>
                        )}
                        <div className='emailArea'>
                            <label htmlFor='email' style={{ marginRight: '3vw' }}>
                                Email
                            </label>
                            <input
                                className={styles.inputStyles}
                                type='email'
                                id='email'
                                name='email'
                                placeholder={errors.email || ''}
                                value={formData.email}
                                style={{ borderColor: errors.email ? 'red' : '' }}
                                onChange={(e) =>
                                    setFormData({ ...formData, email: e.target.value })
                                }
                            />
                        </div>
                        <div className='passArea'>
                            <label htmlFor='password' style={{ marginRight: '3vw' }}>
                                Password
                            </label>
                            <input
                                className={styles.inputStyles}
                                type='password'
                                id='password'
                                name='password'
                                placeholder={errors.password || ''}
                                value={formData.password}
                                style={{ borderColor: errors.password ? 'red' : '' }}
                                onChange={(e) =>
                                    setFormData({ ...formData, password: e.target.value })
                                }
                            />
                        </div>
                        {isSignUp && (
                            <div className='confPassArea'>
                                <label htmlFor='confirm-password' style={{ marginRight: '3vw' }}>
                                    Confirm Password
                                </label>
                                <input
                                    className={styles.inputStyles}
                                    type='password'
                                    id='confirm-password'
                                    name='confirmPassword'
                                    placeholder={errors.confirmPassword || ''}
                                    value={formData.confirmPassword}
                                    style={{ borderColor: errors.confirmPassword ? 'red' : '' }}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            confirmPassword: e.target.value,
                                        })
                                    }
                                />
                            </div>
                        )} <p style={{color:'red'}}>{errors.confirmPassword || ''}</p>
                    </form>
                </div>
                <button className={styles.LnSbutton} type='submit' form='myForm'>
                    {isSignUp ? 'Sign Up' : 'Log In'}
                </button>
            </div>
            <ToastContainer/>
        </div>
    );
}

export default Home;