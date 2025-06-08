import BuildingList from "../components/BuildingList";

const Hot = ({ buildings, onVote, onStar }) => {
    const iconic = buildings.filter(b => b.upvotes - b.downvotes > 5);
    return <BuildingList buildings={iconic} onVote={onVote} onStar={onStar} />;
};

export default Hot;