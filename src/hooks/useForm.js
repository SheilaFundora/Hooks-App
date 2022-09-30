import {useState} from "react";

//este custom hook es para los formularios, creamos un estado de los valores pasados y un metdo q mantiene los
// valores y modifica el pasado por parametro
export const useForm = ( initialState ) => {
    const [values, setValues] = useState(initialState);

    const handleInputChange = ({target}) => {
        //para q cada ves q entremos algo en el input se actualice el value del input
        setValues({
            ...values,
            [target.name]: target.value
        })

    };

    return [values, handleInputChange];
};

