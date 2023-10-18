import CopyToClipboard from 'react-copy-to-clipboard';

import copyIcon from '../../assets/icons/copy.png';

const Contact = () => {
  return (
    <>
      <div>
        <CopyToClipboard
          text="01072670130"
          onCopy={() => alert('제 전화번호가 클립보드에 복사되었습니다!')}
        >
          <button className="flex flex-row justify-center items-center">
            <img src={copyIcon} alt="copy" className="w-3 h-3 mr-2" />
            <span className="text-xs tracking-widest">010-7267-0130</span>
          </button>
        </CopyToClipboard>
        <CopyToClipboard
          text="yuwang0130@gmail.com"
          onCopy={() => alert('제 메일주소가 클립보드에 복사되었습니다!')}
        >
          <button className="flex flex-row justify-center items-center">
            <img src={copyIcon} alt="copy" className="w-3 h-3 mr-2" />
            <span className="text-xs tracking-widest">
              yuwang0130@gmail.com
            </span>
          </button>
        </CopyToClipboard>
      </div>
    </>
  );
};

export default Contact;
