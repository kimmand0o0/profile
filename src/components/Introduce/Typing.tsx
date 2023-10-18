import ReactTypingEffect from 'react-typing-effect';

const Typing = () => {
  return (
    <>
      <div className="min-w-[250px] font-[intelone-mono-font-family-regular] text-3xl">
        <div>
          <div>
            <p>안녕하세요!</p>
          </div>
          <div className="flex flex-row flex-wrap">
            <ReactTypingEffect
              text={['Javascript', 'Typescript', 'Node', 'React']}
              speed={100}
              typingDelay={100}
              eraseDelay={3000}
            />
            <p>를 좋아하는</p>
          </div>
          <div className="flex flex-row flex-wrap">
            <p className="pr-2">개발자 </p>
            <ReactTypingEffect
              text={['김혜란', '김만두']}
              speed={100}
              typingDelay={100}
              eraseDelay={3000}
            />
            <p> 입니다.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Typing;
