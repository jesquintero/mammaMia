import React, { useState, createContext, useEffect } from 'react'

export const PizzasContext = createContext()

export default function PizzaProvider({ children }) {
    
    const [pizzas, setPizzas] = useState([]);
    const [Carrito, setCarrito] = useState([]);

    const fetchPizzas = async () => {
        try {
            const response = await fetch("https://mocki.io/v1/d760e6cb-d19f-49ac-9ceb-3001cd39a59c");
            const data = await response.json();
            setPizzas(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchPizzas();
    }, []);

    const increaseCount = (index) => {
        const newCarrito = [...Carrito];
        newCarrito[index].count++;
        setCarrito(newCarrito);
    };

    const decreaseCount = (index) => {
        const newCarrito = [...Carrito];
        newCarrito[index].count--;
        if (newCarrito[index].count === 0) {
            newCarrito.splice(index, 1);
        }
        setCarrito(newCarrito);
    };

    const addToCarrito = (pizza) => {
        const newCarrito = [...Carrito];
        const index = newCarrito.findIndex((item) => item.id === pizza.id);
        if (index === -1) {
            newCarrito.push({ ...pizza, count: 1 });
        } else {
            newCarrito[index].count++;
        }
        setCarrito(newCarrito);
    };

    const totalCarrito = Carrito.reduce((acc, item) => acc + item.count * item.price, 0);

    const localCurrency = (value) => {
        return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(value);
    };

    return (
        <PizzasContext.Provider 
            value={{ 
                pizzas,
                Carrito,
                setCarrito,
                increaseCount, 
                decreaseCount, 
                addToCarrito, 
                totalCarrito, 
                localCurrency 
            }}
        >
            {children}
        </PizzasContext.Provider>
    );
}