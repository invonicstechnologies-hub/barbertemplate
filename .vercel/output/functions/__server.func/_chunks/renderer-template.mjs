import { r as HTTPResponse } from "../_libs/h3+rou3+srvx.mjs";
//#region #nitro/virtual/renderer-template
var rendererTemplate = () => new HTTPResponse("<!DOCTYPE html>\n<html lang=\"en\" class=\"dark\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>D&M Parlour</title>\n    \n    <meta name=\"theme-color\" content=\"#0A0A0A\" />\n    <meta property=\"og:type\" content=\"website\" />\n    <meta property=\"og:site_name\" content=\"D&M Parlour\" />\n    <meta name=\"twitter:card\" content=\"summary_large_image\" />\n    \n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\" />\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin=\"anonymous\" />\n    <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap\" />\n    \n    <script type=\"application/ld+json\">\n    {\n      \"@context\": \"https://schema.org\",\n      \"@type\": \"HairSalon\",\n      \"name\": \"D&M Parlour\",\n      \"description\": \"Barbershop and unisex salon in Ongata Rongai, Kenya.\",\n      \"address\": {\n        \"@type\": \"PostalAddress\",\n        \"streetAddress\": \"Maasai Mall\",\n        \"addressLocality\": \"Ongata Rongai\",\n        \"addressRegion\": \"Kajiado\",\n        \"addressCountry\": \"KE\"\n      },\n      \"telephone\": \"+254712345678\"\n    }\n    <\/script>\n  </head>\n  <body class=\"bg-background text-foreground\">\n    <div id=\"root\"></div>\n    <script type=\"module\" src=\"/src/client.tsx\"><\/script>\n  </body>\n</html>\n", { headers: { "content-type": "text/html; charset=utf-8" } });
//#endregion
//#region node_modules/nitro/dist/runtime/internal/routes/renderer-template.mjs
function renderIndexHTML(event) {
	return rendererTemplate(event.req);
}
//#endregion
export { renderIndexHTML as default };
