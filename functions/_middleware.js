const LEGACY_HOSTNAME = "rosselgalarzarafael.pages.dev";
const CANONICAL_HOSTNAME = "web29.uk";

export async function onRequest(context) {
  const url = new URL(context.request.url);

  if (url.hostname === LEGACY_HOSTNAME) {
    url.hostname = CANONICAL_HOSTNAME;
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
}
