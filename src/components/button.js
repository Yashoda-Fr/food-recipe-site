import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Buttons(props) {
  return (
    <div>
      
      <Button variant="contained">{props.name}</Button>
      
    </div>
  );
}
