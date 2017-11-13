import React        from 'react';
import classnames   from 'classnames';
import connectField from 'uniforms/connectField';

import wrapField from 'uniforms-bootstrap4/wrapField';

const dateFormat = value => value && value.toISOString().slice(0, -8);
const dateParse = (timestamp, onChange) => {
  const date = new Date(timestamp);
  if (date.getFullYear() < 10000) {
    onChange(date);
  } else if (isNaN(timestamp)) {
    onChange(undefined);
  }
};

const Date_ = props =>
  wrapField(props, (
    <input
      className={classnames(props.inputClassName, 'form-control', {'form-control-danger': props.error})}
      disabled={props.disabled}
      id={props.id}
      max={dateFormat(props.max)}
      min={dateFormat(props.min)}
      name={props.name}
      onChange={event => dateParse(event.target.valueAsNumber, props.onChange)}
      placeholder={props.placeholder}
      ref={props.inputRef}
      type={props.type}
      value={dateFormat(props.value)}
    />
  ))
;

Date_.displayName = 'Date';

export default connectField(Date_);
