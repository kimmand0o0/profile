const Tag = ({ tag }: tagProps) => {
  return (
    <>
      <p className="w-fit h-fit mr-1 my-0.5 px-1.5 py-0.5 rounded-md bg-gray-800 text-gray-100 text-[10px]">
        {tag}
      </p>
    </>
  );
};

type tagProps = {
  tag: string;
};

export default Tag;
