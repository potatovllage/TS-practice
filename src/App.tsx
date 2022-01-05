import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/main/MainPage";
import MakePost from "./components/writePost/MakePost";
import ShowPost from "./components/showPost/ShowPost";
import PetchPost from "./components/writePost/PetchPost";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainPage />} path="/" />
        <Route element={<MakePost />} path="/Make" />
        <Route element={<ShowPost />} path="/Show/:id" />
        <Route element={<PetchPost />} path="/Petch/:id" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
