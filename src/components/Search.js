import React, { useState, useEffect } from 'react'
import { Form, InputGroup } from 'react-bootstrap';
import { MdSearch } from "react-icons/md";
import Movements from './Movements';

function Search({ movements, editMovement, removeMovement }) {

    const [filteredMovements, setFilteredMovements] = useState(movements);

    const [filteredTypes, setFilteredTypes] = useState("todos");

    useEffect(() => {
        if (filteredTypes === "todos") {
            setFilteredMovements(movements);
        } else {
            setFilteredMovements(movements.filter(movement => movement.movementType === filteredTypes));
        }

    }, [movements]);


    const handleRadioButtonChange = (e) => {
        setFilteredTypes(e.target.name);

        if (e.target.name === "todos") {
            setFilteredMovements(movements);
        } else {
            setFilteredMovements(movements.filter(movement => movement.movementType === e.target.name));
        }
    }

    const handleInputFindChange = (e) => {
        /**El toUpperCase es para que no tenga en cuenta lo del sensitive, 
         * es decir que no importe si ingresan en mayuscula o minuscula
         */
        setFilteredMovements(movements.filter(movement => movement.name.toUpperCase().includes(e.target.value.toUpperCase())));
    }

    return (
        <>
            <Form inline>
                <Form.Group>
                    <InputGroup className="mr-1">
                        <InputGroup.Prepend>
                            <InputGroup.Text><MdSearch /></InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control type="text" placeholder="Ingrese el nombre a buscar" onChange={handleInputFindChange} />
                    </InputGroup>
                </Form.Group>
                <Form.Group onChange={handleRadioButtonChange}>
                    <Form.Check inline type="radio" label="Todos" name="todos" value="todos" checked={filteredTypes === "todos"} />
                    <Form.Check inline type="radio" label="Ingreso" name="ingreso" value="ingreso" checked={filteredTypes === "ingreso"} />
                    <Form.Check inline type="radio" label="Gasto" name="gasto" value="gasto" checked={filteredTypes === "gasto"} />
                </Form.Group>

            </Form>

            <Movements movements={filteredMovements} editMovement={editMovement} removeMovement={removeMovement} />
        </>
    )
}

export default Search
