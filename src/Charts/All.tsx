import React from 'react';
import annotationPlugin from 'chartjs-plugin-annotation';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line, Bar, Pie, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  annotationPlugin,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);
export function gLine(props: any) {
  return <Line 
    id={props.options.key} 
    key={props.options.key} 
    options={props.options} 
    data={props.data} 
    plugins={props.plugins}
  />;
}
export function gBar(props: any) {
  return <Bar 
    id={props.options.key} 
    key={props.options.key} 
    options={props.options} 
    data={props.data} 
    plugins={props.plugins} 
    />;
}
export function gPie(props: any) {  
  return <Pie  
    style={{height: props.height, width: props.width}} 
    id={props.options.key} 
    key={props.options.key} 
    options={props.options} 
    data={props.data} 
    plugins={props.plugins} 
    />;
}
export function gDoughnut(props: any) {
  return <Doughnut 
    style={{height: props.height, width: props.width}}  
    id={props.options.key} 
    key={props.options.key} 
    options={props.options} 
    data={props.data}  
    plugins={props.plugins} 
    />;
}

export function gradient (key: string) {
  let ctx = ChartJS.getChart(key)?.ctx
  let gradient = ctx?.createLinearGradient(0, 0, 0, 300);
  gradient?.addColorStop(0, 'rgba(224, 195, 155, 1)');
  gradient?.addColorStop(1, 'rgba(100, 100, 0,0)');
  return gradient
}
