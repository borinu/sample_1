import "./scss/styles.scss";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}
