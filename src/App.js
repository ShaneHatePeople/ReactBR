import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Home from './pages/Home/Home';
import IceCreamList from './pages/IceCreamList/IceCreamList';
import IceCreamDetail from './pages/IceCreamDetail/IceCreamDetail';
import './App.css';
import './styles/reset.css'
import './styles/common.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/icecream' element={<IceCreamList/>}/>
        <Route path='/icecream/:id' element={<IceCreamDetail/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
