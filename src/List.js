import React, {Component} from 'react';

const List = ({items}) => (
    <div>{items.map((item,idx) => <div>
        Its person Name is {item.personName} and his age is {item.personAge}
    </div>)}</div>
)

export default List;