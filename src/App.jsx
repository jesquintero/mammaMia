import { Route, BrowserRouter, Routes } from 'react-router-dom'
import './App.css'
import PizzaProvider from './contexts/PizzasContext'
import Navigate from './components/Navigate'
import Home from './views/Home'
import Carrito from './views/Carrito'
import Pizza from './views/Pizza'
import Error from './views/Error'

function App() {

  return (
    <PizzaProvider>
      <BrowserRouter>
        <Navigate />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/carrito' element={<Carrito />} />
          <Route path='/pizza/:id' element={<Pizza />} />   
          <Route path='*' element={<Error />} />       
        </Routes>
      </BrowserRouter>
    </PizzaProvider>
  )
}

export default App