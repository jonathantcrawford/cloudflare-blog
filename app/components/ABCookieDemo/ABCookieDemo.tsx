

import { Form, useOutletContext, useTransition } from "remix";

import { AnimatePresence, motion } from "framer-motion";


export function ABCookieDemo() {
 const { bucket } = useOutletContext<any>();

 const transition = useTransition();

 const {state} = transition;

 const isLoading = state === "submitting" || state === "loading";



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

      <p><strong>Bucket: {bucket ? bucket : "none"}</strong></p>

      <div>
        <Form method="post" action="/blog/experiments-with-remix-and-cloudflare-workers" replace>
          <input type="hidden" name="bucket" value="" />
          <button type="submit" className={""}>
            Remove Bucket
          </button>
        </Form>{" "}
        <Form method="post" action="/blog/experiments-with-remix-and-cloudflare-workers" replace>
          <input type="hidden" name="bucket" value="a" />
          <button
            type="submit"
            className={""}
          >
            Bucket A
          </button>
        </Form>{" "}
        <Form method="post" action="/blog/experiments-with-remix-and-cloudflare-workers" replace>
          <input type="hidden" name="bucket" value="b" />
          <button
            type="submit"
            className=""
          >
            Bucket B
          </button>
        </Form>
      </div>

    <AnimatePresence exitBeforeEnter>
        <motion.img
            key={isLoading.toString()}
            alt={`${bucket || "default"} bucket image`}
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
              type: "tween",
              duration: 0.8,
            }}
            src={(() => {
            if (isLoading) return "/static/images/how-to-host-a-site-on-ipfs/screenshot_4.webp"
            switch (bucket) {
                case "a":
                return "/static/images/how-to-host-a-site-on-ipfs/screenshot_2.webp";
                case "b":
                return "/static/images/how-to-host-a-site-on-ipfs/screenshot_3.webp";
                default:
                return "/static/images/how-to-host-a-site-on-ipfs/screenshot_1.webp";
            }
            })()}
        />
    </AnimatePresence>

    </div>
  );
}

