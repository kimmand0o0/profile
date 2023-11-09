import Buttons from './Buttons';
import Contact from './Contact';

const Footer = () => {
  return (
    <>
      <footer className="w-screen bg-white fixed inset-x-0 bottom-0 z-50 left-0 bg-transparent text-gray-700 body-font">
        <div className="max-w-screen-md p-2 container mx-auto flex flex-wrap flex-row justify-between items-center">
          <Contact />
          <Buttons />
        </div>
      </footer>
    </>
  );
};

export default Footer;
