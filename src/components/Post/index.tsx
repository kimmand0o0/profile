import axios from 'axios';
import { useEffect, useState } from 'react';

const Post = (props: postProps) => {
  const { postId, title, postUrl, date } = props;

  const [content, setContent] = useState('');
  const [tags, setTags] = useState([]);

  useEffect(() => {
    getPostContents();
  }, [postId]);

  const getPostContents = async () => {
    const {
      data: {
        tistory: {
          // item: { content },
          item,
        },
      },
    } = await axios.get('https://www.tistory.com/apis/post/read', {
      params: {
        access_token: process.env.REACT_APP_TISTORY_ACCESSTOKEN,
        blogName: process.env.REACT_APP_TISTORY_BLOG_NAME,
        postId,
        output: 'json',
      },
    });

    setContent(item.content);
    setTags(item.tags.tag);
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
        <div className="w-full flex justify-center italic  opacity-30">
          <p>... more ...</p>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center justify-between">
          <div className="w-full flex flex-row items-start justify-start flex-wrap">
            {tags !== undefined &&
              tags.map((tag, idx) => (
                <div
                  key={idx}
                  className="text-xs bg-cyan-600 opacity-60 text-white mt-1 mr-2 px-2 py-1 rounded-lg"
                >
                  {tag}
                </div>
              ))}
          </div>
          <div className="w-full flex justify-end mt-1 text-sm opacity-80 text-cyan-600">
            <p>{date.slice(0, 10)}</p>
          </div>
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
