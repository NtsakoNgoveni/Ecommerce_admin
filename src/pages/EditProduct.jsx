import { useContext } from "react";
import {ImageContext} from '../context/ImageContext';
import Modal from "../components/Modal";

const EditProduct = () => {

  const {handleProductInput, imageArr, editProduct, handleEditproductsave, categories,setCategory_id,productProperties, isModal} = useContext(ImageContext);
  function handleSelectCategory(option_id){
    setCategory_id(option_id);
  }
  if (!editProduct) { 
    return (<div>Replace me with a loading component...</div>)}
  return (
    <div className="editproduct page">
      
      <h2>Edit Product</h2>
      <label htmlFor="editproduct_name" >Product name</label>
      <input type="text" name="editproduct_dropdown" id="editproduct_name" className={editProduct.prod_id} defaultValue={editProduct.name}/>

      <label htmlFor="editproduct_dropdown">Category</label>
      <select onChange={(e)=>handleSelectCategory(e.target.options[e.target.selectedIndex].id)} name="editproduct_dropdown" id="addproduct_category">
        {categories.map(category =>(
          <option id={category.category_id}  value={category.name}>{category.name}</option>
        ))}
      </select>
      {productProperties.map(property => (
        <>
          <label htmlFor="editproduct_dropdown">{property.name}</label>
          <select name="editproduct_dropdown" >
            {(property.prop_values).map(item =>(
              <option value={item}>{item}</option>
            ))}  
          </select>
        </>
      ))}
      
      <label htmlFor="">Photos</label>
      <div className="editproduct_photos">
        {imageArr.map(image => (
          <div className="editproduct_photo">
          <img src={image.data} alt="" />
        </div>
        ))}
        <label className="editproduct_photoupload" htmlFor="editproduct_photoupload" >
          <div><i class="fa-solid fa-plus fa-2xl" ></i></div>
          <p>Add image</p>
        </label>
        <input onChange={(e) => {handleProductInput(e)}} type="file" name="editproduct_photoupload" id="editproduct_photoupload" accept="image/*" />
      </div>
      <label htmlFor="editproduct_description">Description</label>
      <textarea name="editproduct_description" rows={10} cols={80} placeholder="Enter Product description" id="editproduct_description"/>
      <button onClick={handleEditproductsave} className="editproduct_savebtn">Save</button>
      {isModal && <Modal />}
    </div>
  )
}

export default EditProduct;
