/*
    About: Basic Card for displaying Items
*/

// Routing
import { useNavigate, Routes, Route } from "react-router-dom";

// Helper Modules
import { sample, random } from 'lodash';

// Components
import CardItem from "../../pages/home/CardItem";

// Constants
const colorClasses = ['youtube', 'netflix', 'spotify', 'podcast', 'book'];


const Card = ({ ...props }: CardProps) => {
    // Props
    const { title, type } = props;

    // Navigate
    const navigate = useNavigate();

    // Functions
    const difficultyLevel = random(1, 5);


    return (
        <div className='card' onClick={() => navigate(`/${type}/${title}`)}>
            <div className='card-image grid'>
                <div className={"card-icon circle " + sample(colorClasses)} />
            </div>
            <div className='card-description'>
                <p className="card-title-text text hide-text-overflow">
                    {title}
                </p>
                <meter min="0" max="5" optimum={5} value={difficultyLevel} />
                {/* {tags && tags.map(tag =>
                        <p className='subtitle text hide-text-overflow'>
                            {tag}
                        </p>
                    )} */}
            </div>
        </div>
    )
};

export default Card;