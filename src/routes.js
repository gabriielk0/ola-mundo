import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/inicio";
import SobreMim from "./pages/SobreMim";
import Menu from "./components/menu";
import Rodape from "components/rodape";
import PaginaPadrao from "components/PaginaPadrao";
import Post from "pages/Post";
import NaoEncontrada from "pages/NaoEncontrada";
import ScrollToTop from "components/ScrollToTop";

function AppRouters() {
  return (
    <BrowserRouter>
      <ScrollToTop/>

      <Menu />

      <Routes> 
        <Route path="/" element={<PaginaPadrao/>}>
          <Route index element={<Inicio/>} />
          <Route path="sobremim" element={<SobreMim/>} />
        </Route>
        <Route path="posts/:id" element={<Post/>} />
        <Route path="*" element={<NaoEncontrada/>} />
      </Routes>

      <Rodape/>
    </BrowserRouter>
  )
}

export default AppRouters;
