import "./CategoriesSelectorList.css";

const CategoriesSelectorList = () => {
  return (
    <div className="category-selector-box">
      <div className="categories-title-box">
        <h1 className="categories-title">Trending Topics</h1>
      </div>
      <div className="categories-list-box">
        <div className="category-item">Plumbing</div>
        <div className="category-item">Electrical</div>
        <div className="category-item">Appliances</div>
        <div className="category-item">Decorating</div>
        <div className="category-item">Roofing</div>
        <div className="category-item">Carpentry</div>
        <div className="category-item">Metalwork</div>
      </div  >
    </div>
  );
};

export default CategoriesSelectorList;
