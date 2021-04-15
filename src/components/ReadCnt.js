import React, { Component } from 'react';

class ReadCnt extends Component {
    render() {
      return(
        <article>
              <h2>{this.props.title}</h2>
              {this.props.desc}
          </article>
      );
    }
}

export default ReadCnt;