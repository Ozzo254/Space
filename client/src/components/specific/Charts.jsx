import React from 'react'
import {
  Line,
  Doughnut
} from "react-chartjs-2";
import {
  CategoryScale,
  Chart as ChartJS,
  Tooltip,
  Filler,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Legend,
} from 'chart.js'
import { orange, orangeLight, purple, purpleLight } from '../../constants/color';
import { getLast7Days } from '../../lib/features';

ChartJS.register(
  Tooltip,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Filler,
  ArcElement,
  Legend,
);

const labels = getLast7Days();

const lineChartOptions = {
  responsive: true,
  plugins: {
    Legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },

  scales: {
    x: {
      grid: {
        display: false,
      }
      // display: false,
    },
    y: {
      beginAtZero: true,
      grid: {
        display: false,
      }
      // display: false,
    },
  },
};

const LineChart = ({ value = [] }) => {
  const data = {
    labels,
    datasets: [
      {
        data: value,
        label: "Revenue",
        fill: true,
        backgroundColor: purpleLight,
        borderColor: purple,
      },
      // {
      //   data: [1, 22, 14, 8],
      //   label: "Revenue",
      //   fill: false,
      //   backgroundColor: "rgba(75, 12, 192, 0.31)",
      //   borderColor: "rgba(75, 12, 192, 1)",
      // },
    ],
  };

  return (
    <Line
      data={data}
      options={lineChartOptions}
    />
  )
}

const doughnutChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    // title: {
    //   display: false, 
    // },
  },
  cutout: 120,
};

const DoughnutChart = ({
  value = [], labels = [] }) => {

  const data = {
    labels,
    datasets: [
      {
        data: value,
        label: "Total Chats Vs Group Chats",
        backgroundColor: [purpleLight, orangeLight],
        hoverBackgroundColor: [purple, orange],
        borderColor: [purple, orange],
        offset: 30,
      },
    ],
  };

  return (
    <Doughnut
      style={{ zIndex: 10 }}
      data={data}
      options={doughnutChartOptions}
    />
  )
}

export { LineChart, DoughnutChart }