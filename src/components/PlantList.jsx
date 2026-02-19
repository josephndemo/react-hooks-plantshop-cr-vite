import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  const plantCards = plants.map((plant) => (
    <PlantCard key={plant.id} plant={plant} />
  ));

  return (
    <ul className="cards" data-testid="plants-list">
      {plantCards}
    </ul>
  );
}

export default PlantList;
