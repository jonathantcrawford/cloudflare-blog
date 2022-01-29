export async function onRequest(context: any) {
  // Contents of context object
  const {
    request, // same as existing Worker API
    env, // same as existing Worker API
    params, // if filename includes [id] or [[path]]
    waitUntil, // same as ctx.waitUntil in existing Worker API
    next, // used for middleware or to fetch assets
    data, // arbitrary space for passing data between middlewares
  } = context;

  const upgradeHeader = request.headers.get("Upgrade");
  if (!upgradeHeader || upgradeHeader !== "websocket") {
    return new Response("Expected Upgrade: websocket", { status: 426 });
  }

  let cf = (request as any).cf as IncomingRequestCfProperties;

  let formattedLocation = "";
  if (cf.latitude) formattedLocation += "lat: " + cf.latitude + ", ";
  if (cf.longitude) formattedLocation += "lng: " + cf.longitude + ", ";
  if (cf.city) formattedLocation += cf.city + ", ";
  if (cf.region) formattedLocation += cf.region + ", ";
  formattedLocation += cf.country;

  const webSocketPair = new WebSocketPair();
  const [client, server] = Object.values(webSocketPair);

  //@ts-ignore
  server.accept();
  server.send("connection established");
  server.addEventListener("message", (event) => {
    server.send(
      JSON.stringify({
        location: formattedLocation,
        timestamp: new Date().toISOString(),
      })
    );
  });

  return new Response(null, {
    status: 101,
    webSocket: client,
  });
}
