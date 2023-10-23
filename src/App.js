import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import About from './components/About/About';
import Header from './components/Header/Header';

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path ='home'
         loader = {async () =>{return fetch('https://restcountries.com/v3.1/all')
        }
      }
          element={<Home></Home>} ></Route>
        <Route path='products' element={<Products></Products>}></Route>
        <Route path='about' element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
