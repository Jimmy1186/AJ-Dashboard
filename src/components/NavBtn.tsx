import React from "react";
import DehazeIcon from "@mui/icons-material/Dehaze";

type navStateType ={
    navState:boolean
    setNavState:React.Dispatch<React.SetStateAction<boolean>>
}

function NavBtn(props:navStateType) {
  return (
    <div className="relative md:hidden">
      <div className="fixed right-6 top-3" onClick={()=>props.setNavState(!props.navState)}>
        <DehazeIcon sx={{fontSize:30}}/>
      </div>
    </div>
  );
}

export default NavBtn;
