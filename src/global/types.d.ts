// Objects
type CardObj = {
    title: String
};


// Component Props
type CardProps = {
    title: String,
    description?: String,
    tags?: Array<String>,
    type?: String,
};

type CategoryProps = {
    category: String,
    items: Array<CardObj>
};

type GridProps = {
    children?: JSX.Element | JSX.Element[]
};

type YouTubeProps = {
    title: String,
    description: String,
    difficulty: String
}