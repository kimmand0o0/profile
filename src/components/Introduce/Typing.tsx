import ReactTypingEffect from 'react-typing-effect';

const Typing = () => {
  return (
    <>
      <div className="min-w-[250px] font-[intelone-mono-font-family-regular] text-3xl text-gray-600">
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
              className="font-bold text-gray-900"
            />
            <p>를 좋아하는</p>
          </div>
          <div className="flex flex-row flex-wrap">
            <ReactTypingEffect
              text={['프론트엔드', '백엔드', '풀스택']}
              speed={100}
              typingDelay={100}
              eraseDelay={3000}
              className="font-bold text-gray-900"
            />
            <p className="pr-2">개발자 </p>
          </div>
          <div>
            <p>
              <span className="font-bold text-cyan-800">'김혜란'</span> 입니다.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Typing;
