import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';



export default function MediaCard({id,topic,description,handleDelete}) {
  

  

  
  const handleUpdate = () =>{
    console.log("Card is updated");

  }


  return (
    <Card sx={{ maxWidth: 345, borderRadius:5 ,boxShadow :12}}>
      
      <CardContent>
        
        <div className='text-2xl font-bold ' >
        {topic}
        
        
        </div>
        <div className='text-sm  px-2 py-4' >
            {description}
        </div>
      </CardContent>
      <CardActions className='flex justify-end'>

        <DeleteIcon className='text-red-600'onClick={() =>handleDelete(id)} style={{ cursor: 'pointer  ' }} />
        <EditIcon className='text-blue-600 hover:text-black'onClick={handleUpdate} style={{ cursor: 'pointer' }} />

        
      </CardActions>
    </Card>
  );
}
