// Objects
type CardObj = {
    title: String
};


// Component Props
type CategoryProps = {
    category: String,
    items: Array<CardObj>
};

type GridProps = {
    children?: JSX.Element | JSX.Element[]
};
