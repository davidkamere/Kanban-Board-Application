import React, { useState } from "react";
import { Button } from 'react-bootstrap';

function AddColumn(props) {
    const [showNewColumnButton, setShowNewColumnButton] = useState(true);
    const [value, setValue] = useState("");

    function handleInputChange(event) {
        setValue(event.target.value);
    }

    function onNewColumnButtonClick() {
        setShowNewColumnButton(false);
    }

    function onNewColumnInputComplete() {
        setShowNewColumnButton(true);
        addNewColumn(value);
        setValue("");
    }

    function addNewColumn(title) {
        const newColumnOrder = Array.from(props.state.columnOrder);
        const newColumnId = 'column-' + Math.floor(Math.random() * 100000);
        newColumnOrder.push(newColumnId);

        const newColumn = {
            id: newColumnId,
            title: title,
            taskIds: [],
        };

        props.setState({
            ...props.state,
            columnOrder: newColumnOrder,
            columns: {
                ...props.state.columns,
                [newColumnId]: newColumn
            }
        });
    }

    return (
        <div>
            {
                showNewColumnButton ?
                <Button variant="outline-dark" onClick={onNewColumnButtonClick}>New Column</Button> :
                <input type="text" value={value} onChange={handleInputChange} onBlur={onNewColumnInputComplete} />
            }
        </div>
    )
}

export default AddColumn;