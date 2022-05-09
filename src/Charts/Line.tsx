import React from 'react';
import annotationPlugin from 'chartjs-plugin-annotation';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  annotationPlugin,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function App(props: any) {
  return <Line id={props.key} key={props.key} options={props.options} data={props.data} />;
}

export function gradient (key: string) {
  let ctx = ChartJS.getChart(key)?.ctx
  console.log(ChartJS.getChart(key))
  let gradient = ctx?.createLinearGradient(0, 0, 0, 300);
  gradient?.addColorStop(0, 'rgba(224, 195, 155, 1)');
  gradient?.addColorStop(1, 'rgba(100, 100, 0,0)');
  return gradient
}