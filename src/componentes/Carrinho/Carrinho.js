import './Carrinho.css'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faF } from '@fortawesome/free-solid-svg-icons';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';

export default function Carrinho(){
    const navigate = useNavigate();

const navegaProAcompanhamento = () => {
    navigate('/acompanhamento')
  }

const navegaProCarrinho = () => {
    navigate('/carrinho')
  }

    return (
    <div className='botoes'>
      <p className='btn' onClick={navegaProAcompanhamento}><FontAwesomeIcon icon={faFileLines} size="2x" color="white" /></p>
      <p className='btn' onClick={navegaProCarrinho}><FontAwesomeIcon icon={faCartShopping} size="2x" color="white" /></p>
    </div>
    );
}