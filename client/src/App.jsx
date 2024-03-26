import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route element={<Home/>} path='/Home' />
        <Route element={<Signin/>} path='/signin' />
        <Route element={<Signup/>} path='/signup' />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App