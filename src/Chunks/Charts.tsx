import React from 'react';
import { gLine as Line, gBar as Bar, gPie as Pie, gDoughnut as Doughnut} from '../Charts/All'

export function Charts (key: string, g_options : any, g_data: any, Plugins: any) {
    return [
    <Line key={key} options={g_options} data={g_data} plugins={Plugins}/>, 
    <Bar key={key} options={g_options} data={g_data} plugins={Plugins}/>, 
    <Pie key={key} options={g_options} data={g_data} plugins={Plugins}/>,
    <Doughnut key={key}  options={g_options} data={g_data} plugins={Plugins}/>,
  ]
} 
  