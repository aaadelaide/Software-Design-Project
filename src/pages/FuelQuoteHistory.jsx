import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

export const FuelQuoteHistory = (props) => {
    const [backendData, setBackendData] = useState([])

    useEffect(()=>{
        fetch("/api").then(
            response => response.json()
        ).then (
            data => {
                setBackendData(JSON.parse(data.history))
            }
        )
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
                    {backendData.map((data, index) => (
                        <tr key={index} className="table-fq-hist-val-row">
                            <td className="table-fq-hist-val">{data.gallonsRequested}</td>
                            <td>{data.deliveryAddress}</td>
                            <td>{data.deliveryDate}</td>
                            <td>{data.suggestedPricePerGallon}</td>
                            <td>{data.totalAmountDue}</td>
                        </tr>
                    ))}
                </tbody>
            </table> 
            <Link to="/userprofile">
                <button className="link-btn">Back</button>
            </Link>
        </div>
    );
}