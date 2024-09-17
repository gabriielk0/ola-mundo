import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/inicio";
import SobreMim from "./pages/SobreMim";
import Menu from "./components/menu";
import Rodape from "components/rodape";
import PaginaPadrao from "components/PaginaPadrao";
import Post from "pages/Post";

function AppRouters() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes> 
        <Route path="/" element={<PaginaPadrao/>}>
          <Route index element={<Inicio/>} />
          <Route path="sobremim" element={<SobreMim/>} />
          <Route path="posts/:id" element={<Post/>} />
        </Route>
        <Route path="*" element={<div>Pagina não Encontrada</div>} />
      </Routes>

      <Rodape/>
    </BrowserRouter>
  )
}

export default AppRouters;
