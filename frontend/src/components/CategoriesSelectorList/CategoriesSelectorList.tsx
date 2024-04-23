import "./CategoriesSelectorList.css";
import CategorySelectorItem from "../CategorySelectorItem/CategorySelectorItem";
import { categoriesList } from "../../data/categoriesList";

const CategoriesSelectorList = () => {
  return (
    <div className="category-selector-box">
      <div className="categories-title-box">
        <h1 className="categories-title">Trending Topics</h1>
      </div>
      <div className="categories-list-box">
        {categoriesList.map((category) => (
          <div key={category}>
            <CategorySelectorItem>{category}</CategorySelectorItem>
            <div className="feed-divider"></div>
            <CategorySelectorItem>{category}</CategorySelectorItem>
            <div className="feed-divider"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSelectorList;
