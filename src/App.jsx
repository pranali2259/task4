import { useEffect, useState } from 'react';
import './App.css';
import React from 'react';

const App = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [inputName, setInputName] = useState('');
  const[inputPrice,setInputPrice]=useState('');
  const[inputQuantity,setInputQuantity]=useState('');
 
  const addItem = () => {
    let PriceUpdate=inputPrice;
    if(inputQuantity<=0){
     PriceUpdate =inputPrice*0;
    }else{
      PriceUpdate =  inputPrice*inputQuantity;
    }
    const newItem = {id:inputValue , name:inputName,Quantity:inputQuantity,Price:  PriceUpdate };
    setItems([...items, newItem]);
    setInputValue('');  
    setInputName('');
    setInputPrice('');
    setInputQuantity('');
  };
 
  
  const removeItem = (id) => {
    setItems(items.filter(item => item.id!== id));
  }; 
 
  return (
    <div>
      <label> 
      <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Enter id number"/>
      </label>
      <label> 
      <input
        type="text"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}  
        placeholder="Enter name"/>
    </label>
    <label> 
        <input
        type="text"
        value={inputQuantity}
        onChange={(e) => setInputQuantity(e.target.value)}  
        placeholder="Enter Quantity"
        />
        </label>
        <label> 
      <input 
       type="text"
      value={inputPrice}
      onChange={(e) => setInputPrice(e.target.value)}
      placeholder="Enter price"/>
      </label>
      <button onClick={addItem}>Add Item</button>
      <h1>Items List</h1>
      <hr />
      <table>
      <tr>
        <th>id</th>
        <th>Name</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>remove</th>
      </tr>
    
      {items.map(item =>(
      <tr>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.Quantity}</td>
        <td>{item.Price}</td>
        <td><button onClick={() => removeItem(item.id)}>Remove</button></td>
        </tr>
      )
      )}
  
      </table>
    </div>
  );
};

export default App;
