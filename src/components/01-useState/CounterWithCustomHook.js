import React from 'react';
import './counter.css';
import {useCounter} from '../../hooks/useCounter'

const CounterWithCustomHook = () => {

    const {counter, increment, decrement, reset} = useCounter();
    //si no hacemos esto para acceder a cada uno d ellos enemos q guardar el metodo en una funcion aux y poner
    // aux.increment y asi cuando lo podemos utilizar mas corto destructurizando

    return (
        <>
            <h1>Counter {counter}</h1>
            <hr/>

            <div className="mt-5">
                <button className="btn btn-success mx-4" onClick={ () => {increment(2)}}>
                    +1
                </button>
                <button className="btn btn-primary mx-4" onClick={reset}>
                    Reset
                </button>
                <button className="btn btn-danger mx-4" onClick={() => decrement(2)}>
                    -1
                </button>
            </div>
        </>
    );
};

export default CounterWithCustomHook;