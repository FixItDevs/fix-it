import CategoriesSelectorList from "../../components/CategoriesSelectorList/CategoriesSelectorList";
import SignUpBenefits from "../../components/SignUpBenefits/SignUpBenefits";
import FeedColumn from "../../components/FeedColumn/FeedColumn";
import "./FeedPage.css";
import useScreenWidth from "../../hooks/useScreenWidth";

export interface FeedPageProps {
  isCategoryOverlayActive: boolean;
}

const FeedPage = ({ isCategoryOverlayActive }: FeedPageProps) => {
  const { showCategories } = useScreenWidth();
  return (
    <div className="feed-page">
      {showCategories && <div className="category-selector-wrapper">
        <CategoriesSelectorList />
      </div>}
      {

      }
      <div className={`categories-overlay-version ${isCategoryOverlayActive ? 'categories-overlay-version-active' : ''}`}>
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
