export function gOptions ( key: string, options : any, g_data: any, Overrides : any) : any {
    const gOptions = {
        key: key,
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
            position: 'left' as const,
          },
          title: {
            display: true,
            text: options.ChartTitle,
          }
        },
      };

      return gOptions;
}