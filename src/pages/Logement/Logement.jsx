import React from 'react';
import { useParams } from 'react-router-dom';
import logements from '../../datas/logement.json';
import Carrousel from '../../components/Carrousel/Carrousel';
import Tag from '../../components/Tag/Tag';
import Rate from '../../components/Rate/Rate';
import Host from '../../components/Host/Host';
import Collapse from '../../components/Collapse/Collapse';

export default function Logement() {
  const { id } = useParams();
  let logement = logements.find((logement) => logement.id === id);
  
  return (
    <div className="logements">
      <Carrousel pictures={logement.pictures} name={logement.title} />
      <div className="logements_info">
        <div className="logements_info__left">
          <h1 className="logements_title">{logement.title}</h1>
          <h2 className="logements_location">{logement.location}</h2>
          <div className='logements_tags'>
            {logement.tags.map((tag, index) => (
              <Tag key={index} tag={tag} />
            ))}
          </div>
        </div>
        <div className="logements_info__right">
          <Host image={logement.host.picture} name={logement.host.name} className="logements_host" />
          <Rate score={logement.rating} />
        </div>
      </div>
      <div className="logements_collapses">
        {}
        <Collapse title="Description">
          {logement.description}
        </Collapse>
        <Collapse title="Équipements">
          {logement.equipments.map((equipment) => (
            <div key={equipment}>{equipment}</div>
          ))}
        </Collapse>
      </div>
    </div>
  );
}

