"use client";

import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
  ChartType,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const BarChart: React.FC = () => {
  const data: ChartData<'bar'> = {
    labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4'],
    datasets: [
      {
        data: [80, 120, 90, 50],
        backgroundColor: [
          '#865BE9',
          '#6832E3',
          '#9A76EC',
          '#BAA1F2',
        ],
        borderRadius: 5,
        barThickness: 15,
        categoryPercentage: 0.5,
        barPercentage: 1.0,
      },
    ],
  };

  const options: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  // Custom plugin to draw the purple line at the bottom
  const customLinePlugin = {
    id: 'customLinePlugin',
    afterDatasetsDraw(chart: ChartJS<ChartType>) {
      const { ctx, chartArea } = chart;
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(chartArea.left, chartArea.bottom);
      ctx.lineTo(chartArea.right, chartArea.bottom);
      ctx.lineWidth = 1;
      ctx.strokeStyle = '#865BE9';
      ctx.stroke();
      ctx.restore();
    },
  };

  return (
    <div className="h-[93px] w-[90px] flex items-center justify-center mt-4">
      <div className="relative w-full h-[100%]">
        <Bar data={data} options={options} plugins={[customLinePlugin]} />
      </div>
    </div>
  );
};

export default BarChart;
