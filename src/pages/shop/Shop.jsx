import Header from "../../components/header/Header";
import Products from "../../components/products/Products";
import AddProduct from "../../components/add-product/AddProduct";
import AddPostIcon from "../../assets/imgs/add-post-icon.png";
import "./Shop.css"

function Shop() {
  return (
    <div className="shop">
      <Header title={"Shop"} />
      <div className="holder flex">
        <div className="holder-left flex flex-col">
          <div className="new-product flex">
              <button className="btn-shape btn-effect c-white flex items-center" onClick={()=>{}}>
                <img src={AddPostIcon} alt="Icon" className="new-product-icon"/>
                New Product
              </button>
          </div>

          <Products />
        </div>
        <div className="holder-right flex flex-col">
          <AddProduct />
        </div>
      </div>
    </div>
  )
}

export default Shop;