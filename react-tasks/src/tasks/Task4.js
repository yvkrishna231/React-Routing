import React, { Component } from 'react'

class Task4 extends Component {
    state = {
        text: '',
        text1: ''
    }
    handleOnClick = () => {
        this.setState({ text: 'yes' })
    }
    handleOnClick1 = () => {
        this.setState({ text1: 'no' })
    }
    render() {
        return (
            <div className='text-center col-lg-5 m-auto'>
                {this.state.text ? (
                    <div>
                        <h1>Thanks For Your FeedBack...!</h1>
                    </div>
                ) : this.state.text1 ? (
                    <form onSubmit={this.handleOnClick}>
                        <h3>Sorry About That..!</h3>
                        <h4>Please Enter Your Comments</h4>
                        <textarea className='form-control'></textarea><br></br>
                        <button>submit</button>
                    </form>
                ) : (
                            <div>
                                <h1>Was This HelpFull To You...?</h1>
                                <button
                                    className='btn btn-sm btn-success mr-1'
                                    onClick={this.handleOnClick}
                                >yes</button>
                                <button
                                    className='btn btn-sm btn-danger'
                                    onClick={this.handleOnClick1}
                                >No</button>
                            </div>
                        )}

            </div>
        )
    }
}

export default Task4;