import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';

import { tabData, cardData } from '../../data';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    this.setState({
      tabs: tabData,
      cards: cardData,
    })
  };

  changeSelected = tab => {
    this.setState({
      selected: tab
    })
  };

  filterCards = () => {
    const filteredCards = this.state.cards.filter(card => {
      if (this.state.selected === 'all') {
        return card;
      } else if (this.state.selected === card.tab) {
        return card;
      } else {
        return null
      }
    })
    return filteredCards
  };

  render() {
    return (
      <div className="content-container">
        <Tabs selectedTab={this.state.selected} selectTabHandler={this.changeSelected} tabs={this.state.tabs} />
        <Cards cards={this.filterCards()} />
      </div>
    );
  }
}
