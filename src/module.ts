import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { SimplePanel } from './SimplePanel';
import { SelectOption } from 'SelectOption';
import { SelectType } from 'SelectType';

export const plugin = new PanelPlugin<SimpleOptions>(SimplePanel).useFieldConfig({

}).setPanelOptions(builder => {
  return builder
    .addTextInput({
      path: 'ChartTitle',
      name: 'Titre',
      description: 'Titre du graphe',
      defaultValue: 'Titre',
    })
    .addCustomEditor({
      id: 'chartType',
      path: 'chartType',
      name: "Type du graphe",
      defaultValue: 0,
  
      editor: SelectType,
      
    })
    .addFieldNamePicker({
      path: 'PieField',
      name: "Type du graphe",
      defaultValue: "",
      showIf: config => [2, 3].includes(config.chartType) 

    })
    .addCustomEditor({
      id: 'xAxis',
      path: 'xAxis',
      name: "La colonne sur l'axe X",
      defaultValue: "label",
  
      editor: SelectOption,
      
    })
    .addTextInput({
      path: 'Ignore',
      name: 'Ignore',
      description: 'Ignorer les colonnes suivantes (eg. "series_a, sereis_b, ...")',
      defaultValue: 'id, time',
    })
    .addTextInput({
      path: 'bgColors',
      name: 'Fonds',
      description: 'Couleurs de fond des series (eg. "red, green, ...")',
      defaultValue: 'red, green, blue',
    })
    .addTextInput({
      path: 'borderColors',
      name: 'Contours',
      description: 'Couleurs de contour des series (eg. "red, green, ...")',
      defaultValue: 'red, green, blue',
    })
    
});
