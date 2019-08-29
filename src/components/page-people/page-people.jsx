import React from 'react';

import './page-people.css';

export default class PagePeople extends React.Component {

  render() {

    return (
      <div className="container page-people">
        <h4 className="people-title">All persons</h4>
        <ul className="item-list list-group">
          <li className="list-group-item">Name of person</li>
        </ul>
      </div>
    );
  }
}