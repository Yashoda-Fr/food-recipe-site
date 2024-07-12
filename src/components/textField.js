import * as React from 'react';
import TextField from '@mui/material/TextField';


export default function FormPropsTextFields(props) {
  return (

    <div className='m-3'>     
      <TextField
          id={props.id}
          label={props.label}
          type={props.type}
          variant={props.variant}
        />
      </div>


  );
}
