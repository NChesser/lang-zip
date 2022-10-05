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
            <div className='card-description'>
                <span style={{ display: 'flex' }}>
                    <div>
                        8
                    </div>
                    <p className='subtitle'>
                        {description}
                    </p>
                </span>
            </div>
            <div className='card-title'>
                <h2>
                    {title}
                </h2>
            </div>
        </div>
    )
};

export default Card;