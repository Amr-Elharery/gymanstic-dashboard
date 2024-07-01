import FavIcon from "../../assets/imgs/fav-icon.png";
import "./Product.css";
function Product({product}) {
  let { title, description, quantity, sold, colors, category, price, images} = product;

  return (
    <div className='product flex flex-col bg-white shadow rad-16'>
      <div className="img flex justify-center items-center">
        <img src={images[0]} alt="product" />
      </div>
      <div className="info p-10 flex flex-col flex-between">
        <div className="head flex flex-col">
        <div className="title bold">
          {title}
        </div>
        <p>
          Category : {category.name}
        </p>
        <p className="description ">
          {description}
        </p>
        <hr />
        <p>
          Colors : <span>{colors.map((color, i) => (i === colors.length-1 ? color: color+" - "))}</span>
        </p>
        <hr />
        <p>
          Quantity : {quantity}
        </p>
        <hr />
        <p>
          Sold: {sold}
        </p>
        <hr />

        </div>

        <div className="foot flex items-center flex-between border-black rad-16 p-10">
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