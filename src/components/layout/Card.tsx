/*
    About: Basic Card for displaying Items
*/

// Helper Modules
import { sample, random } from 'lodash';

// Constants
const colorClasses = ['youtube', 'netflix', 'spotify', 'podcast', 'book'];

// Typing
type CardProps = {
    title: String,
    description?: String,
    tags?: Array<String>
};


const Card = ({ ...props }: CardProps) => {
    // Props
    const { title, tags } = props;

    // Functions
    const difficultyLevel = random(1, 5);


    return (
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
    )
};

export default Card;