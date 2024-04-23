import React from 'react';
import Button from '../../components/Button';

function MainPage(props) {
  return (
    <div>
      MainPage
      <Button textOnly={true} className='home' data='test' ha='ha'>
        클릭
      </Button>
    </div>
  );
}

export default MainPage;
