import React, {useReducer} from 'react';
import {toDoReducer} from "./toDoReducer";
import "./style.css";
import {useForm} from "../../hooks/useForm";

const ToDoApp = () => {
    const initialState = [{
        id: new Date().getTime(),
        desc: 'Learn react',
        done: false
    }];

    const [todDos, dispatch] = useReducer(toDoReducer, initialState);

    const [{description}, handleInputChange, reset] = useForm({description:''});

    const handleSubmit = (e) => {
        e.preventDefault();

        if( description.trim.length <= 1){
            return;
        }

        const newToDo = [{
            id: new Date().getTime(),
            desc: 'lolo',
            done: false
        }];


        const action = {
            type: 'add',
            payload: newToDo
        };

        dispatch(action);

        reset();

    };


    return (
        <div className='row'>
            <h1> ToDos App ({todDos.length })</h1>
            <hr />

            <div className='col-7'>
                <div className="d-flex">
                    <ul className='list-group list-group-flush'>
                        {
                            todDos.map( (toDO, i ) => (
                                <li key={i} className='list-group-item'>
                                    <p className='text me-5'> {i+1}. {toDO.desc} </p>
                                    <button className='btn btn-danger ms-5'>Delete</button>
                                    {  console.log(toDO.desc)  }
                                </li>
                            ))
                        }
                    </ul>

                </div>
            </div>

            <div className='col-5'>
                <h4>Add toDos</h4>
                <hr />

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        name="description"
                        className="form-control"
                        placeholder="Learn ..."
                        autoComplete="off"
                        onChange={ handleInputChange }
                        value={ description }
                    />

                    <button
                        type="submit"
                        className="btn btn-outline-primary mt-3 w-100"
                    >
                        Add
                    </button>


                </form>
            </div>
        </div>


    );
};

export default ToDoApp;