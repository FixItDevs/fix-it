import "./CategoriesSelectorList.css";
import { useState } from "react";
import CategorySelectorItem from "../CategorySelectorItem/CategorySelectorItem";
import { categoriesList } from "../../data/categoriesListData";

const CategoriesSelectorList = () => {
  const [openCategories, setOpenCategories] = useState<string[]>([]);
  // const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="category-selector-box">
      <div className="categories-title-box">
        <h1 className="categories-title">Trending Topics</h1>
      </div>
      <div className="categories-list-box">
        {categoriesList.map((category) => (
          <div key={category.main}>
            <CategorySelectorItem category={category} openCategories={openCategories} setOpenCategories={setOpenCategories} />
            <div className="feed-divider"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSelectorList;
