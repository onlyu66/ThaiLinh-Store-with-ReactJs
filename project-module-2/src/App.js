import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import Admin from "./components/pages/Admin/Admin";
import ProductsManagement from "./components/pages/Admin/Product/ProductsManagement";
import Dashboard from "./components/pages/Admin/Dashboard";
import Phones from "./components/layouts/Article//Phones/Phones";
import Article from "./components/layouts/Article/Article";
import Apple from "./components/layouts/Article/Phones/Apple/Apple";
import Iphone15Series from "./components/layouts/Article/Phones/Apple/iPhone15Series/Iphone15Series";
import Iphone15 from "./components/layouts/Article/Phones/Apple/iPhone15Series/Iphone15";
import Iphone15Plus from "./components/layouts/Article/Phones/Apple/iPhone15Series/Iphone15Plus";
import Iphone15Pro from "./components/layouts/Article/Phones/Apple/iPhone15Series/Iphone15Pro";
import Iphone15Promax from "./components/layouts/Article/Phones/Apple/iPhone15Series/Iphone15Promax";
import Samsung from "./components/layouts/Article/Phones/Samsung";
import SearchResult from "./components/layouts/Article/SearchResult";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
function App() {
  return (
    <div>
      <ToastContainer/>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/" element={<HomePage />}>
          <Route index element={<Article />}></Route>
          <Route path="home" element={<Article />}></Route>
          <Route path="phones" element={<Phones />}></Route>
          <Route path="searchResult" element={<SearchResult />}></Route>
          <Route path="/phones/apple" element={<Apple />}></Route>
          <Route
            path="/phones/apple/iPhone15Series"
            element={<Iphone15Series />}
          ></Route>
          <Route
            path="/phones/apple/iPhone15Series/iPhone15"
            element={<Iphone15 />}
          ></Route>
          <Route
            path="/phones/apple/iPhone15Series/iPhone15Plus"
            element={<Iphone15Plus />}
          ></Route>
          <Route
            path="/phones/apple/iPhone15Series/iPhone15Pro"
            element={<Iphone15Pro />}
          ></Route>
          <Route
            path="/phones/apple/iPhone15Series/iPhone15Promax"
            element={<Iphone15Promax />}
          ></Route>
          <Route path="/phones/samsung" element={<Samsung />}></Route>
        </Route>
        <Route path="/admin" element={<Admin />}>
          <Route index element={<Dashboard />}></Route>
          <Route path="dashboard" element={<Dashboard />}></Route>
          <Route path="product" element={<ProductsManagement />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
