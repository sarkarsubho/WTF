
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Details } from './pages/Details';
import { Home } from './pages/Home';

import {Footer} from "./components/Footer";
function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path={"/"} element={<Home></Home>}></Route>
        <Route path={"/details/:id"} element={<Details></Details>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
