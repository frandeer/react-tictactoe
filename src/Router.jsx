import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import TicTacToe from "./pages/TicTacToe";
import NotFound from "./pages/NotFound";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/t" element={<TicTacToe />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
