import React from 'react';
import Header1 from './Components/Header1';
import Footer from './Components/Footer';
import './Components/Footer.css';
import './Components/Header.css';

const App = () => {
  return (
    <div>
      <Header1 />
      <h1 style={{ textAlign: 'center', margin: '20px 0' }}>My Project</h1>
      <Footer />
    </div>
  );
};

export default App;
