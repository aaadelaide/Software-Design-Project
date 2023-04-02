import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';

export const FuelQuoteHistory = (props) => {
    const [historyRecords, setHistoryRecords] = useState([]);

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const email = searchParams.get('email');

    useEffect(() => {
        fetch('http://localhost:8800/fuelquotehistory')
        .then(response => response.json())
        .then(data => setHistoryRecords(data))
        .catch(err => console.log(err))
    }, [])

    return (
        <div className="table-container">
            <h2>Fuel Quote History</h2>
            <table className="table-fq-history">
                <thead>
                    <tr>
                        <th className="table-fq-hist-title">Gallons Requested</th>
                        <th className="table-fq-hist-title">Delivery Address</th>
                        <th className="table-fq-hist-title">Delivery Date</th>
                        <th className="table-fq-hist-title">Suggested Price per Gallon</th>
                        <th className="table-fq-hist-title">Total Amount Due</th>
                    </tr>
                </thead>
                <tbody>
                    {historyRecords.map((list, index) => (
                        <tr className="table-fq-hist-val-row">
                            <td className="table-fq-hist-val">{list.gallonsRequested}</td>
                            <td>{list.deliveryAddress}</td>
                            <td>{list.deliveryDate}</td>
                            <td>{list.suggestedPricePerGallon}</td>
                            <td>{list.totalAmountDue}</td>
                        </tr>
                    ))}
                </tbody>
            </table> 
            <Link to={`/userprofile?email=${email}`}>
                <button className="link-btn">Back</button>
            </Link>
        </div>
    );
}