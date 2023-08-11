import { useContext } from "react";
import {ImageContext} from '../context/ImageContext';
import Modal from "../components/Modal";

const Addproduct = () => {

  const {handleProductInput, imageArr, handleAddnewproduct, categories, setCategory_id, isModal} = useContext(ImageContext);

  function handleSelectCategory(option_id){
    setCategory_id(option_id);
  }
  return (
    <div className="editproduct page">
      <h2>Add New Product</h2>
      <label htmlFor="editproduct_name">Product name</label>
      <input type="text" name="editproduct_dropdown" id="addproduct_name" required />

      <label htmlFor="editproduct_dropdown">Category</label>
      <select onChange={(e)=>handleSelectCategory(e.target.options[e.target.selectedIndex].id)} name="editproduct_dropdown" id="addproduct_category">
        {categories.map(category =>(
          <option id={category.category_id}  value={category.name}>{category.name}</option>
        ))}
      </select>

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
      <textarea name="editproduct_description" id="addproducts_description" rows={10} cols={80} placeholder="Enter Product description" required/>
      <button onClick={handleAddnewproduct} className="editproduct_savebtn">Save</button>
       {isModal && <Modal />} 
    </div>
  )
}

export default Addproduct;
