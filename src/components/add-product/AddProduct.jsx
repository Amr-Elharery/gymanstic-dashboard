import React, { useEffect, useState } from "react";
import UploadIcon from "../../assets/imgs/upload-icon.png";
import PlusIcon from "../../assets/imgs/plus-icon.png";
import Select from "react-select";
import "./AddProduct.css";
import Swal from "sweetalert2";

function AddProduct() {
  const inputStyle = {
    border: "1px solid var(--primary-color)",
    borderRadius: "16px",
    padding: "5px",
  };

  const [productTitle, setProductTitle] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [productColors, setProductColors] = useState([]);

  const colorsOptions = [
    { value: "Red", label: "Red" },
    { value: "Green", label: "Green" },
    { value: "Blue", label: "Blue" },
  ];

  const [brands, setBrands] = useState([]);
  const [brandOptions, setBrandOptions] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedBrandId, setSelectedBrandId] = useState("");

  const [categories, setCategories] = useState([]);
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState("");

  const [id, setId] = useState("");
  const [token, setToken] = useState("");

  // Get auth data
  useEffect(() => {
    const authData = JSON.parse(localStorage.getItem("authorization")) 
                  || JSON.parse(sessionStorage.getItem("authorization"));

    if (authData) {
      setId(authData.id);
      setToken(authData.token);
    }
  }, []);

  // Get brands
  useEffect(() => {
    if (id && token) {
      fetch("https://gymnastic-beta.vercel.app/api/v1/brands", {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
      .then((res) => res.json())
      .then((data) => setBrands(data.data));
    }
  }, [id, token]);

  // Get categories
  useEffect(() => {
    if (id && token) {
      fetch("https://gymnastic-beta.vercel.app/api/v1/categories", {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
      .then((res) => res.json())
      .then((data) => setCategories(data.data));
    }
  }, [id, token]);

  // Set brand options
  useEffect(() => {
    if (brands.length > 0) {
      const options = brands.map((brand) => ({ value: brand.name, label: brand.name }));
      setBrandOptions(options);
    }
  }, [brands]);

  // Set category options
  useEffect(() => {
    if (categories.length > 0) {
      const options = categories.map((category) => ({ value: category.name, label: category.name }));
      setCategoryOptions(options);
    }
  }, [categories]);

  function submit(e) {
    e.preventDefault();
    if (id && token) {
      // Get brand ID
      fetch(`https://gymnastic-beta.vercel.app/api/v1/brands?name=${selectedBrand}`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      }).then(res => res.json())
      .then(resObj => {
        if (resObj.results > 0) {
          setSelectedBrandId(resObj.data[0]._id);
        }
      });

      // Get category ID
      fetch(`https://gymnastic-beta.vercel.app/api/v1/categories?name=${selectedCategory}`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      }).then(res => res.json())
      .then(resObj => {
        if (resObj.results > 0) {
          setSelectedCategoryId(resObj.data[0]._id);
        }
      });

      // Add product logic
      if(productTitle && productPrice && productDescription && productQuantity){
      const formData = new FormData();
      formData.append("title", productTitle);
      formData.append("price", productPrice);
      formData.append("quantity", productQuantity);
      formData.append("description", productDescription);
      formData.append("brand", selectedBrandId);
      formData.append("category", selectedCategoryId);
      formData.append("colors", productColors);
      if (productImage) {
        formData.append("images", [productImage]);
      }

      fetch("https://gymnastic-beta.vercel.app/api/v1/products", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`
        },
        body: formData
      })
      .then( res => {
        if(!res.ok){
          return res.json().then(err => {
            Swal.fire({
              icon: 'error',
              title: 'Error adding product',
              text: err.message || "An error occurred when adding product",
              confirmButtonText: 'Try again'
            })
          })
        }
        
        return res.json();
      })
      .then((resObj) => {
        console.log(resObj);
        // Show success message
        // Swal.fire({
        //   icon: 'success',
        //   title: 'Product added successfully',
        //   showConfirmButton: false,
        //   timer: 1500
        // });

        // Reset form
        setProductTitle("");
        setProductPrice("");
        setProductQuantity("");
        setProductDescription("");
        setSelectedBrand("");
        setSelectedCategory("");
        setProductColors([]);
        setProductImage(null);
      });
      }
      else{
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "All fields are required!",
          footer: '<a href="#">Try again</a>'
        });
      }
    }
  }

  return (
    <div className="add-product bg-white rad-16 shadow p-10">
      <h3 className="flex justify-center">New Product</h3>

      <form className="flex flex-col" onSubmit={submit}>
        <div className="flex flex-col">
          <label htmlFor="title" className="bold">
            Title
          </label>
          <input 
            type="text" 
            className="border-primary rad-16 p-10" 
            name="title"
            placeholder="Title"
            value={productTitle}
            onChange={(e) => setProductTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="colors" className="bold">
            Colors
          </label>
          <Select options={colorsOptions} onChange={(e) => {
            if (e) {
              let colors = e.map(option => option.value);
              setProductColors(colors);
            } else {
              setProductColors([]);
            }
          }}
            isClearable
            isSearchable
            isMulti
            styles={{
              control: (styles) => ({ ...styles, ...inputStyle }),
            }}
            placeholder="Select colors"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="category" className="bold">
            Category
          </label>
          <Select options={categoryOptions} onChange={(e) => e ? setSelectedCategory(e.value) : undefined}
            isClearable
            isSearchable
            styles={{
              control: (styles) => ({ ...styles, ...inputStyle }),
            }}
            placeholder="Select category"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="brand" className="bold">
            Brand
          </label>
          <Select options={brandOptions} onChange={(e) => e ? setSelectedBrand(e.value) : undefined}
            isClearable
            isSearchable
            styles={{
              control: (styles) => ({ ...styles, ...inputStyle }),
            }}
            placeholder="Select brand"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="price" className="bold">
            Price
          </label>
          <input 
            type="text" 
            className="border-primary rad-16 p-10" 
            name="price"
            placeholder="Price"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="quantity" className="bold">
            Quantity
          </label>
          <input 
            type="text" 
            className="border-primary rad-16 p-10" 
            name="quantity"
            placeholder="Quantity"
            value={productQuantity}
            onChange={(e) => setProductQuantity(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="description" className="bold">
            Description
          </label>
          <textarea 
            className="border-primary rad-16 p-10" 
            name="description"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="flex flex-col">
          <p className="bold">Image</p>
          <label 
            className="border-primary rad-16 p-10 flex flex-between"
            htmlFor="product-image"
          >
            <p>upload</p>
            <div className="icon">
              <img src={UploadIcon} alt="upload" />
            </div>
          </label>
          
          <input 
            type="file" 
            id="product-image"
            onChange={(e) => setProductImage(e.target.files[0])}
          />
        </div>

        <button className='bg-primary btn-shape btn-effect w-fit c-white flex items-center'>
          <img src={PlusIcon} alt="icon" />
          Add product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
