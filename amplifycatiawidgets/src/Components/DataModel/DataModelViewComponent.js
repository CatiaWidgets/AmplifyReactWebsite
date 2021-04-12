import React, { Component} from 'react';
import axios from 'axios'
import Table from "./Table";

import './Table.css';
import './Table2.css';

class DataModelViewComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: [],
            loading: true
        }
    }

    async getUsersData() {

        var config = {
            method: 'get',
            url: 'https://ip2dfwmit2.execute-api.eu-west-1.amazonaws.com/Prod/v1/DataModel',
            headers: {
                'x-api-key': 'hygscUxN0S5qg5WzLKjb2FLmSE9NMCF5KOXxO3zf'//,
                //'Access-Control-Allow-Origin': '*',
                //'Access-Control-Allow-Credentials': 'true',
                //'Access-Control-Allow-Methods': 'GET,OPTIONS,PATCH,POST,DELETE',
                //'Access-Control-Allow-Headers':'Content-Type, X-Amz-Date, Authorization, X-Api-Key, X-Amz-Security-Token'
            }
        };

        const res = await axios(config)
        console.log(res.data)
        this.setState({ loading: false, users: res.data })
    }

    componentDidMount() {
        this.getUsersData()
    }

    render() {

        const columns = [
            {
                Header: 'First Name',
                accessor: 'firstName',
            },
            {
                Header: 'Last Name',
                accessor: 'lastName',
            },
            {
                Header: 'Age',
                accessor: 'age',
                className: 'HeaderAge',
            }
        ]

        return (
            <div className="App">
                <Table columns={columns} data={this.state.users} />
            </div>
        )
    }
}

export default DataModelViewComponent;