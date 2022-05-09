import React from 'react';
import {  Select } from '@grafana/ui';
 import { SelectableValue, StandardEditorProps } from '@grafana/data';

export const SelectOption: React.FC<StandardEditorProps<number>> = ({ item, value, onChange, context }) => {
    var options: Array<SelectableValue<any>> = [];
    try {
    let Fields = context.data[0].fields
    for (let i = 0; i < Fields?.length; i++)
        options.push({
            value: Fields[i].name,
            label: Fields[i].name
        })
    } catch (E) {
        // console.log('E', E)
    }
    return <Select  options={options} value={value} onChange={(selectableValue) => {
        onChange(selectableValue.value) ;   
       
    }} />;
  };