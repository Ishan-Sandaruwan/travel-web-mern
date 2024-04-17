import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route element={<Home/>} path='/Home' />
        <Route element={<Signin/>} path='/signin' />
        <Route element={<Signup/>} path='/signup' />
        <Route element={<PrivateRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App