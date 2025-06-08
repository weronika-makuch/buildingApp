const Building = ({ building, onVote, onStar }) => (
  <div className="building-card">
    <h3>{building.title} – {building.location}</h3>
    <img
      src={building.img}
      alt={building.title}
      className="building-image"
    />
    <p className="building-votes">
      👍 {building.upvotes} | 👎 {building.downvotes}
    </p>
    <div className="building-buttons">
      <button onClick={() => onVote(building.id, "up")}>Upvote</button>
      <button onClick={() => onVote(building.id, "down")}>Downvote</button>
      <button onClick={() => onStar(building.id)}>
        {building.starred ? "⭐" : "☆"}
      </button>
    </div>
  </div>
);

export default Building;