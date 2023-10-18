const AboutMeSkills = () => {
  return (
    <>
      <div className="w-full py-16 px-5 font-[GmarketSansMedium] text-slate-700 flex flex-col items-center border-b border-slate-300">
        <div>
          <p className="text-2xl ">- Skills -</p>
        </div>
        <div className="w-full flex md:flex-row flex-col p-4">
          <div className="min-w-[50%] pl-4 py-1 border-l border-slate-100">
            <p className="py-2 font-bold">Development Tool</p>
            <div className="pl-1 text-sm">
              <p className="pb-2">- Javascript, Typescript, HTML, CSS</p>
              <p className="pb-2">- Node, React</p>
              <p className="pb-2">- Express, Axios, React-Query</p>
              <p className="pb-2">- Styled-Components, Tailwind</p>
              <p className="pb-2">- MongoDB, MySQL</p>
              <p className="pb-2">- Git, Postman</p>
              <p>- AWS(EC2, RDS S3, RAMDA)</p>
            </div>
          </div>
          <div className="min-w-[50%] pl-4 py-1 border-l border-slate-100">
            <p className="py-2 font-bold">Design Tool</p>
            <p className="pl-1 text-sm">
              - Adobe Photoshop, Illustrator, Premiere
            </p>
            <p className="py-2 font-bold">Business Tool</p>
            <p className="pl-1 text-sm">- Slack, Notion, Discord</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMeSkills;
