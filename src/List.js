import React, {Component} from 'react';

const List = ({items}) => {
    return (
        <div>
            {items.map((item, idx) => <div>List item {idx}</div>)}
        </div>
    )
}
export default List;