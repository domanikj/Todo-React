import React, {Component} from 'react'
import land from './landing.css'
import withClass from '../../HOC/withClass'
import NavBar from '../navbar/NavBar'
import Form from '../form/Form'

    class landing extends Component  {
        constructor(props) {
            super(props)
        
            this.state = {
               todoArr: []
            }
            this.delFunc = this.delFunc.bind(this)
        }

        recItemList = (childData) => {
            if(!!childData) {

            
           this.setState({
               todoArr: [...this.state.todoArr, childData]
           })
        }
           console.log(childData )
          
        } 
    
        delFunc(index) { 
            let newArr = [...this.state.todoArr]
            newArr.splice(index, 1)
            this.setState({
                todoArr: [...newArr]
            })
        }
  
        render(){
            return(
                    <div> 
                        <NavBar />
                        <div className="form-input">   
                            <Form parentCallback={this.recItemList} />
                        </div>
                        {this.state.todoArr.map((item,index) => {
                         return   <div className="listItem" key={index}  >
                                     {item}  <button className="delbtn" onClick={() => this.delFunc(index)}> x</button>
                                   </div>
                        })}
                    </div>
            )}
}

export default withClass(landing, land);