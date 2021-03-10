
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import { Styles } from './Styles';
import Hero from './Components/Hero';
import Products from './Components/Products';
import {ProductsData,Sweets} from './Components/Products/ProductData';
import Feature from './Components/Featurr';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <Styles/>
     <Hero/>
     <Products Heading={"Products"} Data={ProductsData}/>
     <Feature/>
     <Products Heading={"Sweets"} Data={Sweets}/>
      <Footer/>
    </Router>
  );
}

export default App;
