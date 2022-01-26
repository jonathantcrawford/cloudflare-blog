import {
    LinksFunction
  } from "remix";
  
import { useSpring, animated } from "react-spring";

import styles from "~/styles/markdown.css";
  

export const links: LinksFunction = () => {
    return [
      { rel: "stylesheet",  href: styles},    
    ];
  };
  
export default function DesignSystem() {
    const fade = useSpring({ 
        to: { opacity: 1 }, 
        from: { opacity: 0 },
        config: {
        duration: 600
        }
    });

    return (
        <animated.div className="grid-area-content w-100p" style={fade}>
            <div className="flex flex-direction-row flex-wrap justify-content-flex-start h-1rem">
                <div className="flex-1 bg-color-1"/>
                <div className="flex-1 bg-color-2"/>
                <div className="flex-1 bg-color-3"/>
                <div className="flex-1 bg-color-4"/>
                <div className="flex-1 bg-color-5"/>
                <div className="flex-1 bg-color-6"/>
                <div className="flex-1 bg-color-7"/>
                <div className="flex-1 bg-color-8"/>
                <div className="flex-1 bg-color-9"/>
                <div className="flex-1 bg-color-10"/>
            </div>
            <h1>H1 Heading</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <h2>H2 Heading</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <h3>H3 Heading</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <h4>H4 Heading</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <h5>H5 Heading</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </animated.div>
    );
}
  