import React, { Component } from 'react';
import ChartImage from './ChartsImage.jpg';
import MenImage from './MenImage.jpg';
import ImageChartDescription from './ImageChartDescription.jpg'

class About extends Component {
    state = {
        agree: null,
    }
    handleOnClick = () => {
        this.setState({ agree: 'yes' })
    }
    handleOnClick3 = () => {
        this.setState({ agree: 'no' })
    }
    handleOnClick1 = () => {
        this.props.history.push('/data')
    }
    handleOnClick2 = () => {
        this.props.history.push('/home')
    }
    render() {
        let displayText = (
            <div>
                <b className='text-warning'>Was This HelpFull..?</b>&nbsp;
                <button className='btn btn-sm btn-success mr-1' onClick={this.handleOnClick}>Yes</button>
                <button className='btn btn-sm btn-danger' onClick={this.handleOnClick3}>No</button>
            </div>
        )
        if (this.state.agree === 'yes') {
            displayText = <div className='text-info'>Thanks For Your FeedBack</div>
        } else if (this.state.agree === 'no') {
            {
                displayText = <div>
                    <p className='text-danger'>please enter your comments</p>
                    <form onSubmit={this.handleOnClick}>
                        <textarea className='form-control text-info'></textarea>
                        <button className='btn btn-sm btn-success mt-2'>submit</button>
                    </form>
                </div>
            }

        }
        return (
            <div>
                <div className='container-fluid mt-3'>
                    <h1 className='text-center text-success'>hello world</h1>
                    <div className='row'>
                        <div className='col-lg col-md-3 col-sm-3 shadow border'>
                            <div className='mt-3 mr-5'>
                                <i
                                    className="fa fa-money"
                                    aria-hidden="true"
                                    style={{ fontSize: '3em', color: 'green' }}
                                ></i>
                                <main className='float-right text-center'>
                                    <b>$23334(2019)</b>
                                    <p>Revenue</p>
                                </main>
                            </div>
                        </div>
                        <div className='col-lg col-md-3 col-sm-3 shadow border'>
                            <div className='mt-3 mr-5'>
                                <i
                                    className="fa fa-shopping-cart "
                                    aria-hidden="true"
                                    style={{ fontSize: '3em', color: 'purple' }}
                                ></i>
                                <main className='float-right text-center'>
                                    <b>3334(2019)</b>
                                    <p>Sales</p>
                                </main>
                            </div>
                        </div>
                        <div className='col-lg col-md-3 col-sm-3 shadow border'>
                            <div className='mt-3 mr-5'>
                                <i
                                    className="fa fa-user"
                                    aria-hidden="true"
                                    style={{ fontSize: '3em', color: 'lightBlue' }}
                                ></i>
                                <main className='float-right text-center'>
                                    <b>3,00,034(2019)</b>
                                    <p>users</p>
                                </main>
                            </div>
                        </div>
                        <div className='col-lg col-md-3 col-sm-3 shadow border'>
                            <div className='mt-3 mr-5'>
                                <i
                                    className="fa fa-users"
                                    aria-hidden="true"
                                    style={{ fontSize: '3em', color: 'orange' }}
                                ></i>
                                <main className='float-right text-center'>
                                    <b>2334(2019)</b>
                                    <p>Clients</p>
                                </main>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container-fluid'>
                    <div className='row mt-5'>
                        <div className='col-lg-8 col-sm-12 col-12'>
                            <img src={ChartImage} alt='imahe of charts' height='70%' width='100%' />
                        </div>
                        <div className='col-lg-4 col-sm-12 col-12 mb-5'>
                            <div style={{ height: '50%' }}>
                                <div className='bg-info' style={{ height: '80%' }}>
                                    <i className="fa fa-twitter float-right text-white mr-2 mt-2" aria-hidden="true"></i><br></br>
                                    <img src={MenImage} className='rounded-circle' height='90px' width='100px' />
                                    <main className='text-center float-right'>
                                        <h2 className='text-white'>Krishna Yendluri</h2>
                                        <h3 className='text-white'>Project Manager</h3>
                                    </main><hr></hr>
                                </div>
                                <div>
                                    <img src={ImageChartDescription} alt='chart description' width='100%' />
                                </div>
                                <div>
                                    <h3 className='text-success'>Text Your Comments :</h3>
                                </div>
                                <div>
                                    <textarea style={{ width: '100%' }}></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mb-5'>
                        <button
                            onClick={this.handleOnClick1}
                            className='btn btn-sm btn-info float-right'>
                            Next Page
                                </button>
                        <button
                            onClick={this.handleOnClick2}
                            className='btn btn-sm btn-info float-left'>
                            Previous Page
                                </button>
                    </div>
                </div>
                <div className='container mb-5'>
                    <div className='row'>
                        <div className='col-lg-5 text-center m-auto border shadow'>
                            <div className='p-3'>
                                {displayText}
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default About;
