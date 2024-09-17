
import './App.css';
import LoginForm from  './LoginForm';
import Register from './Register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
   <Router>
    <Routes>
      <Route path="/" element={<LoginForm/> }/>
      <Route path="signup" element= {<Register/>}/>
    </Routes>
   </Router>
      </>
  );
}

export default App;
