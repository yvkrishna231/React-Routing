import React from 'react';

class Login extends React.Component {
    state = {
        input: '',
        password: '',
        error: false,
    }
    handleOnSubmit = (e) => {
        e.preventDefault();
        if (this.state.input && this.state.password) {
            this.props.history.push('/home')
        } else {
            this.setState({ error: true })
        }
    }
    handleOnChange = (e) => {
        this.setState({ input: e.target.value })
    }
    handleOnChange1 = (e) => {
        this.setState({ password: e.target.value })
    }
    render() {
        return (
            <div>
                <div className='container' style={{ marginTop: '5em' }}>
                    <div className='row'>
                        <div
                            className='col-lg-5 col-sm-12 col-12 m-auto border shadow text-center p-0'
                        >
                            <div style={{ backgroundColor: 'ghostwhite' }}>
                                <h3 className=' text-success text-center mt-4'>Please Enter Login Credentials</h3>
                                <form
                                    onSubmit={this.handleOnSubmit}
                                    className='text-center mt-3'
                                >
                                    <div className='ml-1'>
                                        <strong className='text-info'>Email :  </strong>
                                        <input
                                            value={this.state.input}
                                            onChange={this.handleOnChange}
                                            type='email' />
                                        <br></br>
                                    </div>
                                    <div className=''>
                                        <strong className='text-info'>Password :  </strong>
                                        <input
                                            value={this.state.password}
                                            onChange={this.handleOnChange1}
                                            className='mt-2 mr-4'
                                            type='password' />
                                    </div>
                                    {this.state.error && <p className='text-danger ml-5'>Please Fill The Details</p>}
                                    <button
                                        onClick={this.handleOnClick3}
                                        className='btn btn-sm btn-success mt-3 ml-5 mb-3'
                                    >Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
export default Login;