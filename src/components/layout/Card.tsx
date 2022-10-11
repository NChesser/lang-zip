/*
    About: Basic Card for displaying Items
*/

// Routing
import { Link } from "react-router-dom";

// Helper Modules
import { sample, random } from 'lodash';

// Constants
const colorClasses = ['youtube', 'netflix', 'spotify', 'podcast', 'book'];


const Card = ({ ...props }: CardProps) => {
    // Props
    const { title, type } = props;

    // Functions
    const difficultyLevel = random(1, 5);


    return (
        <Link to={`/${type}/${title}`}>
            <div className='card'>
                <div className='card-image grid'>
                    <div className={"card-icon circle " + sample(colorClasses)} />
                    <div className='card-overlay' />
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
        </Link>
    )
};

export default Card;