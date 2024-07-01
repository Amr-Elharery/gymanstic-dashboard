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

  return (
    <div className="products">
        {
            products.length>0?
            products.map((p)=>(<Product key={p.id} product={p} />))
            :<h1>Loading...</h1>
        }
    </div>
  )
}

export default Products;