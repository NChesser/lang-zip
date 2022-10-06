/*
    About: Basic Card for displaying Items
*/

// Typing
type CardProps = {
    title: String,
    description?: String
};


const Card = ({ ...props }: CardProps) => {

    const { title, description } = props;

    return (
        <div className='card'>
            <div className='card-image'>

            </div>
            <div className='card-description'>
                <p className="card-title-text text">
                    {title}
                </p>
                <p className='subtitle text'>
                    {description}
                </p>
            </div>
        </div>
    )
};

export default Card;