import {useEffect, useRef, useState} from 'react';

const UseFetch = (url) => {
    const [state, setState] = useState({data: null, loading: true, error : null});
    const isMounted = useRef(true);

    useEffect( () => {
        return () => {
            isMounted.current = false;
        }
    }, []) //efecto q se lanza si se desmonta un componente


    useEffect( () => {
        setState({data: null, loading: true, error : null});

        fetch( url )
            .then( resp => resp.json() )
            .then( data => {
                if ( isMounted.current ) {// ahora validamos si esta montado llamo el useState sino no
                    setState({
                        loading: false,
                        error: null,
                        data
                    });
                }

            });

    },[url]);

    return state;
};

export default UseFetch;


