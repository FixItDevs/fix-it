// import React from 'react'
import CategoriesSelectorList from "../../components/CategoriesSelectorList/CategoriesSelectorList";
import SignUpBenefits from "../../components/SignUpBenefits/SignUpBenefits";
import FeedColumn from "../../components/FeedColumn/FeedColumn";
import "./FeedPage.css";

const FeedPage = () => {
  return (
    <div className="feed-page">
      <CategoriesSelectorList />
      <FeedColumn />
      <SignUpBenefits />
    </div>
  );
};

export default FeedPage;
