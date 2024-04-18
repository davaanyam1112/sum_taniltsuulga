import './App.css';
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import Home from './Pages/Home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element = {<Home/>}/>
          <Route path='/home' element = {<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
