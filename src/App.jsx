import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { CartProvider } from "./Context/CartContext";
import Navbar from "./Components/Navbar";
import Shop from "./Pages/Shop"

function App(){
  return(
    <CartProvider>
    <Container>
      <Navbar />
        <Routes>
        <Route index element={ <Shop /> }/>
      </Routes>
    </Container>
    </CartProvider>
   
  )
}
export default App;