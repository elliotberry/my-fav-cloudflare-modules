async function genericGetCache(event, next) {
  const url = new URL(event.request.url);
  if (url.searchParams.get('bust') === 'true') {
    return next(event);
  } else {
    const cache = caches.default;

    let response = await cache.match(event.request);

    if (!response) {
      response = await next(event);
      const headers = {'cache-control': 'public, max-age=14400'};
      response = new Response(response.body, {...response, headers});
      event.waitUntil(cache.put(event.request, response.clone()));
    }

    return response;
  }
}

export default genericGetCache;
