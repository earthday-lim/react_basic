import React, { Component } from 'react';
import Subject from './components/Subject';
import Navi from './components/Navi';
import ReadCnt from './components/ReadCnt';
import CreateCnt from './components/CreateCnt';
import Control from './components/Control';
import './App.css';

/*function App() { //함수형
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

class App extends Component { //클래스형
  constructor(props) {
    super(props);
    this.max_content_id =  3;
    this.state = {
      mode : 'create',
      subject : {title : 'WEB', sub : 'world wide web!'},
      welcome : {title : 'Welcome', desc : 'Hello, React!'},
      selected_content_id : 2,
      contents : [
        {id:1, title: 'HTML', desc: 'HTML is for information'},
        {id:2, title: 'CSS', desc: 'HTML is for design'},
        {id:3, title: 'JS', desc: 'HTML is for interactive'} 
      ]
    }
  }
  render() {
    var _title, _desc, _article = null;
    if(this.state.mode === 'welcome'){
      _title =  this.state.welcome.title;
      _desc =  this.state.welcome.desc;
      _article= <ReadCnt  title={_title} desc={_desc}></ReadCnt>;
    }else if(this.state.mode === 'read') {
      var i = 0;
      while(i < this.state.contents.length){
        var data = this.state.contents[i]; //data = 현재 순번에 해당되는 content
        if(data.id === this.state.selected_content_id) {
          _title = this.state.contents[i].title;
          _desc = this.state.contents[i].desc;
          break;
        }
        i = i + 1;
      }
      _article= <ReadCnt  title={_title} desc={_desc}></ReadCnt>;
    }else if(this.state.mode === 'create'){
      _article= <CreateCnt onSubmit={(_title, _desc)=>{
        //add content to this.state.contents
        this.max_content_id = this.max_content_id+1;
        //state data를 추가할 땐 push말고 concat : 기존꺼가 새롭게 만들어진 데이터로 교체, 원본바꾸지 않고 복제본을 만듦 / push를 쓰고 싶으면 Array.from(복제하고 싶은 배열)을 써서 복제를 하고 변수에 저장한 다음 거기에 push를 한 후 해당 변수를 쓰면 된다. / 객체를 복제할 땐 Object.assign({첫번째 값은 빈 객체}, 복제하고 싶은 객체)
        var _contents = this.state.contents.concat({id: this.max_content_id, title: _title, desc: _desc});
        this.setState({
          contents: _contents
        });
        console.log(_title, _desc);
      }}></CreateCnt>;
    }
    return (
    <div className="App">
       <Subject 
       title={this.state.subject.title} 
       sub={this.state.subject.sub}
       onChangePage={()=>{
         this.setState({mode: 'welcome'})
       }/* .bind(this) */}
       ></Subject>
       {/* <header> { 하나의 최상위 태그로 시작해야함 }
            <h1><a href="/" onClick={(e) => {
              console.log(e);
              e.preventDefault(); //기본적인 동작을 막는 애(a의 기본적인 동작인 클릭시 reload 막고 싶음)
              // debugger;
              // this.state.mode = 'welcome';
              this.setState({
                mode : 'welcome',
              });
            } .bind(this) 왜 못쓰지? 함수 안에서는 this가 컴포넌트를 가리키지 못함 }>{this.state.subject.title}</a></h1>
            {this.state.subject.sub}
        </header> */}
       <Navi onChangePage={(id)=>{
         this.setState({
           mode:'read',
           selected_content_id : Number(id)
        });
       }} data={this.state.contents}></Navi>
       <Control onChangeMode={(_mode)=>{
         this.setState({
          mode: _mode
         });
       }}></Control>
       {_article}
    </div>
    );
  }
}

export default App; 

