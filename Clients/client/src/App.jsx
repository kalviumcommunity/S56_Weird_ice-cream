import React from 'react';
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import Form from './Form';
import Navbar from './Components/Nav';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Navbar/>}/>
        <Route path='/form' element={<Form />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
