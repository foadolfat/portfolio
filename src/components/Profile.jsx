import * as React from "react";
import image from "../assets/pictures/profile_pic.jpg";
function Profile({pageOne}){
    return(
        <div className={
            pageOne ? "m-2 w-full transition-all transition-width duration-500 "
                    : "w-0 transition-all transition-width duration-500 "
        }>
            <img  src={image}></img>
        </div>
    )
}
export default Profile;