import "./styles.css";
import "./login.css";
import { BrowserRouter } from "react-router-dom";
import { Login } from "./pages/Login";
import { Router } from "./router/Router";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Login /> */}
        <Router />
      </BrowserRouter>
    </div>
  );
}
