import React, { Component } from 'react';
import { useTable } from 'react-table'
import styled from 'styled-components'
import axios from 'axios'

const Styles = styled.div`
  table {
    width: 100%;
    border-spacing: 0;
    border: 1px solid black;
    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }
    th,
    td {
      margin: 0;
      padding: 1rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
      :last-child {
        border-right: 0;
      }
    }
  }
`

function Table({ columns, data }) {
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data })

    // Render Data Table UI
    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup
                            .headers
                            .map(column => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row
                                .cells
                                .map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

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
        const columns = [
            {
                Header: 'firstName',
                accessor: 'firstName',
            },
            {
                Header: 'lastName',
                accessor: 'lastName',
            },
            {
                Header: 'age',
                accessor: 'age',
            }
        ]

        return (
            <Styles>
                <Table
                    data={this.state.users}
                    columns={columns}
                />
            </Styles>
        )
    }
}

export default DataModelViewComponent;