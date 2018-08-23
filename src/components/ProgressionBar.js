import React from 'react';
import { ProgressBar } from 'react-progress-ui';
import moment from 'moment';


class ProgressionBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { starttime: 0, elapsed: 0 };
    };
  //   this.componentDidMount = this.componentDidMount.bind(this);
  // }

  tick() {
    this.setState(prevState => ({
      elapsed: prevState.elapsed + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 60000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    var resultArray = [];
    for (var key in this.props) resultArray = resultArray.concat(this.props[key]);
    var minutes = resultArray.join().replace(/,/g, '');
    var timeNow = moment();
    var timeAfterWait = moment(timeNow).add(minutes, 'minutes');
    console.log(timeNow);
    console.log(minutes);
    console.log(timeAfterWait);
    return (
      <div>
        <ProgressBar percentageDone={minutes} />
      </div>
    );
  }
}


export default ProgressionBar;
