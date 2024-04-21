import "./CategoriesSelectorList.css";
import CategorySelectorItem from "../CategorySelectorItem/CategorySelectorItem";
const categories = [
  "Plumbing",
  "Electrical",
  "Appliances",
  "Decorating",
  "Roofing",
  "Carpentry",
  "Metalwork"
];

const CategoriesSelectorList = () => {
  return (
    <div className="category-selector-box">
      <div className="categories-title-box">
        <h1 className="categories-title">Trending Topics</h1>
      </div>
      <div className="categories-list-box">
        {categories.map((category) => (
          <CategorySelectorItem key={category}>{category}</CategorySelectorItem>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSelectorList;
