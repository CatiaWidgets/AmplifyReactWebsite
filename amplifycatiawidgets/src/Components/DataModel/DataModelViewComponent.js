//https://blog.logrocket.com/complete-guide-building-smart-data-table-react/

import React, { useMemo, useState, useEffect } from "react";

import DataModelComponent from "./DataModelComponent";

function DataModelViewComponent() {

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
        })
        .catch(function (error) {
            console.log(error);
        });

    return (
        <div className="App">
            
        </div>
    );
}

export default DataModelViewComponent;