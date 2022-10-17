// Objects
type CardObj = {
    title: String
};

// Contexts
type LibraryItem = {
    id: number,
    title: String,
    description?: String
};

type LibraryContextType = {
    libraryItems: LibraryItem[],
    selectedItem: LibraryItem,
    handleSelectedItem: (item: LibraryItem) => void
};


// Component Props
type CardProps = {
    title: String,
    description?: String,
    tags?: Array<String>,
    type?: String,
};

type CardItemDisplayProps = {
    title: String
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