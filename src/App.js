// import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
 
// import ResultsPage from './components/results';
// import MainContent from './components/HeroSection';
// import './App.css' 
// import Admin from './components/admin';
// import Login from './components/Login';
// const App = () => {
//   return (
//     <BrowserRouter> 
   
//       <Routes>
//         <Route exact path="/" element={<MainContent />} /> 
//         <Route path="/results" element={<ResultsPage />} />  
//         <Route path='login' element={<Login/>}/>
//         <Route path="/admin" element={<Admin />} />  
    
//       </Routes>  
//     </BrowserRouter>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ResultsPage from './components/results';
import MainContent from './components/HeroSection';
import Admin from './components/admin';
import Login from './components/Login';
import PrivateRoute from './PrivateRoute'; // Ensure PrivateRoute is correctly imported

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/*" element={<PrivateRoute element={Admin} />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;

