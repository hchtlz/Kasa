/* eslint-disable */
import logementData from '../../datas/logement.json'

function Data() {
  return (
    <div>
      {logementData.map((logement, index) => (
        <div key={index}>
          <h2>{logement.title}</h2>
          <img src={logement.cover} alt={logement.title} />
          <p>{logement.description}</p>
          <p>Location: {logement.location}</p>
          <p>Rating: {logement.rating}</p>
          <p>Tags: {logement.tags.join(', ')}</p>
          <ul>
            {logement.equipments.map((equipment, i) => (
              <li key={i}>{equipment}</li>
            ))}
          </ul>
          <p>Host: {logement.host.name}</p>
          <img src={logement.host.picture} alt={logement.host.name} />
        </div>
      ))}
    </div>
  );
}

export default Data;
