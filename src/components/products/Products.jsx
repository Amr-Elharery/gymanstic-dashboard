import "./Products.css";
import Product from "../product/Product";
import ReactLoading from 'react-loading';
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
    <>
    {
    products.length>0?
      <div className="products">
        {products.map((p)=>(<Product key={p.id} product={p} />))}
    </div>
    :
    <div className="loader">
      <ReactLoading type="bars" color="#fe6e0e" height={300} width={200} />
    </div>
    }
    
    </>
  )
}

export default Products;