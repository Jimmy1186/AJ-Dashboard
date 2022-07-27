import React from "react";
import DehazeIcon from "@mui/icons-material/Dehaze";

type navStateType ={
    navState:boolean
    setNavState:React.Dispatch<React.SetStateAction<boolean>>
}

function NavBtn(props:navStateType) {
  return (
    <div className="relative lg:hidden">
      <div className="fixed right-6" onClick={()=>props.setNavState(!props.navState)}>
        <DehazeIcon sx={{fontSize:30}}/>
      </div>
    </div>
  );
}

export default NavBtn;
