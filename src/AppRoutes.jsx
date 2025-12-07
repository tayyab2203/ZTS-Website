import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ZakariyanSociety from "./pages/society/ZakariyanSociety.jsx";
import ZakariyanSociety from "./pages/society/ZakariyanSociety.jsx";


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ZakariyanSociety />} />
      </Routes>
    </BrowserRouter>
  );
}
