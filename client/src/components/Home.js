import React, {useEffect, useState} from 'react';
import {useParams, useNavigate, useSearchParams } from "react-router-dom";
import {Link} from 'react-router-dom';

function Home() {
  // const {id} = useParams();
  const [products, setProducts] = useState([]);
  // const navigate = useNavigate();
  
  //useSearchParams() allows you to store paramters in query string
  const [searchParams] = useSearchParams();
  let category = searchParams.get('category');
  //if no queries are provided then we want an empty string
  if(category === null) {
    category = ""
  }

  useEffect (() => {
    fetch(`/products?category=${category}`, {
    }).then(
      response => response.json()
    ).then (
      data => {
        setProducts(data);
        // console.log(data);
      }
    )
  },[]);

  
  console.log(searchParams.get('category'));  
  // console.log(products)
  // console.log(document.querySelector('#ulist'))
  return (
    <div>
        {
        (typeof products.length === 0) ? 
        (
        <p>Loading...</p>
        ) : (
          (category === "") ? 
          (
          <h1>All PRODUCTS</h1>
          ) : (
          <h1>{category.toUpperCase()} PRODUCTS</h1>)
        )
        }
      
      <ul>
        {(typeof products.length === 0) ? (
        <p>Loading...</p>
        ) : (
          products.map((x) => (
            <li key={x._id}><a href={x._id}>{x.name}</a></li>
          ))
        )}
      </ul>
      {
      category !== '' &&
        <a href='/'>All Products</a>
      }
      <br />
      <Link to="/new">Add New Product</Link>
    </div>
  );
}
  
export default Home;