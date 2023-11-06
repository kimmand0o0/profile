import axios from 'axios';
import { useQuery } from 'react-query';
import { useInView } from 'react-intersection-observer';

import Post from 'components/Post';
import { useEffect, useState } from 'react';

const Posts = () => {
  const [ref, inView] = useInView();

  const [postsList, setPostList] = useState<any[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (inView) {
      getPosts();
    }
  }, [inView]);

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
        page,
      },
    });

    const newPosts = [...postsList, ...posts];

    setPostList(newPosts);
    setPage(page + 1);
  };

  const posts = useQuery('posts', getPosts);

  return (
    <>
      <div className="w-full h-screen flex justify-center scrollbar-hide">
        <div className="w-full max-w-screen-md py-20 px-9 flex flex-col">
          {posts.status === 'success' &&
            postsList.map((post: any, idx: number) => (
              <Post
                key={idx}
                postId={post.id}
                title={post.title}
                postUrl={post.postUrl}
                date={post.date}
              />
            ))}

          <div className="w-full p-16" ref={ref}>
            {posts.status === 'loading' && <p>로딩 중</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Posts;
