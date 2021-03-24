import React from 'react';
import Select from 'react-select';

type Props = {
  placeholder: string;
  value: any;
  options: any;
  isMulti: any;
  isDisabled: any;
  onChange: any;
};

export class MultiSelect extends React.Component<Props> {
  render() {
    // const selectStyle = {
    //     control: (base) => ({
    //       ...base,
    //       minHeight: 32
    //     }),
    //     dropdownIndicator: (base) => ({
    //       ...base,
    //       paddingTop: 0,
    //       paddingBottom: 0,
    //     }),
    //     clearIndicator: (base) => ({
    //       ...base,
    //       paddingTop: 0,
    //       paddingBottom: 0,
    //     }),
    // };

    return (
      <Select
        // minMenuHeight = {this.props.maxMenuHeight}
        // styles={selectStyle}
        placeholder={this.props.placeholder}
        value={this.props.value}
        options={this.props.options}
        isMulti={this.props.isMulti}
        isDisabled={this.props.isDisabled}
        // searchable={false}
        onChange={this.props.onChange}
      />
    );
  }
}
