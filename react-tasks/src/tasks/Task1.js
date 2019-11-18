import React, { Component } from 'react'

class Task1 extends Component {
    state = {
        text: '',
        text1: '',

    }
    handleOnClick = () => {
        this.setState({ text: 'yes' })
    }
    handleOnClick1 = () => {
        this.setState({ text1: 'no' })
    }
    render() {
        return (
            <div className='container mt-5'>
                <h1 className='text-center text-info'>Demo Task Of FeedBack</h1>
                <div className='row'>
                    <div className='col-lg-5 border text-center shadow m-auto p-3'>
                        {this.state.text ? (
                            <div>
                                <h4 className='text-warning'>Thanks for your feedback...!</h4>
                            </div>
                        ) : this.state.text1 ? (<div>
                            <form onSubmit={this.handleOnClick}>
                                <h3 className='p-0 text-info'>Sorry For That...!</h3>
                                <h3 className='p-0 text-success'>Please Enter Your Comments</h3>
                                <textarea
                                    className='form-control text-info'
                                    placeholder='Enter your comments'></textarea><br></br>
                                <button
                                    className='btn btn-sm btn-info'>submit</button>
                            </form>
                        </div>) : (<div>
                            <b className='text-info'>Was This Helpful..?</b>&nbsp;
                                    <button
                                className='mr-2 btn btn-sm btn-success'
                                onClick={this.handleOnClick}>yes</button>
                            <button
                                className='btn btn-sm btn-danger'
                                onClick={this.handleOnClick1}>no</button>
                        </div>)}

                    </div>
                </div>
            </div>
        )
    }
}

export default Task1
