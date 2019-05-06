import React from 'react';

import PropTypes from 'prop-types'

const Tab = props => {
  var classNameVar = ''
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

Tab.propTypes = {
  selectTabHandler: PropTypes.func.isRequired,
  selectedTab: PropTypes.string.isRequired,
  tab: PropTypes.string.isRequired,
}

export default Tab;
