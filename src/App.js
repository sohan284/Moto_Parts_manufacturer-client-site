import logo from './logo.svg';
import './App.css';
import Header from './Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Footer from './Shared/Footer/Footer';
import Login from './Pages/Login/Login';
import Purchase from './Pages/Purchase/Purchase';

function App() {
  return (
    <div className="App">
      <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
    
      <Route path='/purchase/:partId' element={<Purchase></Purchase>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      </Routes>  
      <Footer></Footer>
     </div>
  );
}

export default App;
