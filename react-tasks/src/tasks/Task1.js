import React, { Component } from 'react'

class Task1 extends Component {
    state = {
        text: '',
        text1: 'Is this line are helpfull to you',
    }
    handleOnClick = () => {
        if (this.state.text1) {
            this.setState({ text: 'thanks for your feedback!', text1: '' })
        }
    }
    // handleOnSubmit = (e) => {
    //     e.preventDefault();
    // }
    handleOnClick2 = () => {
        if (this.state.text1) {
            this.setState({
                text: (
                    <div>
                        <textarea placeholder='Enter your comments'>
                        </textarea><br></br>
                        <button
                            className='btn btn-sm btn-success'>
                            Submit
                        </button>
                    </div>
                ), text1: ''
            })
        }
    }
    render() {
        return (
            <div className='container mt-3'>
                <div className='row'>
                    <div className='col-lg-6 , m-auto'>
                        <h1>{this.state.text1}{this.state.text}</h1>
                        <button
                            className='btn btn-sm btn-outline-secondary ml-2'
                            onClick={this.handleOnClick}>
                            yes
                        </button>
                        <button
                            className='btn btn-sm btn-outline-secondary ml-2'
                            onClick={this.handleOnClick2}>
                            no
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Task1
