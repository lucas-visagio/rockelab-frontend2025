import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Home from './pages/Home/Home';
import Test from './pages/Test/Test';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
