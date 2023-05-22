import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from "react-router-dom";
import {Link} from 'react-router-dom';

function Product() {
  const {id} = useParams();
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect (() => {
    fetch(`/products/${id}`, {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }).then(
      response => response.json()
    ).then (
      data => {
        setProducts(data);
        console.log(data);
      }
    )
  }, [id])

  let deleteProduct = () => {
    fetch(`/products/${id}`, {
      headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
      },
      method: "DELETE",	
    
      // Fields that to be updated are passed
      body: JSON.stringify({
      _id: id,
      })
    })
    .then(function (response) {
    return response.json();
    })
    .then(function (data) {
    console.log(data)
    })
    
    navigate('/');
      
  };

  return (
    <div>
        <h1>{products.name}</h1>
        <div>Price: ${products.price}</div>
        <div>Category: <a href={`/?category=${products.category}`}>{products.category}</a></div>
      <form>
        {/* button must be wrapped in a form to submit request */}
        <button onClick={deleteProduct}>Delete this Product</button>
      </form>
      <Link to={`/${id}/edit`}>Edit this Products</Link>
      <br />
      <Link to="/">Back to all Products</Link>
    </div>
  );
}
  
export default Product;

