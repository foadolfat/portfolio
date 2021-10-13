import * as React from "react";
import image from "../assets/pictures/profile_pic.jpg";
function Profile({pageOne}){
    return(
        <div className={
            pageOne ? "m-2 w-full transition-width ease-in-out duration-500 "
                    : "w-0 transition-width ease-in-out duration-500 "
        }>
            <img  src={image}></img>
        </div>
    )
}
export default Profile;