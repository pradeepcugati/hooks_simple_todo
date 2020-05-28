import React, {useState} from 'react';

const TodoForm = ({onTodoForm}) => {
    const [state,setState] = useState({
        personName: '',
        personAge: ''
    });
    const onSubmit = (e) => {
        e.preventDefault();
        onTodoForm(state);
    }
    const onChange = (e) => {
        //e.preventDefault();
        const {name,value} = e.target;
        setState({...state, [name]: value});
    }
    return (
        <form onSubmit={onSubmit}>
            <input type='text' name='personName' onChange={onChange} placeholder='personName' />
            <input type='text' name='personAge' onChange={onChange} placeholder='personAge' />
            <button>Submit</button>
        </form>
    )
}

export default TodoForm;