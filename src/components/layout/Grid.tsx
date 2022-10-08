/*
    About: Basic Grid Component
*/

// Components
const Grid = ({ children }: GridProps) => {

    return (
        <div className='grid-container'>
            {children}
        </div>
    )
};

export default Grid;