import { Routes, Route } from "react-router-dom";
import { Login } from "../pages/Login";
import { List } from "../pages/List";
import { Detail } from "../pages/Detail";
import { Change } from "../pages/Change";
import { Registor } from "../pages/Registor";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/list" element={<List />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/change" element={<Change />} />]
      <Route path="/registor" element={<Registor />} />
    </Routes>
  );
};
