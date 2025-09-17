import { useNavigate } from 'react-router-dom';
import './BarraPesquisa.css'

export default function BarraPesquisa(){
    const navigate = useNavigate();

const navegaProPerfil = () => {
    navigate('/perfil')
  }

const navegaProInicio = () => {
    navigate('/uniformes')
  }

    return (
        <div className='barrapesquisa'>
            <button className='btn'onClick={navegaProInicio}>voltar</button>
            <input className="pesquisa" type="search" placeholder="Pesquisar"/>
            <button className='btn' onClick={navegaProPerfil}>Perfil</button>
        </div>
    );
}