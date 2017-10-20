import React, { Component } from 'react';
import './App.css';
import FilteredList from './FilteredList';

const shakespearePlays = [
  {
    name: "As You Like It",
    type: "Comedy",
    publicationDate: 1599,
    imgUrl: "https://prodimage.images-bn.com/pimages/9780743484862_p0_v1_s.jpg"
  },
  {
    name: "A Midsummer Night's Dream",
    type: "Comedy",
    publicationDate: 1595,
    imgUrl: "https://images-na.ssl-images-amazon.com/images/I/81gUATpJBjL.__BG0,0,0,0_FMpng_AC_UL320_SR196,320_.jpg"
  },
  {
    name: "Much Ado About Nothing",
    type: "Comedy",
    publicationDate: 1598,
    imgUrl: "http://www.folger.edu/sites/default/files/styles/201x289_work/public/work-images/Much%20Ado%20About%20Nothing.jpg?itok=VBctWe1x"
  },
  {
    name: "The Tempest",
    type: "Comedy",
    publicationDate: 1611,
    imgUrl: "https://images-na.ssl-images-amazon.com/images/I/51OzBdcsZDL._SY344_BO1,204,203,200_.jpg"
  },
  {
    name: "Twelfth Night, or What You Will",
    type: "Comedy",
    publicationDate: 1599,
    imgUrl: "http://www.folger.edu/sites/default/files/styles/201x289_work/public/twelfth%20night.jpg?itok=ZY3euVum"
  },
  {
    name: "Henry IV, Part I",
    type: "History",
    publicationDate: 1597,
    imgUrl: "http://www.folger.edu/sites/default/files/styles/201x289_work/public/Henry%20IV%20Part%202.jpg?itok=p981W1SY"
  },
  {
    name: "King John",
    type: "History",
    publicationDate: 1596,
    imgUrl: "http://www.folger.edu/sites/default/files/styles/201x289_work/public/work-images/King%20John.jpg?itok=zyE4muQS"
  },
  {
    name: "Hamlet, Prince of Denmark",
    type: "Tragedy",
    publicationDate: 1600,
    imgUrl: "https://images-na.ssl-images-amazon.com/images/I/51yChJoybWL._SY344_BO1,204,203,200_.jpg"
  },
  {
    name: "Julius Caesar",
    type: "Tragedy",
    publicationDate: 1599,
    imgUrl: "http://www.folger.edu/sites/default/files/styles/201x289_work/public/Julius%20Caesar.jpg?itok=yJmCrZl8"
  },
  {
    name: "Macbeth",
    type: "Tragedy",
    publicationDate: 1605,
    imgUrl: "http://www.folger.edu/sites/default/files/styles/201x289_work/public/work-images/Macbeth-new.jpg?itok=C0ZOmvZq"
  },
  {
    name: "Romeo and Juliet",
    type: "Tragedy",
    publicationDate: 1594,
    imgUrl: "http://www.folger.edu/sites/default/files/styles/201x289_work/public/work-images/Romeo%20%26%20Juliet.jpg?itok=vKrhDK9P"
  },
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <FilteredList items={shakespearePlays}/>
      </div>
    );
  }
}

export default App;
