import React from 'react';
import {useEffect} from 'react';
import Message from "./Message";
import {useForm} from "../../hooks/useForm";

const FormWithCustomHook = () => {

    //lamamos al hook q creamos pasando lo q quiero del formulario
    const [formValues, handleInputChange] = useForm({
        name:'',
        email:'',
        password:''
    });

    const { name, email, password} = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    };

    useEffect( () => {
        console.log('email change');
    }, [email]);

    return (
        <form onSubmit={ handleSubmit }>
            <h1>useEffect</h1>
            <hr />

            <div className='m-5'>
                <div className='mt-4 w-50'>
                    <input type="text" name="name" placeholder='your name' className='form-control'
                           value={name} onChange={handleInputChange} autoComplete='off'/>
                </div>
                <div className='mt-4 w-50'>
                    <input type="text" name="email" placeholder='email@gmail.com' className='form-control'
                           value={email} onChange={handleInputChange} autoComplete='off'/>
                </div>
                <div className='mt-4 w-50'>
                    <input type="password" name="password" placeholder='password' className='form-control'
                           value={password} onChange={handleInputChange} autoComplete='off'/>
                </div>

                <br />
                { (name ==='sheila') && <Message />}

                <button type='submit' className='btn btn-primary px-5'>Send</button>
            </div>
        </form>
    );
};

export default FormWithCustomHook;