import React, {useState} from 'react';
import AppRouter from "./AppRouter";
import './style.css';
import {UserContext} from "./UserContext";

const MainApp = () => {
    const [user, setUser] = useState({name:'none'});

    return (
        <UserContext.Provider value={ {user, setUser} }>
            <AppRouter />

        </UserContext.Provider>
    );
};

export default MainApp;