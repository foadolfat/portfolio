import * as React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import { Parallax, ParallaxLayer} from '@react-spring/parallax'
import Profile from "./Profile";
import ASB from "./Projects/ASB";

function Gallery(){
    let parallax;
    const [pageOne, setPageOne] = new React.useState(true);

    React.useEffect(()=>{
        
    }, [])

    const handleClick = (page) => {
        if(pageOne && page !== 0){
            setPageOne(false);
        } else if(pageOne && page === 0){
            setPageOne(true);
        } else if(!pageOne && page === 0) {
            setPageOne(true);
        } else if(!pageOne && page !== 0) {
            setPageOne(false);
        }
    }

    
    return (
        <div className="no-scrollbar overflow-x-hidden">
            <div className="flex relative h-screen">
                <div  className={
                    pageOne ? "flex flex-col transition-all duration-750 ease-in-out w-full overflow-y-auto bg-page-background"
                            : "flex flex-col transition-all duration-750 ease-in-out w-1/3 overflow-y-auto bg-page-background"
                    }>
                    
                    <div className={
                             pageOne ? "flex"
                                     : "flex"
                             }>
                        <div className="">
                            <Profile pageOne={pageOne}/>
                        </div>
                        <div className={
                             pageOne ? "flex-wrap h-full w-full"
                                     : "flex-wrap h-full w-full"
                             }> 
                            <div className="flex justify-center items-center w-min m-auto">
                                
                                <div className="flex-wrap">
                                    <div className="text-center">
                                        <h1>Foad Olfat</h1>
                                        <p1>olfatfoad@gmail.com</p1>
                                        <br/>
                                        <p1>916-540-8480</p1>
                                    </div>
                                    <button className="w-96 h-40
                                                        
                                                       bg-surface m-2 rounded-lg hover:bg-gray-800 hover:text-white"
                                            onClick={() => {
                                                        parallax.scrollTo(0);
                                                        handleClick(0);
                                                    }}>
                                        Go 1
                                    </button>
                                    <button className="w-96 h-40
                                                        
                                                       bg-surface m-2 rounded-lg hover:bg-gray-800 hover:text-white"
                                            onClick={() => {
                                                        parallax.scrollTo(1);
                                                        handleClick(1);
                                                    }}>
                                        Go 2
                                    </button>
                                    <button className="w-96 h-40
                                                        
                                                       bg-surface m-2 rounded-lg hover:bg-gray-800 hover:text-white"
                                            onClick={() => {
                                                        parallax.scrollTo(2);
                                                        handleClick(2);
                                                    }}>
                                        Go 3
                                    </button>
                                    <button className="w-96 h-40
                                                        
                                                       bg-surface m-2 rounded-lg hover:bg-gray-800 hover:text-white"
                                            onClick={() => {
                                                        parallax.scrollTo(3);
                                                        handleClick(3);
                                                    }}>
                                        Go 4
                                    </button>
                                    <button className="w-96 h-40
                                                        
                                                       bg-surface m-2 rounded-lg hover:bg-gray-800 hover:text-white"
                                            onClick={() => {
                                                        parallax.scrollTo(4);
                                                        handleClick(4);
                                                    }}>
                                        Go 5
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
                <div className="">
                    <Parallax className="overflow-hidden" pages={5} enabled={true} ref={ref => parallax = ref} horizontal={true} >
                        <ParallaxLayer className="overflow-auto" offset={1} speed={0.25}>
                            <div className="w-2/3 h-full text-white">
                                <ASB/>
                            </div>
                        </ParallaxLayer>
                        <ParallaxLayer className="" offset={2} speed={0.25}>
                            <div className="w-2/3 h-full bg-gray-700 text-white">
                                World3
                            </div>
                        </ParallaxLayer>
                        <ParallaxLayer className="" offset={3} speed={0.25}>
                            <div className="w-2/3 h-full bg-gray-700 text-white">
                                World4
                            </div>
                        </ParallaxLayer>
                        <ParallaxLayer className="" offset={4} speed={0.25}>
                            <div className="w-2/3 h-full bg-gray-700 text-white">
                                World5
                            </div>
                        </ParallaxLayer>
                    </Parallax>
                </div>
            </div>
        </div>
      );

}

