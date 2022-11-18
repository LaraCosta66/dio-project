import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./Pages/Header";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";

const App = () => {
  return(
    <>
 <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>


  </>
  );
}

export default App;
