import React from 'react';


const Tab = props => {
  var classNameVar = ''
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  if ( props.selectedTab === props.tab ) {
    classNameVar = 'tab active-tab';
  } else {
    classNameVar = 'tab';
  }

  var tabVar = props.tab

  return (
    <div
      className={classNameVar}
      onClick={() => {
         props.selectTabHandler(tabVar)
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.

export default Tab;
