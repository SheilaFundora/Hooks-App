import React, {useState} from 'react';

const CounterApp = () => {

    const [state, setState] = useState({
        counter_1: 10,
        counter_2: 20,
        counter_3: 30,
        counter_4: 40
    });

    const {counter_1, counter_2} = state;

    return (
        <div>
            <h1>Counter {counter_1}</h1>
            <h1>Counter {counter_2}</h1>
            <hr/>

            <button
                className="btn btn-primary"
                onClick={ () => {
                    setState( {...state, counter_1:counter_1 + 1});
                }}
            >
                +1
            </button>

        </div>
    );
};

export default CounterApp;


