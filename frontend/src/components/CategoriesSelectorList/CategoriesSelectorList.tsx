import "./CategoriesSelectorList.css";
import { useState } from "react";
import CategorySelectorItem from "../CategorySelectorItem/CategorySelectorItem";
import { categoriesList } from "../../data/categoriesListData";
import useScreenWidth from "../../hooks/useScreenWidth";

const CategoriesSelectorList = () => {
  const [openCategories, setOpenCategories] = useState<string[]>([]);
  // const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const { showCategories } = useScreenWidth();

  return (
    <div
      className={`category-selector-box ${!showCategories ? "category-selector-box-for-overlay" : ""}`}
    >
      <div
        className={`categories-title-box ${!showCategories ? "categories-title-box-for-overlay" : ""}`}
      >
        <h1 className="categories-title">Trending Topics</h1>
      </div>
      <div className="categories-list-box">
        {categoriesList.map((category) => (
          <div key={category.main}>
            <CategorySelectorItem
              category={category}
              openCategories={openCategories}
              setOpenCategories={setOpenCategories}
            />
            <div className="horizontal-divider"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSelectorList;
