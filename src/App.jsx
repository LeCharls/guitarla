import { useState } from "react"
import Guitar from "./components/Guitar"
import Header from "./components/Header"
import { db } from "./data/db.js"

function App() {

  //UseState
  const [data, setData] = useState(db)
  const [cart, setCart] = useState([])
  // Agregar al carrito y actualizar la cantidad
  function addToCart(item) {

    const itemInCart = cart.find((element) => element.id === item.id)
    if (itemInCart) {
      const updateCart = [...cart]
      updateCart[updateCart.indexOf(itemInCart)].quantity++
      setCart(updateCart)   
    } else {
      item.quantity = 1
      setCart([...cart, item])
    }

  }

  return (
    <> 
      <Header/>
      
        <main className="container-xl mt-5">
            <h2 className="text-center">Nuestra Colección</h2>

            <div className="row mt-5">
              {data.map((guitar) => (
                <Guitar 
                  key={guitar.id}
                  guitar={guitar}
                  setCart={setCart}
                  addToCart={addToCart}
                />
              ))}
            </div>
        </main>


        <footer className="bg-dark mt-5 py-5">
            <div className="container-xl">
                <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
            </div>
        </footer>
    </>
  )
}

export default App
