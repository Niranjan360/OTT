import logo from './logo.svg';
import './App.css';
import Navbar from './comp/Navbar';
import Home from './comp/Home';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Addmovie from './comp/Addmovie';
import Profile from './comp/Profile';
import Moviedetails from './comp/Moviedetails';
import Update from './comp/Update';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          
          <Route path='/add' element={<Addmovie/>}/>
          
          <Route path='/profile' element={<Profile/>}/>

          <Route path='/update/:id' element={<Update/>}/>

          <Route path='/details/:id' element={<Moviedetails/>}/>
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
