import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import E404 from '../assets/img/404.jpg'

const Error = () => {
  return (
    <Container className='text-center error'>
      <Row>
        <Col>
          <h2>Este sitio no existe</h2>
          <p>Vuelve a intentarlo desde el home</p>
          <img 
              src={E404}
              alt="404 error"
          />
        </Col>
      </Row>
    </Container>
  )
}

export default Error