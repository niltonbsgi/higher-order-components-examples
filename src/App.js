import React from 'react';
import logo from './logo.svg';
import './App.css';
import StockList from './Component/StockList';
import UserList from './Component/UserList';
import Hoc from './HOC';
import { StocksData, UsersData } from './mock'


const Stocks = Hoc(
  StockList,
  StocksData
);

const Users = Hoc(
  UserList,
  UsersData
);

class App extends React.Component{
  render(){
    return(
      <div>
        <Users/>
        <Stocks/>
      </div>
    )
  }
}


export default App;

