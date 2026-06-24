import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { i as cn } from "./data-ChKvAJvb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SectionHeading-BI761MFX.js
var import_jsx_runtime = require_jsx_runtime();
function SectionHeading({ eyebrow, title, description, align = "left", as = "h2", className }) {
	const Component = as;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("max-w-2xl", align === "center" && "mx-auto text-center", className),
		children: [
			eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("flex items-center gap-3", align === "center" && "justify-center"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-primary" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-xs font-bold uppercase tracking-[0.3em] text-primary",
						children: eyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-primary" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
				className: cn("mt-4 font-display font-bold uppercase tracking-wide", as === "h1" ? "text-4xl sm:text-5xl md:text-6xl" : "text-3xl sm:text-4xl md:text-5xl"),
				children: title
			}),
			description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-base text-muted-foreground",
				children: description
			})
		]
	});
}
//#endregion
export { SectionHeading as t };
