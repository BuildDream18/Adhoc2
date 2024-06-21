import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import Menu from "./pages/Menu";
import Restaurants from "./pages/Restaurants";
import Drivers from "./pages/Drivers";
import Orders from "./pages/Orders";
import Banners from "./pages/Banners";
import Users from "./pages/Users";
import Qrcode from "./pages/Qrcode";
import Layout from "./Layout/Layout";
import Confirmed from "./components/remains/OrderDetail/Confirmed";
import Pending from "./components/remains/OrderDetail/Pending";
import MenuRemain from './components/remains/Menu/MenuRemain';
import AddCategory from "./components/remains/Menu/AddCategory";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" exact Component={Home}></Route>
          <Route path="/signin" Component={Signin}></Route>
          <Route path="/dashboard" Component={Dashboard}></Route>
          <Route path="/menu" Component={Menu}></Route>
          <Route path="/restaurants" Component={Restaurants}></Route>
          <Route path="/drivers" Component={Drivers}></Route>
          <Route path="/orders" Component={Orders}></Route>
          <Route path="/banners" Component={Banners}></Route>
          <Route path="/users" Component={Users}></Route>
          <Route path="/qrcode" Component={Qrcode}></Route>
          <Route path="/confirmed" Component={Confirmed}></Route>
          <Route path="/pending" Component={Pending}></Route>
          <Route path="/menuremain" Component={MenuRemain}></Route>
          <Route path="/addcategory" Component={AddCategory}></Route>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
