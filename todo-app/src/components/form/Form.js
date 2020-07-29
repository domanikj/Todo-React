import React, { Component } from 'react'
import '../form/Form.css'
  class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            itemData: ''
        }

        this.addItemHandler = this.addItemHandler.bind(this);
        this.handleSubmitHandler = this.handleSubmitHandler.bind(this);
    }
    
    handleSubmitHandler(event) {
        this.props.parentCallback(this.state.itemData);
        event.preventDefault();  
        this.setState({
            itemData: ""
        })
    }
        
    addItemHandler = (event) => { 
      this.setState({
             itemData: event.target.value
         })
   }
   
    render() {
        return (
           <form onSubmit={this.handleSubmitHandler}>
             <input type="text" className="in" value={this.state.itemData} onChange={this.addItemHandler} />
             <button className="buttons" >Add Item </button>
           </form>
        )
    }
  }
export default Form;