//https://blog.logrocket.com/complete-guide-building-smart-data-table-react/

import React, { useMemo, useState, useEffect } from "react";

import DataModelComponent from "./DataModelComponent";

function DataModelViewComponent() {
    const [data, setData] = useState([]);

    var axios = require('axios');

    var config = {
        method: 'get',
        url: 'https://ip2dfwmit2.execute-api.eu-west-1.amazonaws.com/Prod/v1/DataModel',
        headers: {
            'x-api-key': 'hygscUxN0S5qg5WzLKjb2FLmSE9NMCF5KOXxO3zf','Access-Control-Allow-Origin':'*'
        }
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            setData(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });


    /* 
    - Columns is a simple array right now, but it will contain some logic later on. It is recommended by react-table to memoize the columns data
    - Here in this example, we have grouped our columns into two headers. react-table is flexible enough to create grouped table headers
  */
    const columns = useMemo(
        () => [
            {
                // first group - TV Show
                Header: "TV Show",
                // First group columns
                columns: [
                    {
                        Header: "Name",
                        accessor: "show.name"
                    },
                    {
                        Header: "Type",
                        accessor: "show.type"
                    }
                ]
            },
            {
                // Second group - Details
                Header: "Details",
                // Second group columns
                columns: [
                    {
                        Header: "Language",
                        accessor: "show.language"
                    },
                    {
                        Header: "Genre(s)",
                        accessor: "show.genres"
                    },
                    {
                        Header: "Runtime",
                        accessor: "show.runtime"
                    },
                    {
                        Header: "Status",
                        accessor: "show.status"
                    }
                ]
            }
        ],
        []
    );


    return (
        <div className="App">
            <DataModelComponent columns={columns} data={data} />
        </div>
    );
}

export default DataModelViewComponent;