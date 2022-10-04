
const initialState = [{ //estado inicial de mi reducer
    id: new Date().getTime(),
    todo: 'Comprar pan',
    done: false
}];
//funcion reducer que resibe el estado inicial, si no se le envia coge el initialState x deaful, y
// resibe la accion, que en ella pasaremos lo que queremos hacer y el nuevo estado
const todoReducer = ( state = initialState, action ) => {
    if ( action?.type === 'agregar' ) {
        return [ ...state, action.payload ];
    }
    return state;
}
const newTodo = { //lo que le quiero agregar
    id: new Date().getTime(),
    todo: 'Comprar leche',
    done: false
}
const agregarTodoAction = { //el action
    type: 'agregar',
    payload: newTodo
}
let todos = todoReducer( todos, agregarTodoAction );//lamando al reducer y pasando sus parametros

