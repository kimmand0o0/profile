import axios from 'axios';
import { useQuery } from 'react-query';

import Post from 'components/Post';

const Posts = () => {
  const getPosts = async () => {
    const {
      data: {
        tistory: {
          item: { posts },
        },
      },
    } = await axios.get('https://www.tistory.com/apis/post/list', {
      params: {
        access_token: process.env.REACT_APP_TISTORY_ACCESSTOKEN,
        output: 'json',
        blogName: process.env.REACT_APP_TISTORY_BLOG_NAME,
        page: 1,
      },
    });

    return posts;
  };

  const posts = useQuery('posts', getPosts);

  return (
    <>
      <div className="w-full h-screen flex justify-center scrollbar-hide">
        <div className="w-full max-w-screen-md py-20 px-9 flex flex-col">
          {posts.status === 'success' &&
            posts.data.map((post: any, idx: number) => (
              <Post
                key={idx}
                postId={post.id}
                title={post.title}
                postUrl={post.postUrl}
                date={post.date}
              />
            ))}
          {posts.status === 'loading' && <p>로딩 중</p>}
        </div>
      </div>
    </>
  );
};

export default Posts;
