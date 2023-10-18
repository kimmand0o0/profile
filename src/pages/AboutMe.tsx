import AboutMeEducation from 'components/AboutMeEducation';
import AboutMeIntroduction from 'components/AboutMeIntroduction';
import AboutMeSkills from 'components/AboutMeSkills';
import Introduce from 'components/Introduce';

const AboutMe = () => {
  return (
    <>
      <div className="w-full h-screen flex justify-center scrollbar-hide">
        <div className="max-w-screen-md py-10 px-9 flex flex-col">
          <Introduce />
          <AboutMeIntroduction />
          <AboutMeSkills />
          <AboutMeEducation />
        </div>
      </div>
    </>
  );
};

export default AboutMe;
