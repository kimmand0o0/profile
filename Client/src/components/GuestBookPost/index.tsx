import axios from 'axios';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useQuery } from 'react-query';
import { useRecoilState } from 'recoil';

import { guestbookAtom } from 'recoil/guestbookAtoms';

import Post from './Post';

const GuestBookPost = () => {
  const [ref, inView] = useInView();

  const [posts, setPosts] = useRecoilState<any>(guestbookAtom);

  const [page, setPage] = useState({
    page: 1,
    totalPage: 1,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      if (posts.contents.length >= posts.total) {
        setLoading(false);
      } else {
        getPosts();

        setLoading(false);
      }
    }, 1000);
  }, [inView]);

  const getPosts = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_GUESTBOOK_URL}/api/guest-books`,
      {
        params: {
          sort: 'id:desc',
          pagination: {
            page: page.page,
            pageSize: 10,
          },
        },
      },
    );

    if (
      posts.contents.findIndex(
        (content: any) => content.id === data.data[0].id,
      ) === -1
    ) {
      const newContents = [...posts.contents, ...data.data];

      setPosts({
        total: data.meta.pagination.total,
        contents: newContents,
      });
    }

    setPage({
      page: page.page + 1,
      totalPage: data.meta.pagination.pageCount,
    });
  };

  const guestPosts = useQuery('guestbooks', getPosts);

  const modifyGuestbook = async (postId: number, content: string) => {
    const response = await axios.put(
      `${process.env.REACT_APP_GUESTBOOK_URL}/api/guest-books/${postId}`,
      {
        data: {
          content,
        },
      },
    );

    if (response.status === 200) {
      const newGuestbookContents = posts.contents.map((post: any) =>
        post.id === postId
          ? {
              ...post,
              attributes: {
                createdAt: post.attributes.createdAt,
                name: post.attributes.name,
                password: post.attributes.password,
                private: post.attributes.private,
                content,
              },
            }
          : post,
      );

      setPosts({
        total: posts.total,
        contents: newGuestbookContents,
      });
    }
  };

  const deleteGuestbook = async (postId: number) => {
    const response = await axios.delete(
      `${process.env.REACT_APP_GUESTBOOK_URL}/api/guest-books/${postId}`,
    );

    if (response.status === 200) {
      const newPosts = posts.contents.filter((content: any) => {
        return content.id !== postId;
      });

      setPosts({
        total: posts.total,
        contents: newPosts,
      });
    }
  };

  return (
    <>
      <div>
        <div className="pt-16 px-4">
          {guestPosts.status === 'success' &&
            posts.contents.map((post: any) => (
              <Post
                key={post.id}
                postId={post.id}
                name={post.attributes.name}
                content={post.attributes.content}
                secret={post.attributes.private}
                password={post.attributes.password}
                createdAt={post.attributes.createdAt}
                modifyGuestbook={modifyGuestbook}
                deleteGuestbook={deleteGuestbook}
              />
            ))}
        </div>
        <div className="w-full p-16" ref={ref}>
          {loading && (
            <div className="w-full flex  justify-center items-center text-gray-500">
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-sky-400"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
              방명록을 불러오는 중입니다. 🥳
            </div>
          )}
          {!loading && posts.total <= posts.contents.length && (
            <div className="w-full flex  justify-center items-center text-gray-500">
              모든 방명록을 불러왔습니다. 😅
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default GuestBookPost;
