import { RecoilRoot } from 'recoil';
import { Routes, Route } from 'react-router-dom';

import AudioPlayer from 'components/AudioPlayer';
import Footer from 'components/Footer';
import Header from 'components/Header';

import Main from 'pages/Main';
import AboutMe from 'pages/AboutMe';
import Portfolio from 'pages/Portfolio';
import Posts from 'pages/Posts';
import Auth from 'pages/Auth';

function App() {
  return (
    <RecoilRoot>
      <Header />
      <AudioPlayer />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/auth/tstory" element={<Auth />} />
      </Routes>
      <Footer />
    </RecoilRoot>
  );
}

export default App;
