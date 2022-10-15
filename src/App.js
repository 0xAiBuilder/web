import React from 'react';
import { BrowserRouter as Router, Route, Navigate, Routes} from 'react-router-dom';
import Activity from './pages/Activity/Activity';
import Aggregator from './pages/Aggregator/Aggregator';
import Home from './pages/Home/Home';
import Package from './pages/Package/Package';
import Skill from './pages/Skill/Skill';
import Openskill from './pages/Openskill/Openskill';
import Navbar from './Components/Navbar/Navbar';

const App = () => {
  return (
    <Router>
      
      <main>
        
        <Routes>
          
          <Route path = "/home"      element={<Home/>}  />
          <Route path = "/openskill" element={<Openskill/>} />
          <Route path = "/activity"  element={<Activity/>}      />
          <Route path = "/aggregator"element={<Aggregator/>}/>
          <Route path = "/skill"     element={<Skill/>}     />
          <Route path = "/package"   element={<Package/>}   />
          <Route path="*" element={<Navigate to ="/home" />}/>
          <Route path="/" element={<Navigate to ="/home" />}/>
        </Routes>
        
      </main>
      <Navbar/>
    </Router>
  );
}

export default App;
