import React from 'react';


// const Quote = props => {
//   return (
//     <div>
//       <h4>{props.text}</h4>
//       <p>{props.author}</p>
//     </div>
//   );
// };
// Quote.propTypes = {
//   text: React.PropTypes.string,
//   author: React.PropTypes.string
// }

// class WaitListItem extends React.Component {
//   render() {
//
//     return (
//       <div>
//         {sortable}
//       </div>
//     );
//   }
// }

class WaitListItem extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
      <div>
        <h4>{this.props.name}</h4>
        <p>{this.props.minutes}</p>
      </div>
    );
  }
}


export default WaitListItem;
