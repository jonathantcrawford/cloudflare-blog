import {
    Outlet, LinksFunction, useCatch,
  } from "remix";
  
  import { useSpring, animated } from "react-spring";

  import styles from "~/styles/markdown.css";

  import { links as codeSnippetLinks } from "~/components/CodeSnippet/CodeSnippet";
  import saygonFontStylesUrl from "~/styles/fonts/saygon.css";
  

  export const links: LinksFunction = () => {
      return [
        ...codeSnippetLinks(),
        { rel: "stylesheet",  href: styles},
        { rel: "stylesheet",  href: saygonFontStylesUrl },
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


  export function CatchBoundary() {
    let caught = useCatch();
  
    switch (caught.status) {
      case 401:
      case 404:
        return (
            <h1>
              {caught.status} {caught.statusText}
            </h1>
        );
  
      default:
        throw new Error(
          `Unexpected caught response with status: ${caught.status}`
        );
    }
  }
  
  export function ErrorBoundary({ error }: { error: Error }) {
    console.error(error);
  
    return (
      <div className="color-error font-sans-3 grid-area-content w-100p">
        <h1 className="">App Error</h1>
        <pre className="white-space-normal">{error.message}</pre>
        <p>
          Replace this UI with what you want users to see when your app throws
          uncaught errors.
        </p>
      </div>
    );
  }