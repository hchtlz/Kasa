import { useParams } from 'react-router-dom'; 
import logements from '../../datas/logement.json';
import Carrousel from '../../components/Carrousel/Carrousel';

export default function Logement() {
  const { id } = useParams();
  
  let logement = logements.find((logement) => logement.id === id);
  console.log(logement);
  
  return(
    <div>
      Logement {logement.location}
      <Carrousel pictures={logement.pictures} name={logement.title} />
    </div>
  )
}