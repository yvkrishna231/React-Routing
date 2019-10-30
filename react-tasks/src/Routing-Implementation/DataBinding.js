

import React, { Component } from 'react';

class DataBinding extends Component {
    state = {
        data: [{ "id": 1, "first_name": "Nicolea", "last_name": "Shapero", "email": "nshapero0@tinyurl.com", "gender": "Female", "ip_address": "49.75.158.132" },
        { "id": 2, "first_name": "Barb", "last_name": "Helliker", "email": "bhelliker1@clickbank.net", "gender": "Female", "ip_address": "19.142.239.27" },
        { "id": 3, "first_name": "Dom", "last_name": "Linley", "email": "dlinley2@cargocollective.com", "gender": "Male", "ip_address": "245.30.238.240" },
        { "id": 4, "first_name": "Al", "last_name": "Dary", "email": "adary3@flickr.com", "gender": "Male", "ip_address": "198.158.5.202" },
        { "id": 5, "first_name": "Giselle", "last_name": "Ketcher", "email": "gketcher4@guardian.co.uk", "gender": "Female", "ip_address": "103.155.53.84" },
        { "id": 6, "first_name": "Lauren", "last_name": "Fair", "email": "lfair5@ox.ac.uk", "gender": "Male", "ip_address": "160.13.255.191" },
        { "id": 7, "first_name": "Tucker", "last_name": "Schreurs", "email": "tschreurs6@bizjournals.com", "gender": "Male", "ip_address": "110.145.4.134" },
        { "id": 8, "first_name": "Grethel", "last_name": "Abramski", "email": "gabramski7@arstechnica.com", "gender": "Female", "ip_address": "254.134.217.72" },
        { "id": 9, "first_name": "Jeromy", "last_name": "Clemente", "email": "jclemente8@trellian.com", "gender": "Male", "ip_address": "215.229.192.8" },
        { "id": 10, "first_name": "Hadleigh", "last_name": "Drillot", "email": "hdrillot9@msu.edu", "gender": "Male", "ip_address": "251.203.64.92" },
        { "id": 11, "first_name": "Hogan", "last_name": "Pomphrey", "email": "hpomphreya@telegraph.co.uk", "gender": "Male", "ip_address": "75.140.109.121" },
        { "id": 12, "first_name": "Perry", "last_name": "Bouchard", "email": "pbouchardb@rediff.com", "gender": "Male", "ip_address": "240.49.5.89" },
        { "id": 13, "first_name": "Wheeler", "last_name": "Impy", "email": "wimpyc@prweb.com", "gender": "Male", "ip_address": "112.110.218.103" },
        { "id": 14, "first_name": "Kalindi", "last_name": "Kitchener", "email": "kkitchenerd@soundcloud.com", "gender": "Female", "ip_address": "118.183.246.203" },
        { "id": 15, "first_name": "Andi", "last_name": "Lutsch", "email": "alutsche@hatena.ne.jp", "gender": "Female", "ip_address": "208.90.190.160" },
        { "id": 16, "first_name": "Bradan", "last_name": "Andrieu", "email": "bandrieuf@myspace.com", "gender": "Male", "ip_address": "213.69.83.18" },
        { "id": 17, "first_name": "Brooks", "last_name": "Wilcox", "email": "bwilcoxg@ycombinator.com", "gender": "Male", "ip_address": "47.170.86.125" },
        { "id": 18, "first_name": "Elmer", "last_name": "Bayman", "email": "ebaymanh@usda.gov", "gender": "Male", "ip_address": "69.191.117.33" },
        { "id": 19, "first_name": "Bliss", "last_name": "Lithcow", "email": "blithcowi@gmpg.org", "gender": "Female", "ip_address": "87.245.227.194" },
        { "id": 20, "first_name": "Chan", "last_name": "MacGuiness", "email": "cmacguinessj@narod.ru", "gender": "Male", "ip_address": "3.225.136.138" },
        { "id": 21, "first_name": "Christian", "last_name": "Lydster", "email": "clydsterk@addthis.com", "gender": "Female", "ip_address": "205.51.234.180" },
        { "id": 22, "first_name": "Christie", "last_name": "Gillitt", "email": "cgillittl@utexas.edu", "gender": "Female", "ip_address": "22.95.19.52" },
        { "id": 23, "first_name": "Julianna", "last_name": "Muzzillo", "email": "jmuzzillom@mysql.com", "gender": "Female", "ip_address": "202.144.130.64" },
        { "id": 24, "first_name": "Malina", "last_name": "Noraway", "email": "mnorawayn@reddit.com", "gender": "Female", "ip_address": "84.183.52.226" },
        { "id": 25, "first_name": "Astrid", "last_name": "Grammer", "email": "agrammero@wunderground.com", "gender": "Female", "ip_address": "216.166.76.114" }]
    }
    handleOnClick = () => {
        this.props.history.push('/about')
    }
    handleOnClick1 = () => {
        this.props.history.push('/tododata')
    }
    render() {
        return (
            <div>
                <div className='container'>
                    <h2 className='text-center text-success'>Data Binding In A Table</h2>
                    <div className='row'>
                        <div className='col-lg-12 col-sm-12 col-12 text-center'>
                            <table className='table table-dark table-hover border shadow'>
                                <thead>
                                    <tr>
                                        <th>id</th>
                                        <th>first_name</th>
                                        <th>last_name</th>
                                        <th>email</th>
                                        <th>gender</th>
                                        <th>ip_address</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.data.map((val, ind) => {
                                        return (
                                            < tr key={ind} >
                                                <td>{val.id}</td>
                                                <td>{val.first_name}</td>
                                                <td>{val.last_name}</td>
                                                <td>{val.email}</td>
                                                <td>{val.gender}</td>
                                                <td>{val.ip_address}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                            <button
                                onClick={this.handleOnClick}
                                className='btn btn-sm btn-success'>
                                Previous Page
                            </button>
                            <button
                                onClick={this.handleOnClick1}
                                className='btn btn-sm btn-success float-right'>
                                Next Page
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default DataBinding;