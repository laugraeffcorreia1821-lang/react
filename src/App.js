import { Route, Routes, useNavigate, BrowserRouter } from 'react-router-dom';
import BarraPesquisa from './componentes/BarraPesquisa/BarraPesquisa';
import Uniformes from './pages/Uniformes';
import Perfil from './pages/Perfil';
import Popup from './pages/Popup';

export default function App() {


  return (<>
    <div className="App">
        <BrowserRouter>
      <BarraPesquisa />
          <Routes>
            <Route path='/Perfil' element={<Perfil />} />
            <Route path='/Uniformes' element={<Uniformes/>} />
            <Route path='/Popup' element={<Popup/>} />
          </Routes>
        </BrowserRouter>
    </div>
  </>);
}


