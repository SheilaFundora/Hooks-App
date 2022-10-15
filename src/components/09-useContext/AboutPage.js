import React, {useContext} from 'react';
import {UserContext} from "./UserContext";

const AboutPage = () => {
    const userContext = useContext(UserContext);
    //El parametro q resive UserContext, es lo que le va a decir a mi useContext que busque la siguiente instancia
    // en este árbol de componentes,que sea de tipo y use context. O sea le pasamos el context q creamos, el padre

    return (
        <div>
            <h1>AboutPage</h1>
            <hr />
        </div>
    );
};

export default AboutPage;