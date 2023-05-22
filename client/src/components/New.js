function New() {
  return (
    <div>
        <form action='/products' method='post'>
          <label for="name">Name:</label>
          <input type="text" name='name' placeholder='product name'></input> 
          <br />
          <label for="price">Price:</label> 
          <input type="number" name='price' placeholder='product price'></input>
          <br />
          <label for='category'>Category:</label>
          <select name='category'>
            <option value="fruit">fruit</option>
            <option value='vegetable'>vegetable</option>
          </select>
          <br />
          <button>Submit</button>   
        </form>
    </div>
  );
}
  
export default New;

