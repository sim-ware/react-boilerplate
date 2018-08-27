import React from 'react';
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
      </div>
    );
  }
}


export default WaitListItem;
