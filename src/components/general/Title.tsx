/*
    About: Basic Title
*/

type TitleProps = {
    title: String
}

const Title = ({ title }: TitleProps) => {

    return (
        <h3>{title}</h3>
    )
};

export default Title;