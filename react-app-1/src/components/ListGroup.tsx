import { Fragment  } from "react";


function ListGroup() {
    let items =[
        'New York',
        'Thika',
        'Nairobi',
        'Tokyo',
        'Mumbai'
    ];
    items = [];

    return (
    <Fragment>
        <h1>List</h1>
        {items.length === 0 && <p> No Item found</p>}
        <ul className="list-group">
        {items.map(item => <li key={item}>{item}</li>)}
        </ul>
    </Fragment>
    );
}

export default ListGroup;