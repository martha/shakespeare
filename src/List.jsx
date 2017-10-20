import React, { Component } from 'react';

class List extends Component {
  renderList() {
    const items = this.props.items.map(item => {
      return <li className="play" key={item.name}>
        {item.imgUrl && <img src={item.imgUrl} alt={item.name} />}
        <div className="playInfo">
          <p className="playName">{item.name}</p>
          <p className="playType">{item.type}</p>
          <p className="playDate">{item.publicationDate}</p>
        </div>
      </li>
    });

    return items;
  }

  render() {
    return(
      <ul>
        {this.renderList()}
      </ul>
    )
  }
}

export default List;