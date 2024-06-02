import "./Products.css";
import Product from "../product/Product";
function Products() {
    let products = [
        {
            id:1,
            title: "AAI",
            description:"TAC/IO LZT Voult Board",
            price: 1255.00
        },
        {
            id:2,
            title: "AAI",
            description:"TAC/IO LZT Voult Board",
            price: 1255.00
        },
        {
            id:3,
            title: "AAI",
            description:"TAC/IO LZT Voult Board",
            price: 1255.00
        },
        {
            id:4,
            title: "AAI",
            description:"TAC/IO LZT Voult Board",
            price: 1255.00
        },
        {
            id:5,
            title: "AAI",
            description:"TAC/IO LZT Voult Board",
            price: 1255.00
        },
        {
            id:6,
            title: "AAI",
            description:"TAC/IO LZT Voult Board",
            price: 1255.00
        },
        {
            id:7,
            title: "AAI",
            description:"TAC/IO LZT Voult Board",
            price: 1255.00
        },
        {
            id:8,
            title: "AAI",
            description:"TAC/IO LZT Voult Board",
            price: 1255.00
        },
        {
            id:9,
            title: "AAI",
            description:"TAC/IO LZT Voult Board",
            price: 1255.00
        },
    ]
  return (
    <div className="products">
        {products.map((p)=>(<Product key={p.id} product={p} />))}
    </div>
  )
}

export default Products;