import { Link } from "react-router-dom";
import { useContext } from "react";
import { PizzasContext } from "../contexts/PizzasContext";

import { Navbar, Container } from 'react-bootstrap'

const Navigate = () => {

    const { totalCarrito, localCurrency } = useContext(PizzasContext);

    return (
        <Navbar expand="lg" bg="primary" data-bs-theme="dark" className="fixed-top">
            <Container fluid className="justify-content-around">
                <Link 
                    to="/home"
                    className="Navbar-brand"
                >
                    🍕
                    Pizzeria Mamma Mia!
                </Link>
                <Link 
                    to="/carrito"
                    className={totalCarrito ? 'carrito-total Navbar-brand' : 'Navbar-brand'}
                >
                    <span className="carrito">🛒</span>
                    {totalCarrito ? ' ' + localCurrency(totalCarrito) : null}
                </Link>
            </Container>
        </Navbar>
    );
};

export default Navigate;