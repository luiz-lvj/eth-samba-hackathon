import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyle';
import Home from './components/Home';

function App() {
  return (
   <BrowserRouter>
   <GlobalStyle/>

   <Routes>
    <Route path="/" exact element={<Home/>}/>
   </Routes>
  
   </BrowserRouter>
  );
}

export default App;
