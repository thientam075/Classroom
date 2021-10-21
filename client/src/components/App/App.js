import './App.css';
import Classlist from '../Classes/class.list';
import Navbar from '../Navbar';
import {React, useState} from 'react';
import Classform from '../Classes/class.form';
function App() {
  const [handleClose, sethandleClose] = useState(true);
  function onHandleChange(){
    sethandleClose(!handleClose);
  }
  return (
      <div>
        <Navbar onClick = {onHandleChange}/>
        <div className="container"
        style = {handleClose ? {height: '0'} : {height: '100%'} }>
        <Classform 
          handleClose= {handleClose}
          handleChange = {onHandleChange}
        />
        </div>
        <Classlist/>
      </div>
  );
}

export default App;
