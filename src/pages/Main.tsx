import Introduce from 'components/Introduce';
import MainPosts from 'components/MainPosts';

const Main = () => {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-screen-md py-10 px-9 flex flex-col">
          <Introduce />
          <MainPosts />
        </div>
      </div>{' '}
    </>
  );
};

export default Main;
