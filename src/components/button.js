import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Buttons(props) {
  return (
    <div>
      
      <Button  onClick={props.onClick} variant="contained">{props.name}</Button>
      
    </div>
  );
}
