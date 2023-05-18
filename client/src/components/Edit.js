import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from "react-router-dom";

function Edit() {
  // const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  // console.log(name)
  // console.log(price)
  // console.log(category)

  const navigate = useNavigate();
  const {id} = useParams();
  
  useEffect (() => {
    fetch(`/products/${id}`, {
    }).then(
      response => response.json()
    ).then (
      data => {
        setName(data.name);
        setPrice(data.price);
        setCategory(data.category);
        // console.log(data);
      }
    )
  },[id]);
    
  let textChange = () => {
    // sending PUT request with fetch API in javascript
    fetch(`/products/${id}`, {
      headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
      },
      method: "PUT",	
    
      // Fields that to be updated are passed
      body: JSON.stringify({
      name: name,
      price: price,
      category: category,
      })
    })
    .then(function (response) {
      console.log(response)
    return response.json();
    })
    .then(function (data) {
    console.log(data)
    })
    
    navigate(`/${id}`);
      
  };


    return (
      <div>
          <form>
            <label htmlFor="name">Name</label>
            <input onChange={(e) => {setName(e.target.value)}} type="text" name='name' placeholder='product name' value={name}></input> 
            <label htmlFor="price">Price</label> 
            <input onChange={(e) => {setPrice(e.target.value)}} type="number" name='price' placeholder='product price' value={price}></input>
            <label htmlFor='category'>Category</label>
            <select onChange={(e) => {setCategory(e.target.value)}} name='category'>
              <option value="fruit">fruit</option>
              <option value='vegetable'>vegetable</option>
            </select>
            <button onClick={textChange}>Submit</button> 
          </form>
      </div>
    );
  }
    
  export default Edit;
  
  