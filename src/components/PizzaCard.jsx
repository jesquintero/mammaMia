import { useNavigate } from 'react-router-dom';
import { Card, ListGroup, Col } from 'react-bootstrap';

const PizzaCard = ({pizza, localCurrency, addToCarrito}) => {

  const navigate = useNavigate();

  return (
    <Col key={pizza.id} className='mt-4'>
      <Card  style={{ width: '18rem' }}>
        <Card.Img variant="top" src={pizza.img} alt={pizza.name} />
        <Card.Body>
          <Card.Title className='text-center'>{pizza.name}</Card.Title>
          <hr></hr>
          <Card.Text>
            <h5>Ingredientes</h5>
            <ul>
                {pizza.ingredients.map((ingredient, index) => (
                    <li key={index} className='pizza-list'>🍕 {ingredient}</li>
                ))}
            </ul>

          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
        </ListGroup>
          <ListGroup.Item className='moneda'>{localCurrency(pizza.price)}</ListGroup.Item>
        <Card.Body className='card-button'>
          <button
              onClick={() => {navigate(`/pizza/${pizza.id}`);}}
              className='btn ver-mas'>
              Ver más
          </button>
          <button
              onClick={() => {addToCarrito(pizza);}}
              className='btn add-to-cart'>
              Añadir
          </button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default PizzaCard;