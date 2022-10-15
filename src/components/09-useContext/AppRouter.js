import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


import AboutPage from "./AboutPage";
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";
import NavBar from "./NavBar";


const AppRouter = () => {
    return (
        <Router>
            <NavBar />
            <div>
                <Routes>
                    <Route exact path = "/about" element = { <AboutPage />} />
                    <Route exact path = "/login" element = { <LoginPage />} />
                    <Route exact path = "/" element = { <HomePage />} />
                </Routes>
            </div>

        </Router>
    );
};

/*
Lo que hacemos con el Routes, es ir creando Route rutas, podemos ir diciendo que componente queremos que se muestre
en cada ruta
El exact es para q coja la ruta exacta, sino si ponemos primero /, nos coge esta para todos
* */
export default AppRouter;