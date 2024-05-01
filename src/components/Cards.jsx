import { Container, Row } from 'react-bootstrap'
import PizzaCard from './PizzaCard';



const Cards = props => {

    const {pizzas} = props

    return (
        <Container className='mt-5'>
            <Row>
                {pizzas.map((pizza) => (
                    <PizzaCard content={pizza} />

                )}
            </Row>
        </Container>
    );
};


export default Cards ;