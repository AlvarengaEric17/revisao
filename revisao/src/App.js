import './App.css';
import FC from './img/fcmobile.jpg'
import ProfileImage from './components/ProfileImage';
import ProductCard from './components/ProductCard'


function App() {
  return (
    <div className="App">
      <h1>Aula de revisão</h1>
      <div className='main'>



        <ProfileImage
          titulo="Imagem teste ilustartiva"
          imagem={FC}
          alt="Foto do FC Mobile"

        />
        <ProductCard
          titulo="Jogo FC Mobile"
          imagem={FC}
          alt="Foto do jogo FC Mobile"
          preco="R$ 129.99"
        />

      </div>
    </div>
  );
}

export default App;
