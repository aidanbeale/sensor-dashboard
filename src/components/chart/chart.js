import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { useSelector } from 'react-redux'

import convertToTime from '../../utils/convertToTime';

import './chart.css';

const Chart = ({ sensorData }) => {
  const selectTempState = state => state.tempState
  const tempState = useSelector(selectTempState)

  const convertedData = convertToTime(sensorData);

  let rightValue;

  if (tempState.openGraphCount > 1) {
    rightValue = 10;
  } else {
    rightValue = 50;
  }

  return (
    <div>
      <LineChart
      width={400}
      height={300}
      data={convertedData.data}
      margin={{
        top: 5,
        right: rightValue,
        left: -25,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="timestamp_TTL" interval={75} tick={{fontSize: 15, fill: '#d1d1d1'}}/>
      <YAxis tick={{fontSize: 15, fill: '#d1d1d1'}}/>
      <Tooltip />
      <Legend wrapperStyle={{fontSize: "24px"}}/>
      <Line
        type="monotone"
        dataKey="temperature"
        stroke="#d8a784"
        strokeWidth={2}
      />
    </LineChart>
    <LineChart
      width={400}
      height={300}
      data={convertedData.data}
      margin={{
        top: 5,
        right: rightValue,
        left: -25,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="timestamp_TTL" interval={75} tick={{fontSize: 15, fill: '#d1d1d1'}}/>
      <YAxis tick={{fontSize: 15, fill: '#d1d1d1'}}/>
      <Tooltip />
      <Legend wrapperStyle={{fontSize: "24px"}}/>
      <Line
        type="monotone"
        dataKey="humidity"
        stroke="#8884d8"
        strokeWidth={2}
      />
    </LineChart>
    </div>

  );
};

export default Chart;
