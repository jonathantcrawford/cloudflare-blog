

import { Form, useOutletContext, useTransition } from "remix";

import { AnimatePresence, motion } from "framer-motion";

import { CodeSnippet  } from "~/components/CodeSnippet/CodeSnippet";


export function ABCookieDemo() {
 const { metaData, contract } = useOutletContext<any>();

 const transition = useTransition();

 const {state} = transition;

 const isLoading = state !== "idle" ;



  return (
    <div>
      <h1>AB testing with buckets</h1>
      <p>
        In this demo we use cookies to assign a bucket with the variant to show.
        When you first visited this page you were randomly assigned a bucket.
      </p>
      <p>
        Click one of the buttons below to assign the bucket you are in. Even
        after re-loading the page you will remain in the assigned bucket.
      </p>

      <p>
          Cookies can be used for authentication, theme switching and more.
      </p>

      <p>
          Design a cookie consent protection component that can be unlocked when the user clicks agree.
          Each use of a unique cookie receive explicit consent.
      </p>

      
        <div className="flex flex-wrap-reverse flex-direction-row align-items-center justify-content-center">
        <div style={{maxWidth: "500px", width: "100%"}} className="flex-1 flex flex-direction-column align-items-center">
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
            <CodeSnippet fileName={contract} string={JSON.stringify(metaData, null, 2)}/>
            </div>
        </div>
        <div style={{flex: 1, display: 'flex', justifyContent: 'center',height: '504px', margin: '1rem'}}>
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


    </div>
  );
}

