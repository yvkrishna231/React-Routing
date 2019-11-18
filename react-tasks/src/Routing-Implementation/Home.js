import React from 'react';
import Image1 from './Image1.jpg';
import Image from './Image.png'

class Home extends React.Component {
    handleOnClick = () => {
        this.props.history.push('/about')
    }
    handleOnClick1 = () => {
        this.props.history.push('/about')
    }
    handleOnClick2 = () => {
        this.props.history.push('/data')
    }
    handleOnClick3 = () => {
        this.props.history.push('/tododata')
    }
    handleOnClick4 = () => {
        this.props.history.push('/register')
    }
    handleOnClick5 = () => {
        this.props.history.push('/login')
    }
    render() {
        return (
            <div>
                <div className='container'>
                    <h3 className='text-center text-info'>About Home Page</h3>
                    <div className='row'>
                        <div
                            className='col-lg-4 col-sm-4 col-10 m-auto text-center'
                            style={{ boxShadow: '2px 2px grey', backgroundColor: 'lightGrey', borderRadius: '50px' }}
                        >
                            <h1 className='text-dark'>hello world</h1>
                            <p className='text-info'>This is my  routing and i implemented it
                                and the concept of the home is to combinining the components
                            </p>
                        </div>
                    </div>
                </div>
                <div className='container mt-3'>
                    <div className='row ml-5'>
                        <div className='col-lg-4 col-sm-6 col-10 text-center'
                            style={{ boxShadow: '2px 2px grey', backgroundColor: 'lightGrey', borderRadius: '50px' }}
                        >
                            <div className='mt-3'>
                                <h3 className='text-dark'>Main Thing To Inform</h3>
                                <img src={Image1} height='30%' width='40%' alt='image of time'></img>
                                <p className='text-info'> note that the main thing to remember is
                                    the precious of time to be involved
                                    this is the first web page iam designing in react iam so happy to be to it
                                    for making an web page this is the way to produce the path from one component
                                    to another component
                            </p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-sm-6 col-10'>

                        </div>
                        <div
                            className='col-lg-4 col-sm-6 col-10 text-center mt-2 mb-3'
                            style={{ boxShadow: '2px 2px grey', backgroundColor: 'lightGrey', borderRadius: '50px' }}
                        >
                            <div className='mt-3'>
                                <h2 className='text-dark'>Process to design a routing</h2>
                                <img src={Image} height='30%' width='40%' alt='watch'></img>
                                <p className='text-info'> First we need to install <q>react-router-dom</q> and then
                                we need to import the
                                 <q>BrowserRouter,
                                     Route,Switch</q>
                                    and after write a class
                                    component and then implement all route and assign a path to it and then take
                                    individual components and assigns path to them and at last maintain one comonent
                                    to navbars and then assign all the paths to it
                                   </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-right'>
                    <button onClick={this.handleOnClick1} className='btn btn-sm btn-primary mr-1'>1</button>
                    <button onClick={this.handleOnClick2} className='btn btn-sm btn-primary mr-1'>2</button>
                    <button onClick={this.handleOnClick3} className='btn btn-sm btn-primary mr-1'>3</button>
                    <button onClick={this.handleOnClick4} className='btn btn-sm btn-primary mr-1'>4</button>
                    <button onClick={this.handleOnClick5} className='btn btn-sm btn-primary mr-1'>5</button>
                    <button onClick={this.handleOnClick} className='btn btn-sm btn-primary mr-1'>To Next Page</button>
                </div>
            </div>
        )
    }
}
export default Home;