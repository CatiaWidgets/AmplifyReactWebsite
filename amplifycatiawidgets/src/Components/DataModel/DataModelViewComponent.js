import React, { Component} from 'react';
import axios from 'axios'
import Table from "./Table";

import './DataModelViewComponent.css';

class DataModelViewComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: [],
            loading: true,
            selectionChanged: false,
            rowHighSelect: [],
            rowEdit: null,
            open: false,
            addvalue: "",
            value: "",
            editableRows: {},
            selectedRowIndex: [],
            showEdit: false,
            showAdd: false,
            showDelete: false,
            selected: null
        }
    }

    async getUsersData() {

        var config = {
            method: 'get',
            url: 'https://fd8yh628w1.execute-api.eu-west-1.amazonaws.com/Prod/v1/DataModel',
            headers: {
                'x-api-key': 'hygscUxN0S5qg5WzLKjb2FLmSE9NMCF5KOXxO3zf'
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
                headerStyle: {
                    backgroundColor: "green"
                }
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
            <div className="DataTable">
                <Table columns={columns} data={this.state.users} />
            </div>
        )
    }
}

export default DataModelViewComponent;