/*
    About: Basic Title
*/

// Components
import Toolbar from '../layout/Toolbar';
import Title from './Title';

// Types
type CategoryTitleProps = {
    title: String
}

const CategoryTitle = ({ title }: CategoryTitleProps) => {

    return (
        <Toolbar>
            <Title title={title} />
            <br />
        </Toolbar>
    )
};

export default CategoryTitle;