import React, { Component } from 'react';

class Subject extends Component {
    render() {
      return(
        <header> {/* 하나의 최상위 태그로 시작해야함 */}
              <h1><a href="/" onClick={(e) => {
                e.preventDefault();
                this.props.onChangePage();
              }/* .bind(this) */}>{this.props.title}</a></h1>
              {this.props.sub}
          </header>
      );
    }
}

export default Subject;
