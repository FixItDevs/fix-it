// import React from 'react'
import CategoriesSelector from "../../components/CategoriesSelector/CategoriesSelector"
import SignUpBenefits from "../../components/SignUpBenefits/SignUpBenefits"
import FeedColumn from "../../components/FeedColumn/FeedColumn"
import './FeedPage.css'

const FeedPage = () => {
  return (
    <div className="feed-page">
      <CategoriesSelector />
      <FeedColumn />
      <SignUpBenefits/>
    </div>
  )
}

export default FeedPage
