import Home from "./components/Home.js";
import New from "./components/New.js";
import Product from "./components/Product.js";
import Edit from "./components/Edit.js";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/new" element={<New />}/>
        <Route path="/:id" element={<Product />}/>
        <Route path="/:id/edit" element={<Edit />}/>
      </Routes>
  );
}

export default App;
