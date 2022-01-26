import {
    Link, Outlet, LinksFunction
  } from "remix";
  
  import { useSpring, animated } from "react-spring";

  import styles from "~/styles/markdown.css";

  import { links as codeSnippetLinks } from "~/components/CodeSnippet/CodeSnippet";
  

  export const links: LinksFunction = () => {
      return [
        ...codeSnippetLinks(),
        { rel: "stylesheet",  href: styles},    
      ];
    };

  
  export default function Blog() {
    const fade = useSpring({ 
        to: { opacity: 1 }, 
        from: { opacity: 0 },
        config: {
          duration: 600
        }
      });
  
    return (
        <animated.div className="grid-area-content w-100p markdown" style={fade}>
            <Outlet/>
        </animated.div>
    );
  }