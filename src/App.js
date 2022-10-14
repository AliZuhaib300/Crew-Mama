import { Route, Routes } from "react-router-dom";
import AddCart from "./components/AddCart";
import NavBar from "./components/NavBar";
import CartDataDemo from "./components/cart/CartDataDemo";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <AddCart />
          </>
        }
      />
      <Route path="/cart" element={<CartDataDemo />} />
    </Routes>
  );
};

export default App;
