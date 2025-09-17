import { useNavigate } from 'react-router-dom';
import './CardProdutos.css';

export default function CardProduto({ nome, descricao, preco, imagem }){
  const navigate = useNavigate();

  const navegaProPopup = () => {
    navigate('/popup')
  }

  return (

    <article className="card" onClick={navegaProPopup}>
      <div className='uniforme-img'>
      <img src={imagem} alt={nome} />
      </div>
      <h2 className='titulo'>{nome}</h2>
      <p className='descricao'>{descricao}</p>
      <span className='preco'>{preco}</span>

    </article>

  );
}

