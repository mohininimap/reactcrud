import React from 'react';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
// import Navigation from './components/Navigation';
import "./App.css";
import RegisterForm from './components/forms/RegisterForm';
const App = () => {
  return (
    <Router>
      {/* <div className='navigationdiv'><Navigation/></div> */}
      
      <Routes>
       <Route path="/" element={<RegisterForm/>}></Route>
       
       <Route></Route>
      </Routes>
    </Router>
  )
}

export default App