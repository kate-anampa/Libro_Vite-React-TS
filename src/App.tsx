
import './App.css'
import { Card } from './assets/components/Card/Card';
import { Persona } from './assets/components/Persona/Persona';

interface BookProps {
  id: number;
  titulo: string;
  anio: string;
  autor: string;
  imagen: string;
}

const book: BookProps[] = [

  {
    id: 1,
    titulo: 'One Hundred Years of Solitude',
    anio: '1967',
    autor: 'Gabriel García Márquez',
    imagen: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR-_qFlRxa5Ozof4LnQb6m3QZYNCh4JRxa2Xc0cCMwVn_3Sdyry'
  },

  {
    id: 2,
    titulo: 'Twenty Love Poems and a Song of Despair',
    anio: '1924',
    autor: 'Pablo Neruda',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB14aeb6Hs5GxV_h9jQzGKd8wxDuvOkZWEBI3TMOUIJhGFpfED'
  }

]










function App() {


  return (
    <>
      <h1>Libros / Latinoamerica </h1>

      <div className='d-flex flex-wrap justify-content-center align-item-center'>
        {book.map((e) => (
          <Card titulo={e.titulo} autor={e.autor} anio={e.anio} imagen={e.imagen} />
        ))}
      </div>

      <hr />
      <Persona />
    </>
  )
}

export default App
