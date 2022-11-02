import React, { Component } from 'react';
import moment from 'moment';
import 'moment-holiday'
class Restaurant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      now: moment(),
      open: "Is Sahara Open?",
      vacationStart: moment('2022 6 13', 'YYYY MM DD'),
      vacationEnd: moment('2022 9 1', 'YYYY MM DD'),
    }
  }

  componentDidMount() {
    this._isSaharaOpen();
  }

  _update_open_state = (state) => {
    this.setState({
      open: state
    })
  }

  _isSaharaOpen = () => {
    let openState = "No.";
    if (this._isTodaySunday()) {
      openState = "No.";
    } else if (this._isTodayWithinKnownVacation()) {
      openState = "Maybe.&lt;br /&gt;They might be closed for vacation.";
    } else {
      if (this._inWorkingHours()) {
        if (this._isTodayAHoliday()){
          openState = "Maybe.&lt;br /&gt;Today might be a holiday.";
          return;
        } else {
          openState = "Yes.";
        }
      } else {
        openState = "No.";
      }
    }
    this._update_open_state(openState);
    return;
  }

  _isTodaySunday = () => {
    return this.state.now.day() === 0
  }

  _inWorkingHours = () => {
    return this._inRange(this.state.now.hour(), 11, 19)
  }

  _isTodayAHoliday = () => {
    return this.state.now.isHoliday();
  }

  _isTodayWithinKnownVacation = () => {
    return this.state.now.isBetween(this.state.vacationStart, this.state.vacationEnd)
  }

  // from: https://stackoverflow.com/a/39758631/281699
  _htmlDecode = (input) => {
    var e = document.createElement('div');
    e.innerHTML = input;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  }

  // Possible replacement for lodash.inRange which could help avoid loading the entire lodash lib just for this range function
  // https://youmightnotneed.com/lodash#inRange
  _inRange = (num, rangeStart, rangeEnd = 0) => (rangeStart < num && num < rangeEnd) || (rangeEnd < num && num < rangeStart)


  render(){
    return (
      <div>
        <h1 id="output" dangerouslySetInnerHTML={ {__html: this._htmlDecode(this.state.open)} }></h1>
      </div>
    );
  }
}

export default Restaurant;
