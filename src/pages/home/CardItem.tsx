/*
    About: Card Page Item
*/


const CardItem = ({ ...props }: CardItemDisplayProps) => {
    // Props
    const { title } = props;

    const description = "Hello World";
    const difficulty = "super-beginner";

    return (
        <div className="container">
            <h2>{title}</h2>
            <h4>{difficulty}</h4>
            <p>{description}</p>
        </div>
    )
};

export default CardItem;