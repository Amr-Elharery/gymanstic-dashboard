import "./Products.css";
import Product from "../product/Product";
import ReactLoading from 'react-loading';
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
function Products() {
    const [products, setProducts] = useState([]);

    const [noProducts, setNoProducts] = useState(false);
    const [error, setError] = useState(false);

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
        if (resObj.data.length === 0) setNoProducts(true);
        setProducts(resObj.data);
    }).catch(err => {
      setError(true)
            Swal.fire({
                title: "Error",
                text: err.message + " Failed to load posts",
                icon: "error"
            })
    })
    },[id,  token])

  return (
    <>
    {
      noProducts ? <h1 className="p-10 rad-16 bg-primary c-white">No Products</h1>
      :
    products.length>0?
      <div className="products">
        {products.map((p)=>(<Product key={p.id} product={p} />))}
    </div>
    :
    error ? <h1 className="p-10 rad-16 bg-primary c-white">Error occured...!</h1>
    :
    <div className="loader">
      <ReactLoading type="bars" color="#fe6e0e" height={300} width={200} />
    </div>
    }
    
    </>
  )
}

export default Products;