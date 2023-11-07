import axios from 'axios';
import { useQuery } from 'react-query';
import { useRecoilState } from 'recoil';

import { postsAtom } from 'recoil/postAtoms';

import Post from './Post';

const MainPosts = () => {
  const [posts, setPosts] = useRecoilState(postsAtom);

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

    setPosts(posts);
  };

  const { isLoading } = useQuery('posts', getPosts);

  return (
    <>
      <div className="w-full pt-14 px-4 flex flex-col justify-start items-start font-[GmarketSansMedium]">
        <div className="w-full border-t border-slate-300 text-xl pl-2 py-4">
          <p>Blog Posts</p>
        </div>
        <div className="w-full flex flex-row overflow-x-auto scrollbar-hide">
          {!isLoading &&
            posts.map((post: any, idx: number) => (
              <Post
                key={idx}
                title={post.title}
                postUrl={post.postUrl}
                date={post.date}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default MainPosts;
