import React, { Component } from 'react';
import WelcomePage from './WelcomePage';

class SampleForm extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            isUserKnown: false,
            userName: ''
        }
    }
    
    
    componentDidMount(){
        console.log("Sample form is mounted");
    }
    
    handleSubmit = (event)=>{
        alert('Your name has been successfully submitted');
        event.preventDefault();
        this.setState({isUserKnown:true});
    }
    handleChange = (e)=>{
        this.setState({userName: e.target.value});
    }
    render() {
        return (
            this.state.isUserKnown ? <WelcomePage name={this.state.userName}/> :
            <div className='container app-container'>
                <form onSubmit={this.handleSubmit}>
                    <div className='row form-element'>
                        <label className='col-12 col-sm-12 col-md-1'>Name<span style={{color: 'red'}}>*</span></label>
                        <input className='col-12 col-md-4' type='text' required value={this.state.userName} onChange={this.handleChange}></input>
                    </div>
                    <div className='row form-element'>
                        <div className='col-md-1'/>
                        <button className='col-12 col-sm-12 col-md-2' type='submit'>Submit</button>
                    </div>
                </form>
                <div>
                    <span style={{color: 'red'}}>*</span> indicates that those fields are required
                </div>
            </div> 
        );
    }
}

export default SampleForm;
