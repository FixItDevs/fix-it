import "./CategorySelectorItem.css";
import React, { useState, useEffect } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

interface CategorySelectorItemProps {
  category: {
    main: string;
    icon: JSX.Element;
    sub: string[];
  };
  openCategories: string[];
  setOpenCategories: (categories: string[]) => void;
}

const CategorySelectorItem: React.FC<CategorySelectorItemProps> = ({
  category,
  openCategories,
  setOpenCategories
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(openCategories.includes(category.main));
  }, [openCategories, category.main]);

  const handleCategoryOpener = (category: string) => {
    if (openCategories.includes(category)) {
      console.log("Category closed: ", category);
      setOpenCategories(openCategories.filter((cat) => cat !== category));
    } else {
      console.log("Category opened: ", category);
      console.log("Open categories: ", openCategories);
      setOpenCategories([...openCategories, category]);
    }
  };

  const handleSelectMainCategory = (category: string) => {
    console.log("Main category selected: ", category);
  };

  const handleSelectSubCategory = (subCategory: string) => {
    console.log("Sub category selected: ", `${category.main}: ${subCategory}`);
  };

  return (
    <div className="category-item">
      <h3 className="category-main-container">
        <div
          className="category-main-label"
          onClick={() => handleSelectMainCategory(category.main)}
        >
          <span className="category-main-icon">{category.icon}</span>
          <span className="category-main-name">{category.main}</span>
        </div>
        <div
          className="category-main-opener-arrow"
          onClick={() => handleCategoryOpener(category.main)}
        >
          {isOpen ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}{" "}
        </div>
      </h3>
      <div className={`category-sub ${isOpen ? "open" : ""}`}>
        {category.sub.map((subCategory) => (
          <div
            key={subCategory}
            className="category-sub-item-container"
            onClick={() => handleSelectSubCategory(subCategory)}
          >
            <p className="category-sub-item">{subCategory}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySelectorItem;
