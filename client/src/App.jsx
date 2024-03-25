import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Header from './components/Header';

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route element={<Home/>} path='/' />
        <Route element={<Signin/>} path='/signin' />
        <Route element={<Signup/>} path='/signup' />
      </Routes>
    </BrowserRouter>
  )
}

export default App