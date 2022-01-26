import {
    Link, Outlet
  } from "remix";
  
  import { useSpring, animated } from "react-spring";

  
  export default function Blog() {
    const fade = useSpring({ 
        to: { opacity: 1 }, 
        from: { opacity: 0 },
        config: {
          duration: 600
        }
      });
  
    return (
        <animated.div className="grid-area-content w-100p" style={fade}>
            <Outlet/>
        </animated.div>
    );
  }