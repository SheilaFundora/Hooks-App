import React from 'react';
import useFetch from "../../hooks/useFetch";
import {useCounter} from "../../hooks/useCounter";

const MultipleCustomHook = () => {

    const {counter, increment } = useCounter(1);

    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const {quote, author} = !!data && data[0]; //si existe la data la extraigoc

    return (
        <div>
            <h1>Breaking Bad Quote !!!</h1>
            <hr/>

            {
                loading
                    ?
                    (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    )
                    :
                    (
                        <blockquote className="blockquote text-end mt-5">
                            <p className="mb-0"> {quote} </p>
                            <footer className="blockquote-footer mt-1"> {author}</footer>
                        </blockquote>
                    )
            }
            <button className="btn btn-primary" onClick={ increment }>
                Siguiente quote
            </button>
        </div>
    );
};

export default MultipleCustomHook;