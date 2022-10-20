// Objects
type CardObj = {
    title: String
};

// Contexts
type LibraryItem = {
    id?: number,
    type?: String,
    title: String,
    difficulty?: String,
    description?: String,
    url?: string,
    genres?: Array<String>
};

type LibraryContextType = {
    libraryItems: LibraryItem[],
    selectedItem: LibraryItem,
    handleSelectedItem: (item: LibraryItem) => void
};


// Component Props
type CardProps = {
    LibraryItem
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