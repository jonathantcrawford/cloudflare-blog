import { useSpring, animated } from "react-spring";

import { About } from '~/components/About/About';

export default function Index() {
  const fade = useSpring({ 
    to: { opacity: 1 }, 
    from: { opacity: 0 },
    config: {
      duration: 600
    }
  });

  return (
      <animated.div className="grid-area-content w-100p" style={fade}>
        <About/>
      </animated.div>
  );
}
