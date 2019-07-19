import React from 'react';
import store from '../../store/store';
import './index.scss';

const Homepage: React.FC = () => {
  console.log(store);
  return (
    <div className="homepage">
      <header className="">
        Hello
      </header>
    </div>
  );
}

export default Homepage;
