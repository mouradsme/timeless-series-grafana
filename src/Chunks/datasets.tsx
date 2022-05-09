import {  Options  } from "./options";

export function Datasets(options : any, props: any, data: any) : any {
    const Columns = props.Columns
    const myOpts       = Options(options)
    const bgColors     = myOpts.bgColors
    const borderColors = myOpts.borderColors
    const Ignore       = myOpts.Ignore
    let labels   : any = []
    let datasets : any = []
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

    return {
        datasets, labels
    }
}