import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import TableList from "./Components/Table/Table";
import TablePage from "./pages/TablePage/TablePage";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Table" element={<TablePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router
