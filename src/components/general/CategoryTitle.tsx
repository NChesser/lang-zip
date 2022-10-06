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
            <h2 style={{ borderBottom: '3px solid red'}}>
                {title}
            </h2>
        </div>
    )
};

export default CategoryTitle;