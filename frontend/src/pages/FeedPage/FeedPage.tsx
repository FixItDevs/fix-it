// import React from 'react'
import CategoriesSelectorList from "../../components/CategoriesSelectorList/CategoriesSelectorList";
import SignUpBenefits from "../../components/SignUpBenefits/SignUpBenefits";
import FeedColumn from "../../components/FeedColumn/FeedColumn";
import "./FeedPage.css";

const FeedPage = () => {
  return (
    <div className="feed-page">
      <div className="category-selector-wrapper">
        <CategoriesSelectorList />
      </div>
      <div className="feed-column-wrapper">
        <FeedColumn />
      </div>
      <div className="signup-benefits-wrapper">
        <SignUpBenefits />
      </div>
    </div>
  );
};

export default FeedPage;
