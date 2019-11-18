import React from 'react';
import ImageLeaf from './ImageLeaf.jpg'

class Register extends React.Component {
    state = {
        userName: '',
        email: '',
        password: '',
        error: false
    }
    handleOnClick4 = () => {
        this.props.history.push('/data')
    }
    handleOnSubmit = (e) => {
        e.preventDefault();
        if (this.state.userName && this.state.email && this.state.password) {
            this.props.history.push('/login')
        } else {
            this.setState({ error: true })
        }
    }
    handleOnChange1 = (e) => {
        this.setState({ userName: e.target.value })
    }
    handleOnChange2 = (e) => {
        this.setState({ email: e.target.value })
    }
    handleOnChange3 = (e) => {
        this.setState({ password: e.target.value })
    }
    render() {
        return (
            <div>
                <div className='container'>
                    <h1 className='text-success text-center m-0'>Hello venkata krishna</h1>
                    <div className='row'>
                        <div className='col-lg-7 col-md-12 col-sm-12 col-10 border shadow p-0 m-auto'>
                            <img src={ImageLeaf} />
                            <form className='float-right mt-4'
                                style={{ marginRight: '6em' }}
                            >
                                <div className='mb-4'>
                                    <b>UserName :</b>
                                    <input
                                        onChange={this.handleOnChange1}
                                        value={this.state.userName}
                                        type='text' />
                                </div>
                                <div className='ml-3'>
                                    <b>Email :</b>
                                    <input
                                        onChange={this.handleOnChange2}
                                        value={this.state.email}
                                        type='text' />
                                </div><br></br>
                                <div className='ml-2'>
                                    <b>Password :</b>
                                    <input
                                        onChange={this.handleOnChange3}
                                        value={this.state.password}
                                        type='text' />
                                </div>
                                <button
                                    onClick={this.handleOnSubmit}
                                    className='btn btn-sm btn-outline-success'
                                    style={{ marginLeft: '9em', marginTop: '10px' }}>submit</button><br></br>
                                {this.state.error && <b className='text-danger' style={{ marginLeft: '5em' }}>Please fill the details</b>}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Register;