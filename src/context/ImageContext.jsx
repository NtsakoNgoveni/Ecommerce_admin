import { useState, createContext, useEffect } from "react";
import axios from  "axios";

export const ImageContext = createContext();
const imageFiles = [];
const ImageContextProvider = (props) => 
{
  const [isModal, setIsModal] = useState(false);
  const [productProperties, setProductProperties] = useState([]);
  const [productImages, setProductImages] = useState([]);
  const [category_id, setCategory_id] = useState();
  const [editCategory, setEditCategory] = useState();
  const [products, setProducts] = useState([]);
  const [imageArr, setimageArr] = useState([]);
  const [propertiesArr, setProperties] = useState([]);
  const [editProduct, seteditProduct] = useState();
  const [categories, setCategories] = useState([]);
  const contextValues = {imageArr, handleProductInput, propertiesArr,
                          handleAddproperties, handleAddnewproduct, products,
                          handleEditproductlink, editProduct, handleEditproductsave,
                          handleProductdelete, setProperties, categories, setEditCategory,
                          editCategory, setCategory_id,productProperties, setProductProperties, isModal,
                          setIsModal
                        };
  
  function handleProductInput(e)
  {
      const Image =  e.target.files[0];
      const reader = new FileReader();
    
      setProductImages((prev) => [...prev, Image]);
      console.log(productImages, 'productImages array')
      reader.addEventListener("load", () =>
      {
          setimageArr(prev => [...prev, {"name":Image.name ,"data":reader.result}]);
      });
     console.log(Image);
     console.log(imageArr);
     reader.readAsDataURL(Image);
  }
  function handleAddproperties()
  {
    setProperties(prev => [...prev, {name:'', values:''}]);
  }
  function handleAddnewproduct()//Add new products
  {
    const prod_name = document.getElementById("addproduct_name").value;
    const description = document.getElementById("addproducts_description").value;

  const formData = new FormData();
  formData.append("prod_name", prod_name);
  formData.append("category_id", category_id);
  formData.append("description", description);
  
  for (let i = 0; i < productImages.length; i++) {
    formData.append("images", productImages[i]);
  }

    axios.post("http://localhost:3001/products/add",formData)
    .then(setIsModal(!isModal))
    .catch(err => console.log(err));
  };
  useEffect(() =>{
    axios.get("http://localhost:3001/products")
    .then( res => {
      console.log(res.data);
      setProducts(res.data)});
    axios.get('http://localhost:3001/categories')
      .then(res => setCategories(res.data))
  }, []);
  
  async function handleEditproductlink(e)
  {
    try{
        seteditProduct(null);
        const res = await axios.get("http://localhost:3001/products/edit", {params:{prod_id: e.target.id}})
        seteditProduct(res.data[0]);
        const editProductImages = await JSON.parse(res.data[0].images);
        setimageArr(editProductImages);
        setCategory_id(editProduct.category_id);
        //const productProperties = await JSON.parse(res.data[0].properties)
        //console.log(productProperties[0]) 
      if(categories)
        {var productCategory = categories.find(item => item.category_id === res.data[0].category_id);}
      if(productCategory)
      {
        const category_props = JSON.parse(productCategory.properties);
        const obj_properties = category_props.map(item => {
        return({'name': item.name, 'prop_values': item.values.split(",")})
        });
        setProductProperties(obj_properties);
        console.log(productProperties);
      }
      
    }catch(err){
      console.log(err);
    } 

  }

  function handleEditproductsave()
  {
    const prod_name = document.getElementById("editproduct_name").value;
    const description = document.getElementById("editproduct_description").value;
    const formData = new FormData();

    formData.append("prod_name", prod_name);
    formData.append("category_id", category_id);
    formData.append("description", description);
    formData.append("prod_id", editProduct.prod_id);
    
    for (let i = 0; i < productImages.length; i++) {
      formData.append("images", productImages[i]);
    }

    axios.put('http://localhost:3001/products/edit', formData)
      .then(setIsModal(!isModal))
  }
  function handleProductdelete(e)
  {
    const id = e.target.id;
    axios.delete('http://localhost:3001/products/delete', {params:{id: id}})
      .then(setIsModal(!isModal))
    
  }
  return (
    <ImageContext.Provider value={contextValues}>{props.children}</ImageContext.Provider>
  )
}
export default ImageContextProvider;
