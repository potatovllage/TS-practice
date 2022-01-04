import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/Main/MainPage";
import MakePost from "./components/WritePost/MakePost";
import ShowPost from "./components/ShowPost/ShowPost";
import PetchPost from "./components/WritePost/PetchPost";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainPage />} path="/" />
        <Route element={<MakePost />} path="/Make" />
        <Route element={<ShowPost />} path="/Show" />
        <Route element={<PetchPost />} path="/Petch" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
