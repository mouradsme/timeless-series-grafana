import React from 'react';
import {  Select } from '@grafana/ui';
 import { SelectableValue, StandardEditorProps } from '@grafana/data';

export const SelectType: React.FC<StandardEditorProps<number>> = ({ item, value, onChange, context }) => {
    var options: Array<SelectableValue<any>> = [];
    options = [{
        value: 0,
        label: 'Line'
    }, {
        value: 1,
        label: 'Bar'
    }, {
        value: 2,
        label: 'Pie'
    }, {
        value: 3,
        label: 'Doughnut'
    },]
    return <Select  options={options} value={value} onChange={(selectableValue) => {
        onChange(selectableValue.value) ;   
       
    }} />;
  };