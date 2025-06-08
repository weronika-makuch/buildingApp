import Building from "./Building";

const BuildingList = ({ buildings, onVote, onStar }) => (
  <div className="building-list">
    {buildings.map((building) => (
      <Building key={building.id} building={building} onVote={onVote} onStar={onStar} />
    ))}
  </div>
);

export default BuildingList;