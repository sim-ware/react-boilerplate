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

  render() {

    let dataUI = this.state.data;
    let timedataUI = this.state.timedata;
    var result = {};
    dataUI.forEach((dataUIpoint, i) => result[dataUIpoint] = timedataUI[i]);
    var sortable = [];
    for (var entry in result) {
        sortable.push([entry, result[entry]]);
    }

    sortable.sort(function(a, b) {
        return a[1] - b[1];
    });

    return (
      <div>
        {sortable.map(entry => <WaitListItem name={entry[0]} minutes={entry[1]} />)}
      </div>
    );
  }
}

export default WaitList;
