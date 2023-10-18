import githubIcon from '../../assets/icons/github.svg';
import gmailIcon from '../../assets/icons/gmail.svg';

const Buttons = () => {
  return (
    <>
      <section>
        <button className="m-2 p-1 border-2 rounded-full">
          <a
            href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=yuwang0130@gmail.com"
            target="_blank"
          >
            <img src={gmailIcon} alt="github" className="w-6 h-6 fill-white" />
          </a>
        </button>
        <button className="p-1 border-2 rounded-full">
          <a href="https://github.com/kimmand0o0" target="_blank">
            <img src={githubIcon} alt="github" className="w-6 h-6 fill-white" />
          </a>
        </button>
      </section>
    </>
  );
};

export default Buttons;
