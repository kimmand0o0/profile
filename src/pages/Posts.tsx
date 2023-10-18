import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { tstoryAccessToken } from 'recoil/atoms';

const Posts = () => {
  const [accessToken, setAccessToken] = useRecoilState(tstoryAccessToken);

  useEffect(() => {
    if (!accessToken) {
      window.location.href = `https://www.tistory.com/oauth/authorize?client_id=${process.env.REACT_APP_TSTORY_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_TSTORY_CALLBACK_URL}&response_type=code`;
    }
  }, [accessToken]);

  return <></>;
};

export default Posts;
