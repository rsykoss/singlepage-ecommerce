import logo from './logo.svg';
import './App.css';
import * as C from './constant.js'
import Popup from "reactjs-popup";
import React, { Component } from 'react';
import Products from './components/products';
import Detail from './components/detail';


class App extends Component {
  priceChange(e) {
    this.setState({pricesort:e.target.value});
  }
  categoryChange(e) {
    this.setState({category:e.target.value});
  }
  render() {
      
    return (
      <div>
      <select 
        value={this.state.pricesort} 
        onChange={this.priceChange} 
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      <select 
        value={this.state.category} 
        onChange={this.categoryChange} 
      >
        <option value="books">Books</option>
        <option value="electronics">Electronics</option>
      </select>
        <Products products={this.state.products} />
        </div>
      )
  }

  state = {
    products: [],
    pricesort:'',
    category:''

  };

  componentDidMount() {
      var query = '/product';
      if(pricesort != '' && category != ''){
        query = query + '?pricesort=' + pricesort + '&&category=' + category;
      }
      else if(pricesort != ''){
        query = query + '?pricesort=' + pricesort ;
      }
      else if(category != ''){
        query = query + '?category=' + category;
      }
      fetch(C.HOST + query)
          .then(res => res.json())
          .then((data) => {
              this.setState({ products: data })
          })
          .catch(console.log)
  }
}

export default App;


