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
        <Title title={title} />
    )
};

export default CategoryTitle;