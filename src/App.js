import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import './App.css';
import Header from "./components/Header";
import ListMovements from "./components/ListMovements";
import Registry from "./components/Registry";

const App = () => {

  const [movements, setMovements] = useState([]);

  const [title, setTitle] = useState("Taller N° 1");

  const [initialBalance, setInitialBalance] = useState("0");

  const [finalBalance, setFinalBalance] = useState("0");

  useEffect(() => {
    const totalIngresos = movements.filter((dato) => dato.movementType === "ingreso")
      .reduce((totalI, elemt) => (totalI += +elemt.quantity), 0);

    const totalGastos = movements.filter((dato) => dato.movementType === "gasto")
      .reduce((totalG, elemt) => (totalG += +elemt.quantity), 0);

    setFinalBalance((+initialBalance) + (totalIngresos - totalGastos));

  }, [movements, initialBalance]);

  const addMovement = (movement) => {
    setMovements([...movements, movement]);
  };

  const editMovement = (newMovement) => {
    setMovements(
      movements.map(movement => {
        if (movement.id === newMovement.id) {
          return {
            ...movement, movementType: newMovement.movementType, name: newMovement.name, quantity: newMovement.quantity
          };
        }
        return movement;
      })
    );
  };

  const addInitialBalance = (newInitialBalance) => {
    setInitialBalance(newInitialBalance);
  };

  const removeMovement = (id) => {
    setMovements(movements.filter(movement => movement.id !== id));
  };

  return (
    <Container>
      <Header title={title} finalBalance={finalBalance} initialBalance={initialBalance} addInitialBalance={addInitialBalance} />
      <Row>
        <Col className="mt-3">
          <Registry addMovement={addMovement} finalBalance={finalBalance} />
        </Col>
        <Col className="mt-3">
          <ListMovements movements={movements} editMovement={editMovement} removeMovement={removeMovement} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
