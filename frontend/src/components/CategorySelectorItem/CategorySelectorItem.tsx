import './CategorySelectorItem.css'
import React from 'react'

interface CategorySelectorItemProps {
  children: string
}

const CategorySelectorItem: React.FC<CategorySelectorItemProps> = ({children}) => {
  return (
    <div className="category-item">
      {children}
    </div>
  )
}

export default CategorySelectorItem
