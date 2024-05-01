import React, { useContext } from 'react'
import { PizzasContext } from '../contexts/PizzasContext';
import PizzaCart from '../components/PizzaCart';

const Carrito = () => {

    const { Carrito } = useContext(PizzasContext);

    return (
        <div className='Carrito-resume'>
            <h1 className='fs-4'>Detalles del pedido</h1>
            {Carrito.length === 0 ? (
                <p>Sin artículos en el carrito</p>
                ) : (
                    <PizzaCart />
                )}            
        </div>
    )
}

export default Carrito