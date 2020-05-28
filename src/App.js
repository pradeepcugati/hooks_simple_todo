import React, { useState } from 'react';
import TodoForm from './TodoForm';
import List from './List';

const App = () => {
    const [state, setState] = useState({
        list: []
    });

    const onTodoForm = (item) => {
       setState({...state, list: [...state.list, item]});
    }
    
    return (
        <div>
            <TodoForm onTodoForm={onTodoForm} />
            <List items={state.list} />
        </div>
    )
}
    


export default App;
