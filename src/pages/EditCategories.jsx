
import { useContext } from "react";
import { ImageContext } from "../context/ImageContext";
import axios from "axios";

const EditCategories = () => {
  const {propertiesArr, handleAddproperties, editCategory, setProperties} = useContext(ImageContext);
  
  function handleEditCategory(){
    const category_name = document.getElementById('category_name').value;
    const parent_category = document.getElementById('parent_category_options').value;
    const req_obj = {'category_name': category_name,'properties': propertiesArr, 'parent_category': parent_category, 'category_id':editCategory.category_id};
    console.log(req_obj);
    axios.put('http://localhost:3001/categories/edit', req_obj);
  }

  function handlePropertyValueChange(index, property_value){
    setProperties(prev =>{
      prev[index].values = property_value;
      return prev;
    })
    console.log(propertiesArr, 'valuechange');

  }
  function handlePropertyNameChange(index, property_name){
    setProperties(prev =>{
      prev[index].name = property_name;
      return prev;
    })
    console.log(propertiesArr, 'namechange');
  }
  return (
   editCategory && <div className="Editcategories">
      <h2>Categories</h2>
        <label className="categories_name" htmlFor="category_name">Edit category "Category name"</label>
        <input type="text" name="category_name" id="category_name" placeholder="Category name" defaultValue={editCategory.name} />
        <select id="parent_category_options" className="categories_parent" defaultValue={editCategory.parent_category}>
          <option value="">No parent category</option>
          <option value="mobile">mobile</option>
          <option value="Clothing">Clothing</option>
          <option value="Laptops & PC's">Laptops & PC's</option>
        </select>
        <p className="categories_properties">Properties</p>
        <button onClick={handleAddproperties}  className="categories_addpropertybtn">Add new property</button>
        {
          propertiesArr.map((property, index) =>{
            return(
              <div className="AddProperties_property">
                <input onChange={(e)=>handlePropertyNameChange(index, e.target.value)} type="text" name="" id="" placeholder="property name" defaultValue={property.name}/>
                <input onChange={(e)=>handlePropertyValueChange(index, e.target.value)} type="text" name="" id="" placeholder="values" defaultValue={property.values}/>
                <button>Remove</button>
              </div>
            )
          })
        }
        <button className="editCategories_cancelbtn">Cancel</button>
        <button onClick={handleEditCategory} className="editCategories_savebtn">Save</button>
    </div>
  )
}

export default EditCategories;
