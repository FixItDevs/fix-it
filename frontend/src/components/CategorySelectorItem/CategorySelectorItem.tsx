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

  const handleCategoryClick = (category: string) => {
    console.log("Category clicked: ", category);
    if (openCategories.includes(category)) {
      setOpenCategories(
        openCategories.filter((cat) => cat !== category)
      );
    } else {
      setOpenCategories([...openCategories, category]);
    }
  };

  return (
    <div className="category-item">
      <h3
        className="category-main"
        onClick={() => handleCategoryClick(category.main)}
      >
        {category.main} {category.icon}{" "}
        {isOpen ? (
          <KeyboardArrowDownIcon />
        ) : (
          <KeyboardArrowRightIcon />
        )}{" "}
      </h3>
      <div className={`category-sub ${isOpen ? "open" : ""}`}>
        {category.sub.map((subCategory) => (
          <p key={subCategory} className="category-sub-item">
            {subCategory}
          </p>
        ))}
      </div>
    </div>
  );
};

export default CategorySelectorItem;
