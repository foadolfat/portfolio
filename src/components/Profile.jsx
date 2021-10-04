import * as React from "react";
import image from "../assets/pictures/profile_pic.jpg";
function Profile(){
    return(
        <div className="flex">
            <img src={image} className="object-scale-down w-1/2 h-1/2 rounded-lg "/>
            <div>
                <h1 className="text-3xl">Foad Olfat</h1>
                <p1>olfatfoad@gmail.com</p1>
            </div>
        </div>
    )
}
export default Profile;