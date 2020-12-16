import React from 'react';
import {Input, Button, Select} from 'antd';
import 'antd/dist/antd.css'
import './Demo1.scss';


const Search = Input.Search;
const Option = Select.Option;
class App extends React.Component{
  
  state = {
    val:'',
    list:[]
  }

  handleChange = (event)=>{
    let val = event.target.value;
    this.setState({
      val
    })
  }

  handleAdd = ()=>{
    let {val, list} = this.state;
    list.push(val);
    val = '';
    this.setState({
      list,
      val
    });
  }

  handleSearch = (value)=>{
    let {list,val} = this.state;
    list.push(value);
    val = '';
    this.setState({
      list,
      val
    })
  }

  render(){
    const {val, list} = this.state;
    const options = [];
    return <div>
      <p>Tan</p>
      <h1>Hello,world!</h1>
      <Input type="text" value={val} style={{width:300}} onChange={this.handleChange}></Input>
      <Button type="primary" onClick={this.handleAdd}>添加</Button>
      <ul>
        {
          list.map((item, index)=>{
            options.push(<Option key={index}>{item}</Option>);
            return <li key={index}>{item}</li>
          })
        }
      </ul>
      <div>
        <Search 
        style={{width:370}}
        enterButton="添加"
        onSearch={this.handleSearch}></Search>
        <br></br>
        <Select style={{width:150}}>
          {options}
        </Select>
      </div>
    </div>
  }

}

export default App;
