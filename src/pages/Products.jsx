import { Link } from "react-router-dom";
import {ImageContext} from '../context/ImageContext';
import { useContext } from "react";
import Modal from "../components/Modal";

const Products = () => {
  const {products, handleEditproductlink, handleProductdelete, isModal} = useContext(ImageContext);
  return (
    <div className="products page">
        <Link to="/AddProduct" className="products_addbtn">Add new product</Link>
        <h3 className="products_name_column">PRODUCT NAME</h3>
        <div className="products_products">
            {
                products.map(product => {
                  return(
                    <div className="products_items" key={product.prod_id}>
                      <p className="products_name">{product.name}</p>
                      <Link onClick={(e) => handleEditproductlink(e)} id={product.prod_id} to="/edit" className="products_editbtn">Edit</Link>
                      <button onClick={handleProductdelete} id={product.prod_id} className="products_deletebtn">Delete</button>
                    </div>)
                  })
              }
        </div>
        {isModal && <Modal />}
    </div>
  )
}

export default Products;
