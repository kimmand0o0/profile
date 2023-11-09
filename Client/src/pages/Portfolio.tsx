import PortfolioList from 'components/PortfolioList';
import PortfolioPosts from 'components/PortfolioPosts';

const Portfolio = () => {
  return (
    <>
      <div className="w-full flex justify-center scrollbar-hide">
        <PortfolioList />
        <PortfolioPosts />
      </div>
    </>
  );
};

export default Portfolio;
