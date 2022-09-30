import React, {useState} from 'react';
import Message from "./Message";

const SimpleForm = () => {
    const [formState, setFormState] = useState({
        name:'',
        email:''
    });

    const {name, email} = formState;

    const handleInputChange = ({target}) => {
        //para q cada ves q entremos algo en el input se actualice el value del input
        setFormState({
            ...formState,
            [target.name]: target.value
        })

    };

    return (
        <>
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

                <br />
                { (name ==='sheila') && <Message />}
            </div>

        </>
    );
};

export default SimpleForm;