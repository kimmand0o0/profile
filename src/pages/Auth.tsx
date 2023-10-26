import axios from 'axios';
import { useQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { tistoryTokenState } from 'recoil/atoms';

const Auth = () => {
  const [tistoryToken, setTistoryToken] = useRecoilState(tistoryTokenState);

  const [searchParams, setSearchParams] = useSearchParams();

  const code = searchParams.get('code');

  const getAccessToken = async () => {
    const response = await axios.get(
      `https://www.tistory.com/oauth/access_token?client_id=${process.env.REACT_APP_TISTORY_CLIENT_ID}&client_secret=${process.env.REACT_APP_TISTORY_CLIENT_SECRET}&redirect_uri=${process.env.REACT_APP_TISTORY_CALLBACK_URL}&code=${code}&grant_type=${process.env.REACT_APP_TISTORY_GRANT_TYPE}`,
    );

    console.log('response : ', response);

    return response;
  };

  const data = useQuery('tokenData', getAccessToken);

  if (!data.isLoading) console.log('data : ', data);

  return (
    <>
      <div className="w-full h-screen flex justify-center scrollbar-hide">
        <div className="max-w-screen-md py-32 px-9 flex flex-col">
          <p className="text-gray-400"> auth 로그인 중 입니다 ^____^ </p>
        </div>
      </div>
    </>
  );
};

export default Auth;
