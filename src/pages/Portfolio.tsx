import PortfolioPost from 'components/PortfolioPost';

const Portfolio = () => {
  return (
    <>
      <div className="w-full my-20 flex justify-center scrollbar-hide">
        <div className="max-w-screen-md px-2 md:grid md:grid-cols-2">
          <PortfolioPost />
          <PortfolioPost />
          <PortfolioPost />
          <PortfolioPost />
          <PortfolioPost />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
