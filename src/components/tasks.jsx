import React from 'react';

export default class Tasks extends React.Component {

  state = {
    mass: [5, 2, 3, 16, 230, 1],
    isSort: false
  }

  sortMass =() => {
    let newMass = [...this.state.mass];

    if(this.state.isSort === false) {
      newMass.sort(function (a, b) {
        return a - b;
      })
      this.setState({mass: newMass, isSort: true});
    } else {
      newMass.reverse();
      this.setState({mass: newMass});
    }    
  }



  UNSAFE_componentWillMount() {
    console.log('componentWillMount');
  }

  render() {
    console.log('render');
    const { mass } = this.state;

    const viewArr = mass.map((value, index) => {
      return (
        <li key={value}>{`${value}, index= ${index}`}</li>
      );
    })

    return (
      <div className="container card-body">
        <h4>Wellcome to Page of Tasks</h4>
        <div>
          <ul>
            { viewArr }
          </ul>
        </div>
        <button type="button" onClick={ this.sortMass }>Sort</button>
      </div>
    );
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  UNSAFE_componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  UNSAFE_componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
}