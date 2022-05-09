import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { gradient, gLine as Line, gBar as Bar, gPie as Pie, gDoughnut as Doughnut} from 'Charts/All'
import "@szhsin/react-menu/dist/index.css";

interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = (A) => {
  
	var Overrides:any = {}
	A.fieldConfig.overrides!?.forEach((item) => {
		let id = item.matcher.options
		let values = item.properties[0]!?.value[0]!
		Overrides[id.toLowerCase().trim()] = values
	})
  const { options, data, height } = A
   const bgColors = options.chartType == 0 ? [gradient("Line")] : options.bgColors.split(',').map(value => { return value.trim()})
   const borderColors = options.borderColors.split(',').map(value => { return value.trim()})
   const Ignore = options.Ignore.split(',').map(value => { return value.trim()})
  
  let Columns = data.series[0].fields
  let labels = []
  let datasets = []
  if (options.chartType !== 2 && options.chartType !== 3)
  for (let i = 0; i < Columns.length ; i++) {
    let id = Columns[i].name
    if (Ignore.includes(id)) continue;
    let Values = Columns[i].values
    let data = []
    
    for (let j = 0; j < Values?.length; j++) {
      if (id == options.xAxis) {
        labels.push(Values.get(j))
        
      } else {
        data.push(Values.get(j))
      }
    }
    if (id !== options.xAxis)
        datasets.push({
          label: id,
          data: data,
          borderColor: borderColors[i-Ignore.length],
          backgroundColor: bgColors[i-Ignore.length],
        })
  } else {
    let Series = data.series[0].fields
    let Values = []
    for (let i = 0; i < Series.length; i++) {
      let id = Series[i].name
      if (id == options.xAxis)  {
        let lVals = Series[i].values
        for (let j = 0; j < lVals.length; j++) 
        labels.push(lVals.get(j))
      }
      if(id !== options.PieField) continue;
      let sVals = Series[i].values
      for (let j = 0; j < sVals.length; j++) 
        Values.push(sVals.get(j))
    }
    datasets.push({
      label: "",
      data: Values,
      borderColor: borderColors,
      backgroundColor: bgColors,
    })

  }
   const g_data = {
    labels,
    datasets
  };

  var g_options = {
    
    
    responsive: true,
    onClick: function(evt: any, element: any) {
      if (element.length > 0) {
        let elindex = element[0].index
        let elIndex = g_data.labels[elindex].trim()
        let srindex = element[0].datasetIndex
        let srIndex = g_data.datasets[srindex].label.trim()
        let pattern =  [2,3].includes(options.chartType) ? elIndex:srIndex + ',' +elIndex
            pattern = `${pattern}`.toLowerCase().trim()
        let link = "#"
        if (Object.keys(Overrides).includes(pattern)) { 
          link = Overrides[pattern].url
          
              window.open(
                link,
                '_blank' 
              );
      }
        
        
      }
    },
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: options.ChartTitle,
      },
    },
  };
   const Charts = [
  <Line options={g_options} data={g_data}/>, 
  <Bar options={g_options} data={g_data}/>, 
  <Pie  options={g_options} data={g_data}/>,
  <Doughnut  options={g_options} data={g_data}/>,
]
  var mStyle = {}
  if ([2,3].includes(options.chartType)) {
    mStyle = {width: height, height: height, margin: 'auto'}
  } 
  
  
  return (<>
  <div className="chartContainer" style={mStyle}>
  {Charts[options.chartType]}
  </div>
  </>);
};


