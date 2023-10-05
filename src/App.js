import logo from './logo.svg';
import './App.css';
import Navbar from './comp/Navbar';
import Home from './comp/Home';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Addmovie from './comp/Addmovie';
import Profile from './comp/Profile';
import Moviedetails from './comp/Moviedetails';
import Update from './comp/Update';
import Signup from './comp/Signup';
import Login from './comp/Login';
import Protect from './comp/Protect';
import Search from './comp/Search';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Routes>

          <Route path='/' element={<Signup/>}/>

          <Route path='/login' element={<Login/>}/>

          <Route path='/home' element={<Home/>}/>

          <Route path='/search' element={<Search/>}/>
          
          <Route path='/add' element={<Protect Child={Addmovie}/>}/>
          
          <Route path='/profile' element={<Protect Child={Profile}/>}/>

          <Route path='/update/:id' element={<Update/>}/>

          <Route path='/details/:id' element={<Moviedetails/>}/>
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
