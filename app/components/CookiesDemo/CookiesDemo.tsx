import { useEffect, useState } from "react";

import { Form, useOutletContext, useTransition } from "remix";

import { AnimatePresence, motion } from "framer-motion";

import { CodeSnippet  } from "~/components/CodeSnippet/CodeSnippet";



export function CookiesDemo() {
 const {metadata, contract} = useOutletContext<any>();

 const [currentKey, setCurrentKey] = useState<string>(metadata?.image);


 const transition = useTransition();

 const {state} = transition;

 
 const isLoading = state !== "idle";


 useEffect(() => {
     if (metadata) {
        if (!isLoading && metadata.image != currentKey) {
            setCurrentKey(metadata.image)
        }
     }

 }, [isLoading, metadata])



  return (
    <div className="flex flex-wrap-reverse flex-direction-row align-items-center justify-content-center">
    <div style={{maxWidth: "500px", width: "100%"}} className="flex flex-direction-column align-items-center">
        <Form className="w-100p" method="post" action="/blog/experiments-with-remix-and-cloudflare-workers" replace>
        <input type="hidden" name="contract" value="0x0AE53C425F0725123205fd4CBDFB1Ac8240445cF" />
        <input type="hidden" name="tokenId" value="9264" />
        
        <button
            type="submit"
            className="button w-100p m-b-1rem"
        >
            BitBurger #9264
        </button>
        </Form>
        <Form className="w-100p" method="post" action="/blog/experiments-with-remix-and-cloudflare-workers" replace>
        <input type="hidden" name="contract" value="0x0AE53C425F0725123205fd4CBDFB1Ac8240445cF" />
        <input type="hidden" name="tokenId" value="2558" />
        <button
            type="submit"
            className="button w-100p m-b-1rem"
        >
            BitBurger #2558
        </button>
        </Form>
        <div style={{maxHeight: "300px", maxWidth: "100%", overflowY: 'scroll'}}>
        <CodeSnippet fileName={contract} string={JSON.stringify(metadata, null, 2)}/>
        </div>
    </div>
    <div style={{display: 'flex', maxWidth: '450px', justifyContent: 'center',height: '300px', margin: '2rem'}}>
    <AnimatePresence exitBeforeEnter>
        {isLoading && <motion.p 
            key={isLoading.toString()} 
            className="flex align-items-center justify-content-center"
            initial="initial"
            animate="in"
            exit="out"
            variants={{
                initial: {
                    opacity: 0,
                },
                in: {
                    opacity: 1,
                },
                out: {
                    opacity: 0,
                },
            }}
            transition={{
            type: "spring",
            duration: 0.6,
            }}
            style={{width: "20rem", color: "var(--color-display-primary)"}} >
                loading
            </motion.p>}
        {!isLoading && <motion.img
            key={metadata?.image}
            alt={`${metadata && metadata?.image?.replace(/ipfs:\//g, "")} nft image`}
            initial="initial"
            animate="in"
            exit="out"
            variants={{
            initial: {
                opacity: 0,
                scale: '1%'
            },
            in: {
                opacity: 1,
                scale: '100%',
            },
            out: {
                opacity: 0,
                scale: '1%'
            },
            }}
            transition={{
            type: "spring",
            duration: 0.8,
            }}
            className="ignore-markdown" 
            style={{width: "20rem"}} 
            src={metadata && `https://gateway.ipfs.io/ipfs/${metadata?.image?.replace(/ipfs:\//g, "")}`}
        />}
    </AnimatePresence>
    </div>
    </div>
  );
}

