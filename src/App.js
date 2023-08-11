import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Sidepanel from './components/Sidepanel';
import Dashboards from './pages/Dashboards';
import Products from './pages/Products';
import Categories from './pages/Categories';
import Orders from './pages/Orders';
import Admins from './pages/Admins';
import Settings from './pages/Settings';
import EditProduct from './pages/EditProduct';
import ImageContextProvider from './context/ImageContext';
import AddProduct from "./pages/AddProduct";
import EditCategories from './pages/EditCategories';

function App() {
  return (
    <ImageContextProvider>
      <BrowserRouter>
      <div className="App">
        <Sidepanel/>
        <Routes>
          <Route path="/" element={<Dashboards/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/edit" element={<EditProduct/>}/>
          <Route path="/AddProduct" element={<AddProduct/>} />
          <Route path="/categories" element={<Categories/>}/>
          <Route path="/edit-categories" element={<EditCategories/>}/>
          <Route path="/orders" element={<Orders/>} />
          <Route path="/admins" element={<Admins/>} />
          <Route path="/settings" element={<Settings/>} />
        </Routes>
      </div>
      </BrowserRouter>
    </ImageContextProvider>
  );
}

export default App;