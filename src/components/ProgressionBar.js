import React from 'react';
import { ProgressBar } from 'react-progress-ui';


const startTime = new Date()
var waitingTime = '';
var ans = '';

class ProgressionBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { waitingTime: '' };
  }

  componentWillMount(){
    setInterval(function(){
        var resultArray = [];
        for (var key in this.props) resultArray = resultArray.concat(this.props[key]);
        waitingTime = resultArray.join().replace(/,/g, '');
        var timeNow = new Date();
        var numerator = timeNow - startTime;
        waitingTime = waitingTime * 60000;
        var ans = numerator / waitingTime;
    }.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <ProgressBar percentageDone={ans} />
      </div>
    );
  }
}


export default ProgressionBar;
