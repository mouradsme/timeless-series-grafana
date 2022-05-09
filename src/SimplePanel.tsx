import  React  from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import chartPlugins from 'Chunks/chartPlugins';
import { Overrides as appOverrides } from "Chunks/options";
import { Datasets } from 'Chunks/datasets';
import { Charts as appCharts } from 'Chunks/Charts';
import { gOptions } from 'Chunks/graph_options';
 
import "@szhsin/react-menu/dist/index.css";

interface Props extends PanelProps<SimpleOptions> {}
export const SimplePanel: React.FC<Props> = (A) => {
  
    const key = "Chart" + Math.random();
    const { options, data, height } = A
    const Overrides = appOverrides(A.fieldConfig.overrides)
    const ds        = Datasets(options, {Columns: data.series[0].fields} , data)
    const g_data    = { labels: ds.labels, datasets: ds.datasets };
    const g_options = gOptions(key, options, g_data, Overrides)
    const Plugins   = chartPlugins(options)
    const Charts    = appCharts(key, g_options, g_data, Plugins);
    const mStyle    = [2,3].includes(options.chartType) ? {width: height, height: height, margin: 'auto'} : {}  

    return  (<>
              <div className="chartContainer" style={mStyle}>
              {Charts[options.chartType]}
              </div>
            </>) 
}