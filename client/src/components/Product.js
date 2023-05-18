import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from "react-router-dom";

function Product() {
  const {id} = useParams();
  // const {category} = useParams();
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

  let deleteComment = () => {
    // sending PATCH request with fetch API in javascript
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

  let categoryFilter = () => {
    fetch(`/products?category=${products.category}`, {
      headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
      },
      method: "GET",	
    })
    .then(function (response) {
    return response.json();
    })
    .then(function (data) {
    console.log(data)
    })
    
    // navigate('/');
      
  };



  return (
    <div>
        <h1>{products.name}</h1>
      <ul>
        <li>${products.price}</li>
        {/* <li onClick={categoryFilter}><a >{products.category}</a></li> */}
        <li><a href={`/?category=${products.category}`}>{products.category}</a></li>
      </ul>
      
      <form>
        <button onClick={deleteComment}>delete</button>
      </form>
    </div>
  );
}
  
export default Product;

