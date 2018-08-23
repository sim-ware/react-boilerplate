import React from 'react';
import { ProgressBar } from 'react-progress-ui';


class ProgressionBar extends React.Component {
  constructor(props) {
      super(props);
  }



  render() {
    var resultArray = [];
    for (var key in this.props) resultArray = resultArray.concat(this.props[key]);
    return (
      <div>
        {console.log(resultArray.join().replace(/,/g, ''))}
        <ProgressBar percentageDone={this.props.minutes} />
      </div>
    );
  }
}


export default ProgressionBar;
