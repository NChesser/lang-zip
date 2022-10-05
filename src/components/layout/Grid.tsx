/*
    About: Basic Grid Component
*/

// Typing
type GridProps = {
    children?: JSX.Element | JSX.Element[]
}


const Grid = ({ children }: GridProps) => {

    return (
        <div className='grid-container'>
            {children}
        </div>
    )
};

export default Grid;