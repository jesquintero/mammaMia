import React, { useContext } from 'react'
import { PizzasContext } from '../contexts/PizzasContext';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import PizzaCard from '../components/PizzaCard';
import { Container, Row } from 'react-bootstrap';

const Home = () => {

    const { pizzas, addToCarrito, localCurrency } = useContext(PizzasContext);
    const navigate = useNavigate();

    return (
        <>
            <Header titulo={'¡Pizzería Mamma Mia!'} slogan={'¡Tenemos las mejores pizzas que podrás encontrar!'}/>
            <Container className="mt-4">
                <Row>
                    {pizzas.map((pizza) => (
                        <PizzaCard pizza={pizza} localCurrency={localCurrency} addToCarrito={addToCarrito} />
                    ))}
                </Row>
            </Container>
        </>
    )
}

export default Home