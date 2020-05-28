import React, {useState} from 'react';

const TodoForm = ({onTodoForm}) => {
    const [state, setState] = useState();
    const onSubmit = (e) => {
        e.preventDefault();
        onTodoForm(state);
    }

    const onChange = (e) => {
        const {name, value} = e.target;
        setState({...state, [name]: value})
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type='text' name='personName' placeholder='personName' onChange={onChange} />
                <input type='text' name='personAge' placeholder='personAge' onChange={onChange} />
                <button>submit</button>
            </form>
        </div>
    )
}
export default TodoForm;