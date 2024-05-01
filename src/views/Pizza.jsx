import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { PizzasContext } from '../contexts/PizzasContext';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Pizza = () => {

    const { id } = useParams();
    const { pizzas, addToCarrito, localCurrency } = useContext(PizzasContext);
    const navigate = useNavigate();

    return (
        <Container className='pizza-detalle'>
            <Row>
                <Col className='col-12'>
                    {pizzas.filter((pizza) => pizza.id === id).map((pizza) => 
                    <Card key={pizza.id}>
                    <div className="row no-gutters">
                      <div className="col-md-4">
                        <Card.Img variant="top" src={pizza.img} alt={pizza.name} />
                      </div>
                      <div className="col-md-8">
                        <Card.Body>
                          <Card.Title><h2>{pizza.name}</h2></Card.Title>
                          <Card.Text>{pizza.desc}</Card.Text>
                          <h5>Ingredientes</h5>
                          <ul>
                              {pizza.ingredients.map((ingredient, index) => (
                                  <li key={index} className='pizza-list'>🍕 {ingredient}</li>
                              ))}
                          </ul>

                          <p className='card-text moneda-dos'>
                              Precio: {localCurrency(pizza.price)}
                          </p>

                          <button
                             onClick={() => addToCarrito(pizza)}
                             className='btn btn-primary add-to-cart'>
                             Añadir
                          </button>

                        </Card.Body>
                      </div>
                    </div>
                  </Card>
                )}                
                </Col>
                <Col className='text-center'>
                    <button
                        onClick={() => {
                            navigate('/home');}}
                        className='btn ver-mas m-2'
                        style={{ maxWidth: 300}}>
                        Volver al inicio
                    </button>
                </Col>
            </Row>
        </Container>
    )
}

export default Pizza