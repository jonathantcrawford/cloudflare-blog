import { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

function convertFromHex(hex:any) {
  var hex = hex.toString();//force conversion
  var str = '';
  for (var i = 0; i < hex.length; i += 2)
      str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  return str;
}

export function NFTViewer({contract, tokenId}: any) {

  const [url, setUrl] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res: any = await fetch(
        '/api/ping',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ contract, tokenId })
        }
      );
      const data = await res.json();
      const url: any = convertFromHex(data.result).match(/https.*/g)?.toString();
      const metaReq = await fetch(url);
      const metaData: any = await metaReq.json();
      setUrl(metaData.image);
      
    };

    fetchData();
  }, []);

  return (
    
    <p className="flex flex-direction-column align-items-center">
      {url && <strong>{url}</strong>}
      <AnimatePresence exitBeforeEnter>
        {url && 
          <motion.img 
            key="" 
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
            className="ignore-markdown" 
            style={{width: "20rem"}} 
            src={url}/>}
      </AnimatePresence>
    </p>
  )
}

