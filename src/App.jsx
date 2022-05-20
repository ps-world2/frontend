import React from 'react';
import Navbar from 'components/navbar/Navbar'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Main from 'pages/main/Main';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/network" element={<p>Network Page</p>}></Route>
        <Route path="*" element={<p>잘못된 접근입니다.</p>}></Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
