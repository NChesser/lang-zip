/*
    About: Basic Button
*/

type ButtonProps = {
    title: String,
    onClick: Function
}

const Button = ({ title, onClick }: ButtonProps) => {

    return (
        <button className="button-basic uppercase" onClick={() => onClick()}>
            {title}
        </button>
    )
};

export default Button;