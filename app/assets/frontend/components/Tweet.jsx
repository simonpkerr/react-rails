import React from 'react';
export default class Tweet extends React.Component {
  render () {
    return (
      <li className="collection-item avatar">
        <img className="material-icons circle" src={this.props.gravatar} />
        <span className="title">{this.props.name}</span>
        <p>{this.props.formattedDate}</p>
        <p>{this.props.body}</p>

      </li>
    );
  };
}
