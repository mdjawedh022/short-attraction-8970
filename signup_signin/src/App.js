// import logo from './logo.svg';
import './App.css';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='signin' element={<SignIn/>}/>
      <Route path='signup' element={<SignUp/>}/>

    </Routes>
  );
}

export default App;
