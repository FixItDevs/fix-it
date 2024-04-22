import "./CategorySelectorItem.css";
import React from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

interface CategorySelectorItemProps {
  category: {
    main: string;
    icon: JSX.Element;
    sub: string[];
  },
  expandedCategories: string[],
  setExpandedCategories: (categories: string[]) => void
}

const CategorySelectorItem: React.FC<CategorySelectorItemProps> = ({
  category, expandedCategories, setExpandedCategories
}) => {

  const handleCategoryClick = (category: string) => {
    console.log("Category clicked: ", category);
    if (expandedCategories.includes(category)) {
      setExpandedCategories(expandedCategories.filter((cat) => cat !== category));
    } else {
      setExpandedCategories([...expandedCategories, category]);
    }
  }

  return <div className="category-item">
    <h3 className="category-main" onClick={() => handleCategoryClick(category.main)} >{category.main} {category.icon} {expandedCategories.includes(category.main) ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />} </h3>
    {expandedCategories.includes(category.main) && <div className="category-sub">
      {category.sub.map((subCategory) => (
        <p key={subCategory} className="category-sub-item">
          {subCategory}
        </p>
      ))}
    </div>}
  </div>;
};

export default CategorySelectorItem;

