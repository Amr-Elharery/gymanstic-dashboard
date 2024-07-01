import "./Products.css";
import Product from "../product/Product";
import { useEffect, useState } from "react";
function Products() {
    const [products, setProducts] = useState([]);

    const [id, setId] = useState("");
    const [token, setToken] = useState("");
    useEffect(() => {
      let authData = localStorage.getItem("authorization") 
                  || sessionStorage.getItem("authorization");
  
      if (authData) {
        authData = JSON.parse(authData);
        setId(authData.id);
        setToken(authData.token);
      }
    }, []);

    useEffect(() => {
        fetch("https://gymnastic-beta.vercel.app/api/v1/products", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
       .then(res => res.json())
       .then(resObj => {
        setProducts(resObj.data);
    })
    },[id,  token])
    // let products = [
    //     {
    //         id:1,
    //         title: "AAI",
    //         description:"TAC/IO LZT Voult Board",
    //         price: 1255.00
    //     },
    //     {
    //         id:2,
    //         title: "AAI",
    //         description:"TAC/IO LZT Voult Board",
    //         price: 1255.00
    //     },
    //     {
    //         id:3,
    //         title: "AAI",
    //         description:"TAC/IO LZT Voult Board",
    //         price: 1255.00
    //     },
    //     {
    //         id:4,
    //         title: "AAI",
    //         description:"TAC/IO LZT Voult Board",
    //         price: 1255.00
    //     },
    //     {
    //         id:5,
    //         title: "AAI",
    //         description:"TAC/IO LZT Voult Board",
    //         price: 1255.00
    //     },
    //     {
    //         id:6,
    //         title: "AAI",
    //         description:"TAC/IO LZT Voult Board",
    //         price: 1255.00
    //     },
    //     {
    //         id:7,
    //         title: "AAI",
    //         description:"TAC/IO LZT Voult Board",
    //         price: 1255.00
    //     },
    //     {
    //         id:8,
    //         title: "AAI",
    //         description:"TAC/IO LZT Voult Board",
    //         price: 1255.00
    //     },
    //     {
    //         id:9,
    //         title: "AAI",
    //         description:"TAC/IO LZT Voult Board",
    //         price: 1255.00
    //     },
    // ]
  return (
    <div className="products">
        {products.map((p)=>(<Product key={p.id} product={p} />))}
    </div>
  )
}

export default Products;