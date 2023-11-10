import { Route, Routes } from "react-router-dom";
import Home from "./Screens/Home/Home";
import Cart from "./Screens/Cart/Cart";
import NotFound from "./Screens/NotFound/NotFound";

function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="*" element={<NotFound/>} />
     </Routes>
    </>
  );
}

export default App;
