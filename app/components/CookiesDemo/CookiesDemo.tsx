

import { Form, useOutletContext, useTransition } from "remix";

import { AnimatePresence, motion } from "framer-motion";

import { CodeSnippet  } from "~/components/CodeSnippet/CodeSnippet";
import { useEffect } from "react";


export function CookiesDemo() {
 const { string } = useOutletContext<any>();

 const transition = useTransition();

 const {state} = transition;

 
 const isLoading = state !== "idle" ;


 useEffect(() => {
    console.log(string)
 }, [string])

 const metaData = {image: "/"}


  return (
    <div className="flex flex-wrap-reverse flex-direction-row align-items-center justify-content-center">
    <div style={{maxWidth: "500px", width: "100%"}} className="flex flex-direction-column align-items-center">
        <Form className="w-100p" method="post" action="/blog/experiments-with-remix-and-cloudflare-workers" replace>
        <input type="hidden" name="contract" value="0xd5dfb159788856f9fd5f897509d5a68b7b571ea8" />
        <input type="hidden" name="tokenId" value="0x0e89341c0000000000000000000000000000000000000000000000000000000000000004" />
        
        <button
            type="submit"
            className="button w-100p m-b-1rem"
        >
            Tacoshi Nakamoto
        </button>
        </Form>
        <Form className="w-100p" method="post" action="/blog/experiments-with-remix-and-cloudflare-workers" replace>
        <input type="hidden" name="contract" value="0xD5Dfb159788856f9fd5F897509d5a68b7b571Ea8" />
        <input type="hidden" name="tokenId" value="0x0e89341c0000000000000000000000000000000000000000000000000000000000000009" />
        <button
            type="submit"
            className="button w-100p m-b-1rem"
        >
            Quesadelon Musk
        </button>
        </Form>
        <div style={{maxHeight: "300px", maxWidth: "100%", overflowY: 'scroll'}}>
        {/*<CodeSnippet fileName={contract} string={JSON.stringify(metaData, null, 2)}/>*/}
        </div>
    </div>
    <div style={{display: 'flex', maxWidth: '500px', justifyContent: 'center',height: '504px', margin: '2rem'}}>
    <AnimatePresence exitBeforeEnter>
        {<motion.img
            key={metaData?.image}
            alt={`${metaData?.image} nft image`}
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
            duration: 1,
            }}
            className="ignore-markdown" 
            style={{width: "20rem"}} 
            src={metaData?.image}
        />}
    </AnimatePresence>
    </div>
    </div>
  );
}

