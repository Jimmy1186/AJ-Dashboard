import React from 'react'
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import Paper from "@mui/material/Paper";


function TopBar() {
  return (

  <Paper elevation={3}>
    <div className="top  h-20  flex justify-center items-center md:justify-start pl-10">

    <TextField
     id="input-with-icon-textfield"
     label="資料收尋"
     InputProps={{
       startAdornment: (
         <InputAdornment position="start">
           <SearchIcon sx={{fontSize:30}}/>
         </InputAdornment>
       ),
     }}
     variant="standard"
   />
   </div>
   </Paper >

  
    
  )
}

export default TopBar