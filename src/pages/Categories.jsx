import {Link} from "react-router-dom";
import { useContext } from "react";
import { ImageContext } from "../context/ImageContext";
import axios from "axios";


const Categories = () => {
  const {propertiesArr, handleAddproperties,
          setProperties, categories, setEditCategory, editCategory} = useContext(ImageContext);
  function handleAddCategory(){
    const category_name = document.getElementById('category_name').value;
    const parent_category = document.getElementById('parent_category_options').value;
    const req_obj = {'category_name': category_name,'properties': propertiesArr, 'parent_category': parent_category};
    console.log(req_obj);
    axios.post('http://localhost:3001/categories/add', req_obj);
  }

  function handlePropertyNameChange(index, property_name){
    setProperties(prev =>{
      prev[index].name = property_name;
      return prev;
    })
    console.log(propertiesArr, 'namechange');
  }

  function handlePropertyValueChange(index, property_value){
    setProperties(prev =>{
      prev[index].values = property_value;
      return prev;
    })
    console.log(propertiesArr, 'valuechange');

  }
  
  function handleEditCategory(id){
    let i = 0;
    for (i = 0; i < categories.length; i++){
      if (id == categories[i].category_id){
        setEditCategory(categories[i]);
        setProperties(JSON.parse([categories[i].properties]));
        i = categories.length;
      }
    }
    console.log(editCategory, 'selected category');
    console.log(propertiesArr, 'Properties');
  }
  return (
    <div className="categories">
        <h2>Categories</h2>
        <label className="categories_name" htmlFor="category_name">Create new category</label>
        <input type="text" name="category_name" id="category_name" placeholder="Category name"/>
        <select className="categories_parent" id="parent_category_options">
            <option value="">No parent category</option>
            <option value="mobile">mobile</option>
            <option value="Clothing">Clothing</option>
            <option value="Laptops & PC's">Laptops & PC's</option>
        </select>
        <p className="categories_properties">Properties</p>
        <button onClick={handleAddproperties} to="/categories/add-properties" className="categories_addpropertybtn">Add new property</button>
        <div className="AddProperties">
        {
          propertiesArr.map((property, index) =>{
            return(
              <div className="AddProperties_property">
                <input onChange={(e) =>handlePropertyNameChange(index, e.target.value)} type="text"  placeholder="property name" />
                <input onChange={(e)=>handlePropertyValueChange(index, e.target.value)} type="text"  placeholder="values, commas seperated"/>
                <button>Remove</button>
              </div>
            )
          })
        }
        </div>
        <button onClick={handleAddCategory} className="catogories_savebtn">Save</button>
        <table className="categories_table">
        <thead>
          <tr>
            <th className="categories_tablecolumn">CATEGORY</th>
            <th className="categories_tablecolumn">PARENT CATEGORY</th>
            <th className="categories_tablecolumn">Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map(category =>(
            <tr>
              <td>{category.name}</td>
              <td>{category.parent_category}</td>
              <td>
                <Link id={category.category_id} onClick={(e)=>{handleEditCategory(e.target.id)}} to="/edit-categories" className="categories_editbtn">Edit</Link>
                <button className="categories_deletebtn">Delete</button>
              </td>
            </tr>
          )
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Categories;
