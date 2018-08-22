import React from 'react';
import * as firebase from 'firebase';
import 'firebase/firestore';
import WaitListItem from './WaitListItem';


class WaitList extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      timedata: []
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    const fstore = firebase.firestore();
    fstore.settings({
      timestampsInSnapshots: true
    });
    fstore.collection('waittimes').get().then(collection => {
      const data = collection.docs.map(doc => doc.data().name)
      this.setState({ data });
    });
    fstore.collection('waittimes').get().then(collection => {
      const newdata = collection.docs.map(doc => doc.data().minutes)
      this.setState({ timedata: newdata });
    });
  }

// TODO:// TODO:// TODO:
// TODO: https://medium.com/byte-sized-react/component-arrays-in-react-a46e775fae7b
// TODO: FOLLOWING THIS EXAMPLE, CREATE A WAITLIST COMPONENT THAT DOES THE SAME THING
// TODO: AS THE QUOTE COMPONENT FROM THE EXAMPLE. RENDER THEM CONTAINING THE NAMES
// TODO: AND WAITTIMES AS PROPS
// TODO:// TODO:// TODO:

  render() {

    let dataUI = this.state.data;
    let timedataUI = this.state.timedata;
    var result = {};
    dataUI.forEach((dataUIpoint, i) => result[dataUIpoint] = timedataUI[i]);
    // console.log(result);
    var sortable = [];
    for (var entry in result) {
        sortable.push([entry, result[entry]]);
    }

    sortable.sort(function(a, b) {
        return a[1] - b[1];
    });
    // console.log(sortable)
    // console.log(typeof result)
    // console.log(result)
    // var output = Object.entries(result).map(([key, value]) => ({key,value}));
    // console.log(output);
    // console.log(typeof output)
    const quoteArray = sortable.map((entry) => {
      return (
        <WaitListItem name={entry.name} minutes={entry.minutes} />
      );
    // console.log(quoteArray);
    });

    return (
      <div>
      {console.log(quoteArray)}
        {quoteArray}
        <WaitListItem name={'simon'} minutes={'21'} />
      </div>
    );
  }
}

export default WaitList;
