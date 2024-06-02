import ProductImage from "../../assets/imgs/product-image.png";
import FavIcon from "../../assets/imgs/fav-icon.png";
import "./Product.css";
function Product({product}) {
  let { title, description, price} = product;

  return (
    <div className='product bg-white shadow rad-16'>
      <div className="img flex justify-center items-center">
        <img src={ProductImage} alt="product" />
      </div>
      <div className="info p-10">
        <div className="title ">
          {title}
        </div>
        <p className="description ">
          {description}
        </p>
        <div className="foot flex items-center flex-between ">
        <p className="price">
          ${price}
        </p>

        <div className="icon">
          <img src={FavIcon} alt="favourite" />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Product