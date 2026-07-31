export default {
  async fetch(request, env) {
    if (!env?.ASSETS?.fetch) {
      return new Response("Static assets binding is unavailable.", { status: 500 });
    }

    let response = await env.ASSETS.fetch(request);
    const acceptsHtml = request.headers.get("accept")?.includes("text/html");

    if (response.status === 404 && request.method === "GET" && acceptsHtml) {
      const url = new URL(request.url);
      url.pathname = "/index.html";
      url.search = "";
      response = await env.ASSETS.fetch(new Request(url, request));
    }

    return response;
  },
};
