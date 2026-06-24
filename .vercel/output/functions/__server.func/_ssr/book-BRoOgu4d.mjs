import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as stringType, n as zodValidator, r as objectType, t as fallback } from "../_libs/tanstack__zod-adapter+zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/book-BRoOgu4d.js
var $$splitComponentImporter = () => import("./book-Ba51yOxY.mjs");
var bookSearchSchema = objectType({
	service: fallback(stringType().optional(), void 0),
	stylist: fallback(stringType().optional(), void 0)
});
var Route = createFileRoute("/book")({
	validateSearch: zodValidator(bookSearchSchema),
	head: () => ({
		meta: [
			{ title: "Book an Appointment | D&M Parlour Ongata Rongai" },
			{
				name: "description",
				content: "Book your next haircut, fade, braids, or salon treatment at D&M Parlour in Ongata Rongai. Quick online booking — pick your service, stylist, and time."
			},
			{
				property: "og:title",
				content: "Book an Appointment | D&M Parlour Ongata Rongai"
			},
			{
				property: "og:description",
				content: "Book your next haircut, fade, braids, or salon treatment at D&M Parlour in Ongata Rongai. Quick online booking — pick your service, stylist, and time."
			},
			{
				property: "og:url",
				content: "/book"
			}
		],
		links: [{
			rel: "canonical",
			href: "/book"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
