import React, { useEffect, useState } from "react";
import { getAllRecivedOrders } from '../../api/api'
import { isAuthenticated } from "../../auth";
import "./Analysis.css";

export default function Analysis() {
        const { token } = isAuthenticated();
        const [total,setTotal]=useState(0)
        const recivedOrders = async () => {
                let recived = await getAllRecivedOrders(token);
                if (recived.length) {
        let totalRevenue= recived.reduce(function(sum, current) {
          return sum + parseInt(current.total_price);
        }, 0);
        setTotal(totalRevenue)
                }
        }
        useEffect(() => {
                window.scrollTo(0, 0)
                recivedOrders()
      }, []);
        return (
                // <body >
                <div class="main-container">
                        <h1 style={{marginBottom:'5rem'}}>Annual Sales</h1>
                        <div class="year-stats">
                                <div class="month-group">
                                        <div class="bar h-100"></div>
                                        <p class="month">Jan</p>
                                </div>
                                <div class="month-group">
                                        <div class="bar h-50"></div>
                                        <p class="month">Feb</p>
                                </div>
                                <div class="month-group">
                                        <div class="bar h-75"></div>
                                        <p class="month">Mar</p>
                                </div>
                                <div class="month-group">
                                        <div class="bar h-25"></div>
                                        <p class="month">Apr</p>
                                </div>
                                <div class="month-group selected">
                                        <div class="bar h-100"></div>
                                        <p class="month">May</p>
                                </div>
                                <div class="month-group">
                                        <div class="bar h-50"></div>
                                        <p class="month">Jun</p>
                                </div>
                                <div class="month-group">
                                        <div class="bar h-75"></div>
                                        <p class="month">Jul</p>
                                </div>
                                <div class="month-group">
                                        <div class="bar h-25"></div>
                                        <p class="month">Aug</p>
                                </div>
                                <div class="month-group">
                                        <div class="bar h-50"></div>
                                        <p class="month">Sep</p>
                                </div>
                                <div class="month-group">
                                        <div class="bar h-75"></div>
                                        <p class="month">Oct</p>
                                </div>
                                <div class="month-group">
                                        <div class="bar h-25"></div>
                                        <p class="month">Nov</p>
                                </div>
                                <div class="month-group">
                                        <div class="bar h-100"></div>
                                        <p class="month">Dec</p>
                                </div>
                        </div>

                        <div class="stats-info">
                                <div class="graph-container">
                                        <div class="percent">
                                                <svg viewBox="0 0 36 36" class="circular-chart" style={{
                                                        width: '193%',
                                                        height: '15rem',
                                                margin: '-3rem 2rem'}}>
                                                        <path
                                                                class="circle"
                                                                stroke-dasharray="100, 100"
                                                                d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
                                                        />
                                                        <path
                                                                class="circle"
                                                                stroke-dasharray="85, 100"
                                                                d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
                                                        />
                                                        <path
                                                                class="circle"
                                                                stroke-dasharray="60, 100"
                                                                d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
                                                        />
                                                        <path
                                                                class="circle"
                                                                stroke-dasharray="30, 100"
                                                                d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
                                                        />
                                                </svg>
                                        </div>
                                        <p>Total: {total}$</p>
                                </div>

                                <div class="info">
                                        {/* <p>
                                                Most expensive category <br />
                                                <span>Restaurants & Dining</span>
                                        </p>
                                        <p>
                                                Updated categories <span>2</span>
                                        </p> */}
                                        <h3 style={{ marginLeft: '-35rem'}}>
                                                Profitability Ratio : <span>10%</span>
                                        </h3>
                                </div>
                        </div>
                </div>
                // </body>
        );
}
