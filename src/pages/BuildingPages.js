import BuildingList from "../components/BuildingList";

const BuildingPages = ({ buildings, onVote, onStar, type }) => {
    const filteredBuildings = buildings.filter(b => {
        const score = b.upvotes - b.downvotes;
        return type === "hot" ? score > 5 : score <= 5;
    });

    return (
        <BuildingList buildings={filteredBuildings} onVote={onVote} onStar={onStar} />
    );
};

export default BuildingPages;