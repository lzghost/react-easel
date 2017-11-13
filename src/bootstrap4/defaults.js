import React from 'react';
import LongTextField from 'uniforms-bootstrap4/LongTextField';
import TextField from 'uniforms-bootstrap4/TextField';
import AutoField from 'uniforms-bootstrap4/AutoField';
import SelectField from 'uniforms-bootstrap4/SelectField';
import NumberField from 'uniforms-bootstrap4/NumField';
import RadioGroup from 'uniforms-bootstrap4/RadioField';
import CheckboxGroup from './CheckboxGroupField';
import ListField from 'uniforms-bootstrap4/ListField';
import HiddenField from 'uniforms-bootstrap4/HiddenField';
import BooleanField from 'uniforms-bootstrap4/BoolField';
import DateField from './DateField';
import AutoForm from 'uniforms-bootstrap4/AutoForm';
import SimpleSchema from 'simpl-schema';

const components = [{
  type: 'Text Field',
  dataType: String,
  sidebar: {
    icon: <i className="fa fa-i-cursor"/>,
    text: 'Text Field'
  },
  formElement: TextField
}, {
  type: 'Boolean',
  dataType: Boolean,
  sidebar: {
    icon: <i className="fa fa-check-square" />,
    text: 'Boolean'
  },
  formElement: BooleanField
}, {
  type: 'Date Field',
  dataType: String,
  defaultProps: {
    type: 'date'
  },
  sidebar: {
    icon: <i className="fa fa-calendar"/>,
    text: 'Date Field'
  },
  admin: {
    schema: new SimpleSchema({
      min: {
        type: Date,
        optional: true
      },
      max: {
        type: Date,
        optional: true
      },
      type: {
        type: String,
        defaultValue: 'date',
        allowedValues: ['date', 'datetime-local']
      }
    })
  },
  formElement: DateField
}, {
  type: 'Hidden Input',
  dataType: String,
  sidebar: {
    icon: <i className="fa fa-eye-slash" />,
    text: 'Hidden Input'
  },
  formElement: HiddenField
}, {
  type: 'Textarea',
  dataType: String,
  sidebar: {
    icon: <i className="fa fa-pencil-square-o" />,
    text: 'Textarea'
  },
  formElement: LongTextField,
  admin: {
    schema: new SimpleSchema({
      rows: {
        type: Number,
        defaultValue: 10
      },
    })
  }
}, {
  type: 'Number',
  dataType: Number,
  formElement: NumberField,
  sidebar: {
    icon: <i className="fa fa-hashtag"/>,
    text: 'Number'
  },
  admin: {
    schema: new SimpleSchema({
      min: {
        type: Number,
        optional: true
      },
      max: {
        type: Number,
        optional: true
      },
      step: {
        type: Number,
        optional: true
      }
    })
  }
}, {
  type: 'Radio Group',
  dataType: String,
  sidebar: {
    icon: <i className="fa fa-circle-o" />,
    text: 'Radio Group'
  },
  formElement: RadioGroup,
  defaultProps: {
    options: [{ label: 'one', value: 1 }]
  },
  admin: {
    schema: new SimpleSchema({
      options: {
        type: Array,
        minCount: 1,
        uniforms: {
          label: 'Exit States',
          removeIcon: <i className="fa fa-minus" style={{ position: 'relative', top: '-15px', left: '17px'}}/> ,
          addIcon: <i className="pull-right fa fa-plus" style={{ position: 'relative', top: '-15px', right: '17px'}}/>,
          component: ListField,
        }
      },
      'options.$': {
        type: Object
      },
      'options.$.label': {
        type: String
      },
      'options.$.value': {
        type: String
      }
    })
  }
}, {
  type: 'Select',
  dataType: String,
  sidebar: {
    icon: <i className="fa fa-toggle-down" />,
    text: 'Select'
  },
  formElement: SelectField,
  defaultProps: {
    options: [{ label: 'one', value: 1 }]
  },
  admin: {
    schema: new SimpleSchema({
      options: {
        type: Array,
        minCount: 1,
        uniforms: {
          label: 'Exit States',
          removeIcon: <i className="fa fa-minus" style={{ position: 'relative', top: '-15px', left: '17px'}}/> ,
          addIcon: <i className="pull-right fa fa-plus" style={{ position: 'relative', top: '-15px', right: '17px'}}/>,
          component: ListField,
        }
      },
      'options.$': {
        type: Object
      },
      'options.$.label': {
        type: String
      },
      'options.$.value': {
        type: String
      }
    })
  }
},  {
  type: 'Checkbox Group',
  dataType: Array,
  sidebar: {
    icon: <i className="fa fa-check-square-o" />,
    text: 'Checkbox Group'
  },
  formElement: CheckboxGroup,
  defaultProps: {
    options: [{ label: 'one', value: 1 }]
  },
  admin: {
    schema: new SimpleSchema({
      options: {
        type: Array,
        minCount: 1,
        uniforms: {
          label: 'Exit States',
          removeIcon: <i className="fa fa-minus" style={{ position: 'relative', top: '-15px', left: '17px'}}/> ,
          addIcon: <i className="pull-right fa fa-plus" style={{ position: 'relative', top: '-15px', right: '17px'}}/>,
          component: ListField,
        }
      },
      'options.$': {
        type: Object
      },
      'options.$.label': {
        type: String
      },
      'options.$.value': {
        type: String
      }
    })
  }
}];

const CustomAuto = props => {
  const builderComponent = components.find(c => c.type === props.componentType);
  const Component =  builderComponent ? builderComponent.formElement : AutoField;

  return (
    <Component {...props} />
  )
};

export default {
  AutoForm,
  AutoField: CustomAuto,
  components
}