import React, { useState } from 'react';

const Form = () => {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        username: '',
        email: '',
        password: ''
    });



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };


    const validate = () => {
        let tempErrors = {};
        let isValid = true;

        if (!formData.username) {
            tempErrors.username = 'Username is required';
            isValid = false;
        }

        if (!formData.email) {
            tempErrors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = 'Email is not valid';
            isValid = false;
        }

        if (!formData.password) {
            tempErrors.password = 'Password is required';
            isValid = false;
        } else if (formData.password.length < 6) {
            tempErrors.password = 'Password must be at least 6 characters long and contain at least one uppercase letter';
            isValid = false;
        }

        setErrors(tempErrors);
        return isValid;
    };


    const handleSubmit = (e) => {
        e.preventDefault();


        if (validate()) {

            alert('Form submitted successfully!');
        }
    };

    return (
        <div style={{ width: '50%', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', backgroundColor: 'lightyellow', }}>
            <div>
                <h1 style={{
                    color: 'blue',
                }}>Fill From</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '15px' }}>
                    <label hymlFor="Username" style=
                    {{ display: 'block', color: 'green', fontWeight: 'bold' }}>Username:</label>
                    <input className='px-4 py-3'
                        type="text"
                        autoComplete='off'
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder='enter your name'  

                        style={{
                            width: '50%',
                            padding: '8px',
                            border: '1px solid #ddd',
                            borderRadius: '4px',
                            boxSizing: 'border-box',
                            backgroundColor: '#e6eeff',

                        }}
                    />
                  {errors.username && (<span style={{ color: 'red' }}>{errors.username}</span>)}
                    {errors.name && <p style={{ color: 'red' }}>{errors.username}</p>}
                </div>

                <div>
                    <label style=
                        {{
                            display: 'block',
                            color: 'green',
                            fontWeight: 'bold'
                        }}>
                        Email:</label>
                    <input
                        type="email"
                        autoComplete='off'
                        name="email"
                        placeholder='enter your email'
                        value={formData.email}
                        onChange={handleChange}
                        style={{
                            width: '50%',
                            padding: '8px',
                            border: '1px solid #ddd',
                            borderRadius: '4px',
                            boxSizing: 'border-box',
                            backgroundColor: '#e6eeff',
                        }}
                    />
                    {errors.email && (<span style={{ color: 'red' }}>{errors.email}</span>)}
                </div>

                <div>
                    <label style={{
                        display: 'block',
                        color: 'green',
                        fontWeight: 'bold'
                    }}>Password:</label>
                    <input
                        type="password"
                        name="password"
                        autoComplete='off'
                        placeholder='enter your password'
                        value={formData.password}
                        onChange={handleChange}
                        style={{
                            width: '50%',
                            padding: '8px',
                            border: '1px solid #ddd',
                            borderRadius: '4px',
                            boxSizing: 'border-box',
                            backgroundColor: '#e6eeff',
                        }}
                    />
                    {errors.password && (<span style={{ color: 'red' }}>{errors.password}</span>
                    )}
                </div>


                <button onClick={handleSubmit}>
                    Submitted
                </button>
            </form>
            
        </div>
        
    );
};

export default Form;