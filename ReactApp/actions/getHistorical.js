'use strict';
import axios from 'axios';
export function getHistorical(stock, number) {
    return function(dispatch) {
        let url = "http://localhost:8080/api/historical/" +stock +"/" +number
        console.log(url);
        axios.get(url)
        .then((response) => {
            dispatch({
                type: "FETCH_HIST_FULFILLED",
                payload: response.data
            })
        }).catch((err) => {
            if (err.response && error.response.data) {
                dispatch({
                    type: "FETCH_HIST_REJECTED",
                    payload: error.response
                });
            } else {
                this.setState({
                    type: "FETCH_HIST_REJECTED",
                    payload: error.message
                })
            }
        })
    }
}