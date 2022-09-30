import React, {useState} from 'react';
import MultipleCustomHook from "../03-examples/MultipleCustomHook";

const RealExampleUseRef = () => {

    const [show, setShow] = useState(false);
    return (
        <div>
            <h1 className='text-center mb-5'>RealExampleRef</h1>

            { show && <MultipleCustomHook />  }

            <button className='btn btn-primary mt-5' onClick={ () => {setShow(!show)}}>
                Show/hidden
            </button>

        </div>
    );
};

export default RealExampleUseRef;

