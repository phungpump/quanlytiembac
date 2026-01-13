import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from "./pages/layout";
import Home from "./pages/home";
import Login from "./pages/login";
import Order from "./pages/order";
import Report from "./pages/report";
import { paths } from './commons/paths';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={paths.login} element={<Login/>} />
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>} />
          <Route path={paths.home} element={<Home/>} />
          <Route path={paths.order} element={<Order/>} />
          <Route path={paths.report} element={<Report/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
