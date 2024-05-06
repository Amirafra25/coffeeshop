export const categories = [
    {_id: '111c', name: "sobhane"},
    {_id: '222c', name: "nahar"},
    {_id: '333c', name: "sham"}
];

export function getCategories() {
    return categories.filter(c => c);
}