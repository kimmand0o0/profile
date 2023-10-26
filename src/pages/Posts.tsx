import axios from 'axios';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useRecoilState } from 'recoil';

import { tistoryAccessState } from 'recoil/atoms';

const Posts = () => {
  const [accessState, setAccessState] = useRecoilState(tistoryAccessState);

  useEffect(() => {
    if (!accessState) {
      window.location.href = `https://www.tistory.com/oauth/authorize?client_id=${process.env.REACT_APP_TISTORY_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_TISTORY_CALLBACK_URL}&response_type=code`;
    }
  }, [accessState]);

  const getPosts = async () => {
    const response = await axios.get(
      `https://www.tistory.com/apis/post/list?access_token=${
        process.env.REACT_APP_TISTORY_ACCESSTOKEN
      }&output=${process.env.REACT_APP_TISTORY_OUTPUT_TYPE}&blogName=${
        process.env.REACT_APP_TISTORY_BLOG_NAME
      }&page=${1}`,
    );

    return response.data.data;
  };

  const data = useQuery('posts', getPosts);

  console.log(data);

  return <></>;
};

export default Posts;
