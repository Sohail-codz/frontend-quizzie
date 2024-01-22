import React from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
   
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/> } />
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;


// function App() {
//   const [authToken, setAuthToken] = useState(localStorage.getItem('jwtToken'));

//   const handleSuccessfulLogin = (token) => {
//     setAuthToken(token);
//   };
  
//   return (
//     <BrowserRouter>
//         <Routes>
//           <Route path='/' element={!authToken? <Home onLoginSuccess={handleSuccessfulLogin} />:<Navigate to='/dashboard' /> } />
//           <Route path='/dashboard' element={authToken ? <Dashboard /> : <Navigate to='/' />} />
//         </Routes>
//     </BrowserRouter>
//   );
// }