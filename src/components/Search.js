import React, { useState, useEffect } from 'react'
import { Form, InputGroup } from 'react-bootstrap';
import { MdSearch } from "react-icons/md";
import Movements from './Movements';

function Search({ movements, editMovement, removeMovement }) {

    const [filteredMovements, setFilteredMovements] = useState(movements);

    const [filteredTypes, setFilteredTypes] = useState("todos");

    const [filteredName, setFilteredName] = useState("");

    useEffect(() => {

        if (filteredTypes === "todos") {
            filterMovementsNameOnly();
        } else {
            setFilteredMovements(movements.filter(movement => movement.movementType === filteredTypes &&
                (filteredName !== "" ? movement.name.toUpperCase().includes(filteredName.toUpperCase()) : true)));
        }

    }, [movements]);


    const handleRadioButtonChange = (e) => {
        setFilteredTypes(e.target.name);

        if (e.target.name === "todos") {
            filterMovementsNameOnly();
        } else {
            setFilteredMovements(movements.filter(movement => movement.movementType === e.target.name &&
                (filteredName !== "" ? movement.name.toUpperCase().includes(filteredName.toUpperCase()) : true)));
        }
    }

    const filterMovementsNameOnly = () => {
        if (filteredName !== "") {
            setFilteredMovements(movements.filter(movement =>
                movement.name.toUpperCase().includes(filteredName.toUpperCase())));
        } else {
            setFilteredMovements(movements);
        }
    }

    const handleInputFindChange = (e) => {

        setFilteredName(e.target.value);
        /**El toUpperCase es para que no tenga en cuenta lo del sensitive, 
         * es decir que no importe si ingresan en mayuscula o minuscula
         */

        if (filteredTypes === "todos") {
            setFilteredMovements(movements
                .filter(movement => (e.target.value !== "" ? movement.name.toUpperCase()
                    .includes(e.target.value.toUpperCase()) : true)));
        } else {
            setFilteredMovements(movements
                .filter(movement => movement.movementType === filteredTypes
                    && (e.target.value !== "" ? movement.name.toUpperCase()
                        .includes(e.target.value.toUpperCase()) : true)));
        }
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
