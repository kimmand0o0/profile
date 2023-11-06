const Post = (props: postProps) => {
  const { title, postUrl, date } = props;

  return (
    <>
      <div
        className="border mx-2 p-4 hover:cursor-pointer hover:bg-gray-100 rounded-xl flex flex-col justify-between"
        onClick={() => window.open(postUrl)}
      >
        <div className="w-52">
          <p>{title}</p>
        </div>
        <div className="pt-2 text-sm text-gray-500">
          <p>{date}</p>
        </div>
      </div>
    </>
  );
};

export default Post;

type postProps = {
  title: string;
  postUrl: string;
  date: string;
};
