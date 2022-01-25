import {
  Link
} from "remix";

import { useSpring, animated } from "react-spring";

export default function Index() {
  const fade = useSpring({ 
    to: { opacity: 1 }, 
    from: { opacity: 0 },
    config: {
      duration: 600
    }
  });

  const bounce = useSpring({ 
    to: { y: "0%" }, 
    from: { y: "100%" },
    config: {
      frequency: 0.4,
      damping: 0.3
    }
  })

  return (
    <>
      <animated.div className="grid-area-content w-100p" style={fade}>
          about
        <Link to="/blog">blogs</Link>
      </animated.div>
      

    <animated.div  className="grid-area-footer grid-ps-center w-100p " style={bounce}>
      Footer
    </animated.div>
    </>
  );
}
