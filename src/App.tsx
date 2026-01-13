import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from "./pages/layout";
import Home from "./pages/home";
import Login from "./pages/login";
import Order from "./pages/order";
import Report from "./pages/report";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>} />
          <Route path="/quanlytiembac/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/order" element={<Order/>} />
          <Route path="/report" element={<Report/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
