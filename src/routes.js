import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/inicio";
import SobreMim from "./pages/SobreMim";
import Menu from "./components/menu";
import Rodape from "components/rodape";
import PaginaPadrao from "components/PaginaPadrao";

function AppRouters() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes> 
        <Route path="/" element={<PaginaPadrao/>}>
          <Route index element={<Inicio/>} />
          <Route path="sobremim" element={<SobreMim/>} />
        </Route>
        <Route path="*" element={<div>Pagina não Encontrada</div>} />
      </Routes>

      <Rodape/>
    </BrowserRouter>
  )
}

export default AppRouters;
