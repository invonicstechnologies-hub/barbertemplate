import { i as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { i as cn, n as businessInfo, t as Button } from "./data-ChKvAJvb.mjs";
import { t as SectionHeading } from "./SectionHeading-BI761MFX.mjs";
import { a as MessageCircle, c as Mail, d as Clock, i as Phone, s as MapPin } from "../_libs/lucide-react.mjs";
import { n as Label, t as Input } from "./label-CV4mHOfH.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-Bvr0wheP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
function ContactPage() {
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		email: "",
		message: ""
	});
	function handleSubmit(e) {
		e.preventDefault();
		if (!form.name || !form.email || !form.message) {
			toast.error("Please fill in all fields");
			return;
		}
		toast.success("Message sent", { description: "We'll get back to you within a day." });
		setForm({
			name: "",
			email: "",
			message: ""
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b border-primary/20 py-16 sm:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Drop In",
				title: "Visit Us",
				description: "Slide into the DMs, ring the chair or just walk in. We're easy to find.",
				as: "h1"
			})
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-16 sm:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCard, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-5 w-5" }),
							label: "Address",
							value: businessInfo.address
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCard, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-5 w-5" }),
							label: "Phone",
							value: businessInfo.phone,
							href: `tel:${businessInfo.phoneRaw}`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCard, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-5 w-5" }),
							label: "WhatsApp",
							value: "Chat with us",
							href: businessInfo.whatsapp
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCard, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-5 w-5" }),
							label: "Email",
							value: businessInfo.email,
							href: `mailto:${businessInfo.email}`
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 rounded-sm border border-primary/30 bg-card p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "flex items-center gap-2 font-display text-sm font-bold uppercase tracking-widest text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-4 w-4" }), " Opening Hours"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2",
						children: businessInfo.hours.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex justify-between border-b border-border/40 py-2 text-sm last:border-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display font-semibold uppercase tracking-wide text-foreground",
								children: h.day
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: h.time
							})]
						}, h.day))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 aspect-video overflow-hidden rounded-sm border border-primary/30",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						title: "D&M Parlour location",
						src: "https://www.google.com/maps?q=Ongata+Rongai,+Kenya&output=embed",
						className: "h-full w-full grayscale",
						loading: "lazy",
						referrerPolicy: "no-referrer-when-downgrade"
					})
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-sm border border-primary/30 bg-card p-6 sm:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-bold uppercase tracking-wide",
						children: "Send Us a Message"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: "For collabs, group bookings or general questions."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSubmit,
						className: "mt-6 grid gap-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "cname",
								children: "Name"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "cname",
								value: form.name,
								onChange: (e) => setForm({
									...form,
									name: e.target.value
								}),
								placeholder: "Your name",
								className: "mt-1"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "cemail",
								children: "Email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "cemail",
								type: "email",
								value: form.email,
								onChange: (e) => setForm({
									...form,
									email: e.target.value
								}),
								placeholder: "you@example.com",
								className: "mt-1"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "cmsg",
								children: "Message"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								id: "cmsg",
								value: form.message,
								onChange: (e) => setForm({
									...form,
									message: e.target.value
								}),
								placeholder: "How can we help?",
								rows: 5,
								className: "mt-1"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								className: "font-display font-semibold uppercase tracking-wider",
								children: "Send message"
							})
						]
					})
				]
			}) })]
		})
	})] });
}
function ContactCard({ icon, label, value, href }) {
	const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-sm border border-primary/30 bg-card p-5 transition hover:border-primary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2 text-primary",
			children: [icon, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display text-xs font-bold uppercase tracking-widest",
				children: label
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-2 text-sm text-foreground",
			children: value
		})]
	});
	return href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		className: "block",
		children: inner
	}) : inner;
}
//#endregion
export { ContactPage as component };
