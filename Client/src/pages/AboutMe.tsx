import { useEffect, useRef, useState } from 'react';

import AboutMeEducation from 'components/AboutMeEducation';
import AboutMeIntroduction from 'components/AboutMeIntroduction';
import AboutMeNav from 'components/AboutMeNav';
import AboutMeSkills from 'components/AboutMeSkills';
import Introduce from 'components/Introduce';

const AboutMe = () => {
  const scrollRef = useRef<any>([]);

  const [aboutMeState, setAboutMeState] = useState(0);

  useEffect(() => {
    scrollRef.current[aboutMeState].scrollIntoView({ behavior: 'smooth' });
  }, [aboutMeState]);

  return (
    <>
      <div className="w-full h-screen flex justify-center scrollbar-hide">
        <div className="max-w-screen-md py-10 px-9 flex flex-col">
          <div ref={(el) => (scrollRef.current[0] = el)}>
            <Introduce />
            <AboutMeIntroduction />
          </div>
          <div ref={(el) => (scrollRef.current[2] = el)}>
            <AboutMeSkills />
          </div>
          <div ref={(el) => (scrollRef.current[3] = el)}>
            <AboutMeEducation />
          </div>
          <AboutMeNav setAboutMeState={setAboutMeState} />
        </div>
      </div>
    </>
  );
};

export default AboutMe;
