import React from 'react';
import { firebase, database } from '../firebase/firebase';

class NameForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      waittime: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.convertWaitTimeToMinutes = this.convertWaitTimeToMinutes.bind(this);
    this.addWaitTime = this.addWaitTime.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  convertWaitTimeToMinutes(waittime) {
    const res = waittime.split(':');
    const ans = parseInt(res[0]*60) + parseInt(res[1]);
    return ans;
  }

  addWaitTime(e) {
    console.log('addWaitTime');
    console.log(this.state.name);
    const waitTimeMins = this.convertWaitTimeToMinutes(this.state.waittime);
    console.log(waitTimeMins);
    e.preventDefault();
    const itemsRef = firebase.database().ref('waittimes');
    const item = {
      name: this.state.name,
      minutes: waitTimeMins
    };
    itemsRef.push(item);
    this.setState({
      name: '',
      waittime: ''
    });
  }


  render() {
    return (
      <form className="form" onSubmit={this.addWaitTime} >

        <label>Name</label>
        <input type="text" name="name" onChange={this.handleChange} value={this.state.name} />

        <label>WaitTime:</label>
        <input type="time" name="waittime" onChange={this.handleChange} value={this.state.waittime} />

        <button type="submit">Save</button>

      </form>
    );
  }
}

export default NameForm;