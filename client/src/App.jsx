import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Home from './pages/Home';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path='/' />
        <Route element={<Signin/>} path='/signin' />
        <Route element={<Signup/>} path='/signup' />
      </Routes>
    </BrowserRouter>
  )
}

export default App