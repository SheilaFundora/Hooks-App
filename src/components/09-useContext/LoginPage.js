import React, {useContext} from 'react';
import {UserContext} from "./UserContext";

const LoginPage = () => {
    const {user,setUser} = useContext(UserContext);
    console.log(user);

    return (
        <div>
            <h1>LoginPage</h1>
            <hr />

            <button className="btn btn-primary m-4" onClick={ () => setUser( {name:"Sheila"} )}>Login</button>
        </div>
    );
};

export default LoginPage;