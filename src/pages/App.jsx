import React, { useState } from 'react';
import './App.css';

import Button from '../components/Button';
import Checkbox from '../components/Checkbox';

function App() {
//  pages state for checkbox {page1,page2,page3,page4}
  const pages = Array.from({ length: 4 }, (_, index) => `page${index + 1}`);  

  // state for checkbox {allPages:false,page1:false,page2:false,page3:false,page4:false}
  const [checkedItems, setCheckedItems] = useState({ allPages: false, ...pages.reduce((acc, page) => ({ ...acc, [page]: false }), {}) });

  const handleChange = (e) => {

    const { id, checked } = e.target;
    console.log("pages checked:",id)

    // set state of all pages when allPages is checked
    if (id === 'allPages') {
      const newCheckedItems = { allPages: checked };
      pages.forEach(page => {
        newCheckedItems[page] = checked;
      });
      setCheckedItems(newCheckedItems);
    } else {
      // set state of individual pages
      setCheckedItems(prevState => {
        const newState = {
          ...prevState,
          [id]: checked,
        };
        newState.allPages = pages.every(page => newState[page]);
        return newState;
      });
    }
  };

  const handleButtonClick = () =>{
    console.log("form submited:",checkedItems)
  }
  return (
    <div className='App'>
      {/* parent container  */}

      <div className='parent-container'>

        {/* main container with max-width 80rem */}
        <div className='main-contianer'>

          {/* header flex containing All Pages check  */}
          <div className='header-flex'>
            <Checkbox label="All Pages" id="allPages" value="allPages" checked={checkedItems.allPages} onChange={handleChange} />
          </div>

          {/* underline for header flex  */}
          <div className='line-flex'>
            <div className='line'></div>
          </div>

          {/* list of pages check  */}
          <div className='checkbox-form'>
            {pages.map((page, index) => (
              <Checkbox key={page} label={`Page ${index + 1}`} id={page} value={page} checked={checkedItems[page]} onChange={handleChange} />
            ))}
          </div>

          {/* underline for checkbox form  */}
          <div className='line-flex'>
            <div className='line'></div>
          </div>

          {/* Button container  */}
          <div className='button-flex'>
            <Button onClick={handleButtonClick} label="Done" />
          </div>

        </div>

      </div>

    </div>
  );
}

export default App;
