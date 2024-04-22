import "./CategoriesSelectorList.css";
import { useState } from "react";
import CategorySelectorItem from "../CategorySelectorItem/CategorySelectorItem";
import { categoriesList } from "../../data/categoriesList";

const CategoriesSelectorList = () => {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  // const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="category-selector-box">
      <div className="categories-title-box">
        <h1 className="categories-title">Trending Topics</h1>
      </div>
      <div className="categories-list-box">
        {categoriesList.map((category) => (
          <div key={category.main}>
            <CategorySelectorItem category={category} expandedCategories={expandedCategories} setExpandedCategories={setExpandedCategories} />
            <div className="feed-divider"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSelectorList;
