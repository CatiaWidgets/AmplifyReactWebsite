import React, { useMemo, useState, useEffect } from "react";


export default class DataModelViewComponent extends Component {
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
                'x-api-key': 'hygscUxN0S5qg5WzLKjb2FLmSE9NMCF5KOXxO3zf', 'Access-Control-Allow-Origin': '*'
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
        const columns = [{
            Header: 'firstName',
            accessor: 'firstName',
        }
            , {
                Header: 'lastName',
                accessor: 'lastNamee',
        }

            , {
                Header: 'age',
                accessor: 'age',
        }
        ]
        return (
            <ReactTable
                data={this.state.users}
                columns={columns}
            />
        )
    }
}