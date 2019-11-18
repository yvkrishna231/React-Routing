import React, { Component, Fragment } from 'react'

class Task2 extends Component {
    state = {
        text: 'Is This Line Is Help Full To You',
        error: false,
        visible: false,
    }
    handleOnclick = () => {
        if (this.state.text) {
            this.setState({ error: true, text: '' })
        }
    }
    handleOnclick1 = () => {
        if (this.state.text) {
            this.setState({ visible: true, text: '' })
        }
    }
    handleOnSubmit = (e) => {
        e.preventDefault();
        if (this.state.visible) {
            this.setState({ error: true, visible: false })
        }
    }
    render() {
        return (
            <Fragment>
                <div className='container mt-5'>
                    <h1
                        className='text-center text-info'
                        style={{ textShadow: '2px 2px black' }}>
                        Feedback Sector</h1>
                    <div className='row'>
                        <div className='col-lg-5 bg-white shadow m-auto'>
                            <span>
                                {this.state.text && <div className='mb-3' style={{ marginLeft: '5em' }}>
                                    <b>Was This HelpFull..?</b>&nbsp;
                                    <button
                                        onClick={this.handleOnclick}
                                        className='btn btn-sm btn-success mr-2'>
                                        Yes
                                </button>
                                    <button
                                        onClick={this.handleOnclick1}
                                        className='btn btn-sm btn-danger'>
                                        No
                                </button>
                                </div>}
                            </span>
                            {this.state.error &&
                                <h3 className='text-center'>
                                    Thanks For Your FeedBack
                                </h3>}
                            {this.state.visible &&
                                <div>
                                    <form
                                        className='text-center'
                                        onSubmit={this.handleOnSubmit}>
                                        <h3>Please Enter Your Comments</h3>
                                        <textarea
                                            className='form-control'
                                            placeholder='Type Your Comments'>
                                        </textarea>
                                        <button
                                            className='btn btn-sm btn-success m-4'>
                                            Submit
                                        </button>
                                    </form>
                                </div>
                            }

                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default Task2;