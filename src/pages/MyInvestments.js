import { Card, Divider, Tag, Tooltip } from "antd";
import React, { useState, useEffect } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { formatDate } from "../config/Constants";
import { getInvestments } from "../config/Requests";

export default function MyInvestments() {
  const [loading, setLoading] = useState(false);
  const [investments, setInvestments] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const res = await getInvestments();
        setInvestments(
          res.data.map((dt) => {
            return { ...dt, createdAt: formatDate(dt) };
          })
        );
        setLoading(false);
      } catch (e) {}
    }

    setLoading(true);
    getData();
  }, []);

  return (
    <div>
      <Divider orientation="left">Portfolio graph</Divider>
      <ResponsiveContainer width={"100%"} height={250}>
        <LineChart data={investments} className="mx-auto">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="createdAt" />
          <YAxis dataKey={"amount"} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="amount" stroke="#8884d8" />
          {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
        </LineChart>
      </ResponsiveContainer>
      <Divider orientation="left">My Investments</Divider>
      <div className="grid grid-cols-3 gap-2">
        {investments.map((investment) => {
          return (
            <Card
              title={<div className=" text-cyan-500">{investment.title}</div>}
            >
              <div className="text-sm font-light">
                <div className="flex justify-between">
                  <div className="text-gray-400">Invested: </div>
                  <div>{investment.amount}</div>
                </div>
                <div className="flex justify-between">
                  <div className="text-gray-400">Current Valuation: </div>
                  <div>{investment.valuation * 7}</div>
                </div>
                <div className="flex justify-between">
                  <div className="text-gray-400">Sector: </div>
                  <Tag className={`m-0 bg-red-200`}>
                    <div>{investment.sector}</div>
                  </Tag>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

const dummyData = [
  {
    name: "Jan",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "March",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "August",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Sept",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Oct",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Dec",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
