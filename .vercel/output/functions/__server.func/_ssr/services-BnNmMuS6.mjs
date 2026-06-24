import { i as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { a as formatKES, c as team_1_default, i as cn, l as team_3_default, o as services, t as Button } from "./data-ChKvAJvb.mjs";
import { t as SectionHeading } from "./SectionHeading-BI761MFX.mjs";
import { i as interior_default, n as gallery_3_default, r as hero_default, t as gallery_1_default } from "./gallery-3-CL30xlep.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as ArrowRight, d as Clock } from "../_libs/lucide-react.mjs";
import { t as gallery_2_default } from "./gallery-2-BD8rGwSy.mjs";
import { i as Trigger, n as List, r as Root2, t as Content } from "../_libs/radix-ui__react-tabs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-BnNmMuS6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Tabs = Root2;
var TabsList = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
	ref,
	className: cn("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground", className),
	...props
}));
TabsList.displayName = List.displayName;
var TabsTrigger = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger, {
	ref,
	className: cn("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow", className),
	...props
}));
TabsTrigger.displayName = Trigger.displayName;
var TabsContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {
	ref,
	className: cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className),
	...props
}));
TabsContent.displayName = Content.displayName;
var galleryImages = [
	{
		src: gallery_1_default,
		alt: "Skin fade haircut result at D&M Parlour barbershop"
	},
	{
		src: gallery_2_default,
		alt: "Knotless braids styling at D&M Parlour Ongata Rongai"
	},
	{
		src: hero_default,
		alt: "Skin fade haircut result at D&M Parlour barbershop"
	},
	{
		src: gallery_3_default,
		alt: "Beard trim and shave service at D&M Parlour Ongata Rongai"
	},
	{
		src: "/assets/gallery-4-Cx8slZff.jpg",
		alt: "Manicure and pedicure salon service at D&M Parlour Ongata Rongai"
	},
	{
		src: interior_default,
		alt: "D&M Parlour barbershop and salon interior, Ongata Rongai"
	},
	{
		src: team_1_default,
		alt: "Skin fade haircut result at D&M Parlour barbershop"
	},
	{
		src: team_3_default,
		alt: "Knotless braids styling at D&M Parlour Ongata Rongai"
	}
];
function ServiceList({ category }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
		children: services.filter((s) => s.category === category).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "flex flex-col rounded-sm border border-primary/20 bg-card p-6 transition hover:border-primary hover:gold-glow",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-xl font-bold uppercase tracking-wide",
					children: s.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 flex-1 text-sm text-muted-foreground",
					children: s.description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex items-center justify-between border-t border-border pt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display text-2xl font-bold text-primary",
						children: formatKES(s.price)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-1 flex items-center gap-1 text-xs text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3 w-3" }),
							" ",
							s.duration
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "sm",
						className: "font-display text-xs font-semibold uppercase tracking-wider",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/book",
							search: { service: s.id },
							children: ["Book ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1 h-3 w-3" })]
						})
					})]
				})
			]
		}, s.id))
	});
}
function ServicesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-primary/20 py-16 sm:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "The Menu",
					title: "Our Services",
					description: "Transparent KES pricing for every chair. Tap a service to start a booking.",
					as: "h1"
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-16 sm:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
					defaultValue: "barbershop",
					className: "w-full",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
							className: "mx-auto grid h-auto max-w-md grid-cols-2 rounded-sm border border-primary/30 bg-card p-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "barbershop",
								className: "font-display text-sm font-bold uppercase tracking-widest data-[state=active]:bg-primary data-[state=active]:text-primary-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									role: "heading",
									"aria-level": 2,
									className: "contents",
									children: "Barbershop"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "salon",
								className: "font-display text-sm font-bold uppercase tracking-widest data-[state=active]:bg-primary data-[state=active]:text-primary-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									role: "heading",
									"aria-level": 2,
									className: "contents",
									children: "Salon"
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "barbershop",
							className: "mt-10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceList, { category: "barbershop" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "salon",
							className: "mt-10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceList, { category: "salon" })
						})
					]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-primary/20 bg-card/50 py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Receipts",
					title: "Our Work",
					align: "center",
					description: "A look at recent work from the chairs."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid grid-cols-2 gap-3 md:grid-cols-4",
					children: galleryImages.map((img, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hover-zoom group relative aspect-square overflow-hidden rounded-sm border border-primary/20 transition hover:border-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: img.src,
							alt: img.alt,
							loading: "lazy",
							className: "h-full w-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 ring-0 ring-primary/0 transition group-hover:ring-2 group-hover:ring-primary/60" })]
					}, i))
				})]
			})
		})
	] });
}
//#endregion
export { ServicesPage as component };