export default Gallery;



// <div className="w-full h-full bg-gray-200">
//                 Hello
//             </div>
//             <div>
//                 <h4>React-Bootstrap Carousel Component</h4>
//                 <Carousel className="w-full h-full">
//                     <Carousel.Item interval={3000}>
//                         <img
//                         className="d-block w-100"
//                         src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
//                         alt="Image One"
//                         />
//                         <Carousel.Caption>
//                         <h3>Label for first slide</h3>
//                         <p>Sample Text for Image One</p>
//                         </Carousel.Caption>
//                     </Carousel.Item>
//                     <Carousel.Item interval={3000}>
//                         <img
//                         className="d-block w-100"
//                         src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
//                         alt="Image Two"
//                         />
//                         <Carousel.Caption>
//                         <h3>Label for second slide</h3>
//                         <p>Sample Text for Image Two</p>
//                         </Carousel.Caption>
//                     </Carousel.Item>
//                 </Carousel>
//             </div>




// <div  className={
//                     pageOne ? "flex flex-col transition-all duration-750 ease-in-out w-full overflow-y-auto bg-page-background"
//                             : "flex flex-col transition-all duration-750 ease-in-out w-1/3 overflow-y-auto bg-page-background"
//                     }>
                    
//                     <div className="flex">
//                         <div className={
//                              pageOne ? ""
//                                      : "hidden"
//                              }>
//                             <Profile pageOne={pageOne}/>
//                         </div>
//                         <div className={
//                              pageOne ? "flex-wrap h-full w-full "
//                                      : "flex-wrap h-full w-full "
//                              }> 
//                             <div className="flex justify-center items-center w-min m-auto">
                                
//                                 <div className="flex-wrap">
//                                     <div className="text-center">
//                                         <h1>Foad Olfat</h1>
//                                         <p1>olfatfoad@gmail.com</p1>
//                                         <br/>
//                                         <p1>916-540-8480</p1>
//                                     </div>
//                                     <button className="w-96 h-40
                                                        
//                                                        bg-surface m-2 rounded-lg hover:bg-gray-800 hover:text-white"
//                                             onClick={() => {
//                                                         parallax.scrollTo(0);
//                                                         handleClick(0);
//                                                     }}>
//                                         Go 1
//                                     </button>
//                                     <button className="w-96 h-40
                                                        
//                                                        bg-surface m-2 rounded-lg hover:bg-gray-800 hover:text-white"
//                                             onClick={() => {
//                                                         parallax.scrollTo(1);
//                                                         handleClick(1);
//                                                     }}>
//                                         Go 2
//                                     </button>
//                                     <button className="w-96 h-40
                                                        
//                                                        bg-surface m-2 rounded-lg hover:bg-gray-800 hover:text-white"
//                                             onClick={() => {
//                                                         parallax.scrollTo(2);
//                                                         handleClick(2);
//                                                     }}>
//                                         Go 3
//                                     </button>
//                                     <button className="w-96 h-40
                                                        
//                                                        bg-surface m-2 rounded-lg hover:bg-gray-800 hover:text-white"
//                                             onClick={() => {
//                                                         parallax.scrollTo(3);
//                                                         handleClick(3);
//                                                     }}>
//                                         Go 4
//                                     </button>
//                                     <button className="w-96 h-40
                                                        
//                                                        bg-surface m-2 rounded-lg hover:bg-gray-800 hover:text-white"
//                                             onClick={() => {
//                                                         parallax.scrollTo(4);
//                                                         handleClick(4);
//                                                     }}>
//                                         Go 5
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
                    
//                 </div>