import * as React from "react";
import image from "../assets/pictures/profile_pic.jpg";
function Profile(){
    return(
        <div className="flex h-full w-full">
            <div className="bg-blue-500 w-1/2">
                <img src={image} className="object-contain w-full h-full p-2"/> 
            </div>
            {/* <img src={image} className="object-contain rounded-lg w-1/2"/> */}
            <div className="bg-blue-500 w-1/2 p-4">
                <h1 className="text-3xl">Foad Olfat</h1>
                <p1>olfatfoad@gmail.com</p1>
            </div>
        </div>
    )
}
export default Profile;