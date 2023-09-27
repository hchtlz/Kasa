import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import logements from "../../datas/logement.json";

export default function Home() {
  const data = logements;
  return (
    <div>
      <Banner text="Chez vous, partout et ailleurs" />
      <div className="cards_grid">
        {data.map((logement) => (
          <Card
            key={logement.id}
            title={logement.title}
            description={logement.description}
            image={logement.cover}
            id={logement.id}
          />
        ))}
      </div>
    </div>
  );
}
