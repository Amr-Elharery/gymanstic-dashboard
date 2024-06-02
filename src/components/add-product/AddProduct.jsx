import { useState } from "react";
import UploadIcon from "../../assets/imgs/upload-icon.png";
import PlusIcon from "../../assets/imgs/plus-icon.png";
import "./AddProduct.css";
import Swal from "sweetalert2";
function AddProduct() {
  let [productName, setProductName] = useState("");
  let [productCategory, setProductCategory] = useState("");
  let [productBrand, setProductBrand] = useState("");
  let [productPrice, setProductPrice] = useState("");
  let [productDetails, setProductDetails] = useState("");
  let [productImage, setProductImage] = useState(null);

  function submit(e){
    e.preventDefault();
    if(productName && productPrice && productImage && productCategory && productDetails && productBrand)
      {
        console.log(productName,productCategory,productBrand,productPrice,productDetails,productImage);
      Swal.fire({
        icon:'success',
        title: 'Product Added Successfully',
        showConfirmButton: false,
        timer: 1500
      })
      }
      else{
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something in data is invalid!",
          footer: '<a href="#">Try again</a>'
        });
      }
    setProductName("");
    setProductCategory("");
    setProductBrand("");
    setProductPrice("");
    setProductDetails("");
    setProductImage(null);
  }
  return (
      <div className="add-product bg-white rad-16 shadow p-10">
        <h3 className="flex justify-center">New Product</h3>

        <form className="flex flex-col" onSubmit={submit}>
          <div className="flex flex-col">
            <label htmlFor="name" className="bold">
              Name
            </label>
            <input type="text" className="border-primary rad-16 p-10" name="name"
            placeholder="Jump"
            onChange={(e)=> setProductName(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="category" className="bold">
              Category
            </label>
            <input type="text" className="border-primary rad-16 p-10" name="category"
            placeholder="Jump"
            onChange={(e)=> setProductCategory(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="brand" className="bold">
              Brand
            </label>
            <input type="text" className="border-primary rad-16 p-10" name="brand"
            placeholder="Jump"
            onChange={(e)=> setProductBrand(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="price" className="bold">
              Price
            </label>
            <input type="text" className="border-primary rad-16 p-10" name="price"
            placeholder="5"
            onChange={(e)=> setProductPrice(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="details" className="bold">
              Details
            </label>
            <textarea type="text" className="border-primary rad-16 p-10" name="details"
            onChange={(e)=> setProductDetails(e.target.value)}
            ></textarea>
          </div>
          <div className="flex flex-col">
            <p className="bold">
              Image
            </p>
            <label className="border-primary rad-16 p-10 flex flex-between"
            htmlFor="product-image"
            >
              <p>upload</p>
              <div className="icon">
                <img src={UploadIcon} alt="upload" />
              </div>
            </label>
            
            <input type="file" id="product-image"
            onChange={(e)=> setProductImage(e.target.files[0])}
            />
          </div>

          
          <button className='bg-primary btn-shape btn-effect w-fit c-white flex items-center'>
              <img src={PlusIcon} alt="icon" />
              Add product
          </button>
        </form>
      </div>
  )
}

export default AddProduct;