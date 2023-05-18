import React, {useEffect, useState} from 'react';
import {useParams, useNavigate, useSearchParams } from "react-router-dom";

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
      <ul id='ulist'>
        {(typeof products.length === 0) ? (
        <p>Loading...</p>
        ) : (
          products.map((x) => (
            <li key={x._id}><a href={x._id}>{x.name}</a></li>
          ))
        )}
      </ul>
    </div>
  );
}
  
export default Home;