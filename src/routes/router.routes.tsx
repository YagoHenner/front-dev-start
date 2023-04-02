import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/homepage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
