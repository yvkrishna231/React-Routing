import React, { Component } from 'react'

class Task3 extends Component {
    state = {
        agree: null,
    }
    handleOnClick = () => {
        this.setState({ agree: 'yes' })
    }
    handleOnClick1 = () => {
        this.setState({ agree: 'no' })
    }
    render() {
        let displayText = (
            <div>
                <b>Was This HelpFull..?</b>&nbsp;
                <button onClick={this.handleOnClick} className='mr-1'>Yes</button>
                <button onClick={this.handleOnClick1}>No</button>
            </div>
        )
        if (this.state.agree === 'yes') {
            displayText = <div>Thanks For Your FeedBack</div>
        } else if (this.state.agree === 'no') {
            {
                displayText = <div>
                    <p>please enter your comments</p>
                    <form onSubmit={this.handleOnClick}>
                        <textarea className='form-control'></textarea>
                        <button>submit</button>
                    </form>
                </div>
            }

        }
        return (
            <div className='container mt-5'>
                <div className='col-lg-5 m-auto border shadow p-3 text-center'>
                    {displayText}
                </div>
            </div>
        )
    }
}

export default Task3
