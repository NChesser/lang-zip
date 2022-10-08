/*
    About: Category Components for Displaying Category Items
*/

// Components
import Card from '../../components/layout/Card';
import CategoryTitle from '../../components/general/CategoryTitle';

// Components
const Category = ({ category, items }: CategoryProps) => {
    return (
        <div className='category'>
            <CategoryTitle title={category} />
            <div className='flex'>
                {items.map(item => <Card {...item} />)}
            </div>
        </div>
    )
};

export default Category;
