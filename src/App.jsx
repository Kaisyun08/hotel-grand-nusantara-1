import { Routes, Route } from "react-router-dom";

import Beranda from "./pages/Beranda";
import Register from './pages/Register';
import Login from './pages/Login';

function App(){
  return(
    <>
      <main className="min-h-screen w-full">
        <Routes>
          <Route path="/" element={<Beranda />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/login" element={<Login />}/>
        </Routes>
      </main>
    </>
  )
}
export default App;