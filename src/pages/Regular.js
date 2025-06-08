import BuildingList from "../components/BuildingList";

const Regular = ({ buildings, onVote, onStar }) => {
    const others = buildings.filter(b => b.upvotes - b.downvotes <= 5);
    return <BuildingList buildings={others} onVote={onVote} onStar={onStar} />;
};

export default Regular;