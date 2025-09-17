import './Uniformes.css'
import Banner from '../../componentes/Banner/Banner';
import CardProduto from '../../componentes/CardProdutos/CardProdutos';
import Carrinho from '../../componentes/Carrinho/Carrinho';

export default function Uniformes() {
    const produtos = [
    {
      nome: "Camisa Polo",
      descricao: "Camisa polo Pormade, masculina e feminina. Algodão, manga curta.",
      preco: "R$ 48,90",
      imagem: "../../imagens/camisa-polo.png"
    },

     {
       nome: "Camisa Social",       
       descricao: "Camisa social Pormade, masculina e feminina. Algodão, manga longa.",
       preco: "R$ 60,00",
       imagem: "../../imagens/camisa-social.png"
     },

     {
       nome: "Jaqueta",
       descricao: "Jaqueta Pormade, masculino e feminino. Poliéster, manga longa.",
       preco: "R$139,00",
       imagem: "../../imagens/jaqueta.png"
     },
     {
       nome: "Moletom",
       descricao: "Moletom Pormade, masculino e feminino. Algodão, manga longa",
       preco: "R$ 84,50",
       imagem: "../../imagens/moletom.png"
     },
     {
       nome: "Moletom",
       descricao: "Moletom Pormade, masculino e feminino. Algodão, manga longa",
       preco: "R$ 84,50",
       imagem: "../../imagens/moletom.png"
     }
  ];
return (
  <>
      <Carrinho/>
      <Banner/>

      <section className="produtos">
        {produtos.map((p, i) => (
          <CardProduto key={i} {...p} />
        ))}
      </section>
  </>
);
}
