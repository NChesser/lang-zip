
import * as React from 'react';
import Card from '../components/layout/Card';


const Home = () => {
    // State Variables
    const [cards, setCards] = React.useState<Array<String>>([]);


    // Functions
    const handleClick = () => {
        const newCards = [...cards, 'New Card Made ' + cards.length];
        setCards(newCards);
    };


    return (
        <>
            {cards.map(card => <Card title={card} />) }
            <button onClick={handleClick}>
                Click Me
            </button>
        </>
    )
};

export default Home;