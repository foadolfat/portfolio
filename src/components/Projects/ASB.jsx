import * as React from "react"
import Carousel from 'react-bootstrap/Carousel';
import {NavLink} from "react-router-dom"

function ASB(){

    return(
        <div className="flex flex-col items-center bg-gray-700 p-4">
            <div className="flex justify-center items-center text-3xl font-bold">
                ACE STUDY BUDDY
            </div>
            <div className="flex flex-col justify-center items-center p-4">
                <p1 className="text-xl font-bold">A tinder inspired web app that matches students to study together.</p1>
                <ul className="p-4 list-disc">
                    <li>Frontend uses <strong>React</strong> and <strong>TailwindCSS</strong> and makes extensive use of physics based animation library "<strong>React Spring</strong>" throughout the design.</li>
                    <li>Backend uses <strong>Express</strong> to create API endpoint and stores user data in a <strong>MySQL</strong> database.</li>
                    <li>Live chat uses <strong>Socket io</strong> to enable live communication between users in app.</li>
                </ul>
            </div>
            <div className="flex w-full h-full m-2">
            
                <NavLink to="https://github.com/foadolfat/letstudybuddy-frontend" className=" bg-blue-500 m-4 p-4 w-full h-20 flex flex-col items-center justify-center rounded-lg shadow-lg no-underline text-white text-center">
                    <span>Go to Project Frontend GitHub</span>
                </NavLink>
                <NavLink to="https://github.com/foadolfat/letstudybuddy-backend" className=" bg-blue-500 m-4 p-4 w-full h-20 flex flex-col items-center justify-center rounded-lg shadow-lg no-underline text-white text-center">
                    <span>Go to Project Backend GitHub</span>
                </NavLink>
                <NavLink to="https://www.acestudybuddy.com" className=" bg-red-500 m-4 p-4 w-full h-20 flex flex-col items-center justify-center rounded-lg shadow-lg no-underline text-white text-center">
                    <span>Go to Project Webpage</span>
                </NavLink>
            
            </div>
            <div className="flex flex-col items-center w-full w-full p-4">
                 <h4>Screenshots:</h4>
                 <div className="">
                     <Carousel className="w-800 h-400">
                         <Carousel.Item interval={2000}>
                             <img
                             className="d-block w-800 h-400"
                             src="https:media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
                             alt="Image One"
                             />
                             <Carousel.Caption>
                             <h3>Label for first slide</h3>
                             <p>Sample Text for Image One</p>
                             </Carousel.Caption>
                         </Carousel.Item>
                         <Carousel.Item interval={2000}>
                             <img
                             className="d-block w-800 h-400"
                             src="https:media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
                             alt="Image Two"
                             />
                             <Carousel.Caption>
                             <h3>Label for second slide</h3>
                             <p>Sample Text for Image Two</p>
                             </Carousel.Caption>
                         </Carousel.Item>
                     </Carousel>
                 </div>
             </div>
        </div>
    )

}

export default ASB