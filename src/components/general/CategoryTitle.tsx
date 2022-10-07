/*
    About: Basic Title For Different Categories
*/

// Types
type CategoryTitleProps = {
    title: String
}

const CategoryTitle = ({ title }: CategoryTitleProps) => {
    return (
        <div >
            <h2 style={{ borderBottom: '3px solid #92D293'}}>
                {title}
            </h2>
        </div>
    )
};

export default CategoryTitle;