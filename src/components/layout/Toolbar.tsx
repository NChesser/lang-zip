/*
    About: Basic Card for displaying Items
*/

// Typing
type Props = {
    children?: JSX.Element | JSX.Element[] | any
};


const Toolbar = ({ children }: Props) => {

    return (
        <div className='toolbar'>
            {children}
        </div>
    )
};

export default Toolbar;