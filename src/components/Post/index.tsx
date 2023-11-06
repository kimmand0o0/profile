import axios from 'axios';
import { useEffect, useState } from 'react';

const Post = (props: postProps) => {
  const { postId, title, postUrl, date } = props;

  const [content, setContent] = useState('');

  useEffect(() => {
    getPostContents();
  }, [postId]);

  const getPostContents = async () => {
    const {
      data: {
        tistory: {
          item: { content },
        },
      },
    } = await axios.get('https://www.tistory.com/apis/post/read', {
      params: {
        access_token: process.env.REACT_APP_TISTORY_ACCESSTOKEN,
        blogName: process.env.REACT_APP_TISTORY_BLOG_NAME,
        postId: postId,
        output: 'json',
      },
    });

    setContent(content);
  };

  return (
    <>
      <div
        className="m-3 p-6 border hover:cursor-pointer hover:bg-gray-200 rounded-xl font-[GmarketSansMedium]"
        onClick={() => window.open(postUrl)}
      >
        <p className="font-bold text-lg">{title}</p>
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          className="opacity-40 h-20 overflow-hidden my-6 text-sm"
        ></div>
        <div className="w-full flex justify-center italic text-sm opacity-30">
          <p>... more ...</p>
        </div>
        <div className="w-full flex justify-end text-sm text-cyan-600">
          <p>{date.slice(0, 10)}</p>
        </div>
      </div>
    </>
  );
};

type postProps = {
  postId: number;
  title: string;
  postUrl: string;
  date: string;
};

export default Post;
