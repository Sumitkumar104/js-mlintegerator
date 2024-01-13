import Uploadvideopage from "./components/Uploadvideopage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Livepage from "./components/Livepage";
import Navbar from "./components/Navbar";
import Analysis from "./components/Analysis";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Livepage />} />
        <Route path="/Livepage" element={<Livepage />} />
        <Route path="/VideoUpload" element={<Uploadvideopage />} />
        <Route path="/Analysis" element={<Analysis />} />

      </Routes>
    </BrowserRouter>
  );
}
