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
                    <h3
                        className='text-success text-center'
                        style={{ textShadow: '2px 2px #ff0000' }}
                    >USER REGISTRATION FORM</h3>
                    <div className='row border shadow text-center'
                    >
                        <div className='col-lg-5 col-sm-6 col-12 p-0'>
                            <img src={ImageLeaf} alt='leaf image' width='100%' height='100%' />
                        </div>
                        <div className='col-lg-5 col-sm-6 col-12'
                            style={{ marginTop: '5em' }}
                        >
                            <form
                                onSubmit={this.handleOnSubmit}
                                className=''>
                                <h3 className='text-success'>Create A New Account</h3>
                                <div className='mb-2'>
                                    <em className='text-info'>UserName :</em>
                                    <input
                                        value={this.state.userName}
                                        onChange={this.handleOnChange1}
                                        type='text'
                                        className='text-primary' /><br></br>
                                </div>
                                <div className='mb-2'>
                                    <em className='text-info'>Email :</em>
                                    <input
                                        value={this.state.email}
                                        onChange={this.handleOnChange2}
                                        type='email'
                                        className='text-primary' /><br></br>
                                </div>
                                <div className='ml-3'>
                                    <em className='text-info'>Password :</em>
                                    <input
                                        value={this.state.password}
                                        onChange={this.handleOnChange3}
                                        type='password'
                                        className='text-primary' /><br></br>
                                    <button className='btn btn-sm btn-info mt-3'
                                        style={{ marginLeft: '4em' }}
                                    >submit</button>
                                </div>
                                {this.state.error && <p
                                    className='text-danger ml-5 mt-3'>
                                    Please fill the details correctly
                                </p>}
                            </form>
                        </div>
                    </div>
                    <div>
                        <button
                            className='btn btn-sm btn-success mt-3 float-left'
                            onClick={this.handleOnClick4}
                        >Previous Page</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Register;