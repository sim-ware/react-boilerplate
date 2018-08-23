import React from 'react';
// import Line from 'rc-progress';
import ProgressionBar from './ProgressionBar';


class WaitListItem extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
    let minutes = this.props
    return (
      <div className="list-waitlistitem">
        <span className="list-namelabel">{this.props.name}</span>
        <span className="list-timelabel">{this.props.minutes}</span>
        { minutes ? <ProgressionBar {...this.props.minutes} /> : null}
        { console.log(this.props.minutes)}; }
      </div>
    );
  }
}


export default WaitListItem;
