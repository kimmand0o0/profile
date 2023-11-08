import GuestBookPost from 'components/GuestBookPost';
import GuestBookPostBox from '../components/GuestBookPostBox';

const GuestBook = () => {
  return (
    <>
      <div className="w-full h-screen flex justify-center scrollbar-hide font-[GmarketSansMedium]">
        <div className="w-full max-w-screen-md py-20 px-9 flex flex-col">
          <div className="w-full py-16 flex flex-col items-center justify-center text-gray-800">
            <div>
              <p>사이트를 방문 해주셔서 감사합니다. 🥰</p>
              <p>
                저를 위한 피드백이나 응원을 남겨주시면 큰 동기부여가 됩니다!
              </p>
            </div>
          </div>
          <GuestBookPostBox />
          <GuestBookPost />
        </div>
      </div>
    </>
  );
};

export default GuestBook;
