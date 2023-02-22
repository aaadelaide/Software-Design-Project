import React, { useState } from "react";



export const FuelQuoteHistory = (props) => {
    return (
        <div className="table-container">
            <h2>Fuel Quote History</h2>
            <table className="table-fq-history">
                <tr>
                    <th className="table-fq-hist-title">Gallons Requested</th>
                    <th className="table-fq-hist-title">Delivery Address</th>
                    <th className="table-fq-hist-title">Delivery Date</th>
                    <th className="table-fq-hist-title">Suggested Price per Gallon</th>
                    <th className="table-fq-hist-title">Total Amount Due</th>
                </tr>
                <tr className="table-fq-hist-val-row">
                    <td className="table-fq-hist-val">3</td>
                    <td>3131 Main St, Houston, Texas 77004</td>
                    <td>02/24/2023</td>
                    <td>4</td>
                    <td>12</td>
                </tr>
                <tr className="table-fq-hist-val-row">
                    <td>3</td>
                    <td>3131 Main St, Houston, Texas 77004</td>
                    <td>02/24/2023</td>
                    <td>4</td>
                    <td>12</td>
                </tr>
            </table> 
        </div>
    );
}