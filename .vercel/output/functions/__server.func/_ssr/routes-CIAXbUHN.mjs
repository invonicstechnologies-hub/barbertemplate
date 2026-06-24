import { i as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { a as formatKES, o as services, t as Button, u as testimonials } from "./data-ChKvAJvb.mjs";
import { t as SectionHeading } from "./SectionHeading-BI761MFX.mjs";
import { i as interior_default, n as gallery_3_default, r as hero_default, t as gallery_1_default } from "./gallery-3-CL30xlep.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as ArrowRight, n as Star, r as Scissors, s as MapPin, y as Sparkles } from "../_libs/lucide-react.mjs";
import { t as gallery_2_default } from "./gallery-2-BD8rGwSy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CIAXbUHN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SLIDES = [
	{
		src: "/assets/Men-style1-BoNygsa7.jpg",
		title: "Skin Fade",
		tag: "Barbershop"
	},
	{
		src: "/assets/braids-2-CsMVYay1.jpg",
		title: "Stitch Braids",
		tag: "Salon"
	},
	{
		src: "/assets/men-style4-nNSf0lHq.jpg",
		title: "Beard Sculpt",
		tag: "Barbershop"
	},
	{
		src: "/assets/braids-1-CtabcnWy.jpg",
		title: "Knotless Braids",
		tag: "Salon"
	},
	{
		src: "/assets/men-locs-Bkg9rkMd.jpg",
		title: "Loc Styling",
		tag: "Barbershop"
	},
	{
		src: "/assets/Kids-style1-elcc5eOo.jpg",
		title: "Kids Fresh",
		tag: "Kids"
	},
	{
		src: "/assets/men-style3-pbO0wvt3.jpg",
		title: "360 Waves",
		tag: "Barbershop"
	},
	{
		src: "/assets/KidsStyle-2-eM0nCXey.jpg",
		title: "Hair Design",
		tag: "Kids"
	},
	{
		src: "/assets/men-stlye2-C4TafNOQ.jpg",
		title: "Tapered Curls",
		tag: "Barbershop"
	}
];
function useWindowWidth() {
	const [width, setWidth] = (0, import_react.useState)(typeof window !== "undefined" ? window.innerWidth : 1024);
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		const onResize = () => setWidth(window.innerWidth);
		window.addEventListener("resize", onResize);
		return () => window.removeEventListener("resize", onResize);
	}, []);
	return width;
}
function ArcCarouselHero() {
	const [active, setActive] = (0, import_react.useState)(Math.floor(SLIDES.length / 2));
	const [paused, setPaused] = (0, import_react.useState)(false);
	const width = useWindowWidth();
	(0, import_react.useEffect)(() => {
		if (paused) return;
		const id = setInterval(() => {
			setActive((a) => (a + 1) % SLIDES.length);
		}, 3800);
		return () => clearInterval(id);
	}, [paused]);
	const next = (0, import_react.useCallback)(() => setActive((a) => (a + 1) % SLIDES.length), []);
	const prev = (0, import_react.useCallback)(() => setActive((a) => (a - 1 + SLIDES.length) % SLIDES.length), []);
	const isMobile = width < 768;
	const isTablet = width >= 768 && width < 1024;
	const ARC_STEP = isMobile ? 14 : isTablet ? 11 : 9;
	const RADIUS = isMobile ? 220 : isTablet ? 340 : 460;
	const CARD_W = isMobile ? 100 : isTablet ? 140 : 180;
	const CARD_H = isMobile ? 150 : isTablet ? 240 : 360;
	const CARD_RADIUS = isMobile ? 14 : isTablet ? 18 : 22;
	const [touchStart, setTouchStart] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate overflow-hidden border-b border-primary/20",
		onTouchStart: (e) => {
			setTouchStart(e.touches[0].clientX);
			setPaused(true);
		},
		onTouchEnd: (e) => {
			const diff = touchStart - e.changedTouches[0].clientX;
			if (Math.abs(diff) > 40) if (diff > 0) next();
			else prev();
			setPaused(false);
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": true,
			className: "pointer-events-none absolute inset-0 opacity-[0.04]",
			style: {
				backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--primary)/0.6) 1px, transparent 0)",
				backgroundSize: "22px 22px"
			}
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto min-h-[600px] max-w-[1400px] sm:min-h-[700px] lg:min-h-[780px]",
			onMouseEnter: () => setPaused(true),
			onMouseLeave: () => setPaused(false),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute inset-y-0 right-0 w-[55%] sm:w-[50%] lg:w-[55%]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": true,
					className: "absolute -right-20 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-primary/10 blur-3xl sm:h-[700px] sm:w-[700px]"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative h-full w-full",
					children: SLIDES.map((s, i) => {
						const offset = i - active;
						const angle = offset * ARC_STEP;
						const isActive = i === active;
						const distance = Math.abs(offset);
						const opacity = distance > 4 ? 0 : 1 - distance * .15;
						const z = 100 - distance;
						const scale = isActive ? 1.06 : 1 - distance * .04;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setActive(i),
							"aria-label": s.title,
							className: "pointer-events-auto absolute left-0 top-1/2 transition-all duration-700 ease-out",
							style: {
								transform: `translateY(-50%) rotate(${angle}deg) translateX(${RADIUS}px) rotate(${-angle * .5}deg) translateX(-50%) scale(${scale})`,
								zIndex: z,
								opacity
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `relative overflow-hidden border-2 transition-all duration-500 ${isActive ? "border-primary shadow-[0_12px_40px_-8px_oklch(0.74_0.13_85/0.45)]" : "border-foreground/10"}`,
								style: {
									width: CARD_W,
									height: CARD_H,
									borderRadius: CARD_RADIUS
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: s.src,
										alt: s.title,
										className: "h-full w-full object-cover",
										loading: distance > 2 ? "lazy" : "eager"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `absolute inset-0 transition-opacity duration-500 ${isActive ? "bg-gradient-to-t from-foreground/70 via-transparent to-transparent" : "bg-background/15"}` }),
									isActive && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "absolute inset-x-0 bottom-3 px-2 text-center sm:bottom-5 sm:px-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-display text-[8px] font-semibold uppercase tracking-[0.2em] text-primary sm:text-[10px] sm:tracking-[0.3em]",
											children: s.tag
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-0.5 font-display text-xs font-bold uppercase tracking-wide text-background sm:mt-1 sm:text-base lg:text-lg",
											children: s.title
										})]
									})
								]
							})
						}, s.title);
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-[150] flex min-h-[600px] flex-col justify-between py-10 pl-5 pr-[45%] sm:min-h-[700px] sm:py-14 sm:pl-8 sm:pr-[52%] lg:min-h-[780px] lg:py-20 lg:pl-12 lg:pr-[56%]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-background/60 px-2.5 py-1 backdrop-blur sm:gap-2 sm:px-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3 w-3 text-primary sm:h-3.5 sm:w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-[8px] font-semibold uppercase tracking-[0.2em] text-foreground/90 sm:text-[10px] sm:tracking-[0.25em]",
								children: "Ongata Rongai · Kenya"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-4 font-display text-3xl font-bold uppercase leading-[0.95] tracking-tight sm:mt-6 sm:text-5xl lg:text-6xl xl:text-7xl",
							children: [
								"D",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary",
									children: "&"
								}),
								"M",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Parlour"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex items-center gap-3 sm:mt-5 sm:gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-primary sm:w-12" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-[9px] font-semibold uppercase tracking-[0.2em] text-primary sm:text-xs sm:tracking-[0.3em]",
								children: "The Showcase"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-xs text-xs text-foreground/70 sm:mt-6 sm:max-w-md sm:text-sm lg:text-base",
							children: "Signature cuts, braids and beard work from the chairs of Rongai's boldest unisex parlour."
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "relative mt-6 space-y-0 sm:mt-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "font-display text-[8px] font-semibold uppercase tracking-[0.25em] text-muted-foreground sm:text-[10px] sm:tracking-[0.3em]",
							children: "Now Featured"
						}), SLIDES.map((s, i) => {
							const isActive = i === active;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setActive(i),
								className: `group flex w-full items-center gap-2 border-b border-border/40 py-1.5 text-left transition-colors sm:gap-4 sm:py-2 ${isActive ? "text-primary" : "text-foreground/60 hover:text-foreground"}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `font-display text-[10px] tabular-nums transition-opacity sm:text-xs ${isActive ? "opacity-100" : "opacity-40"}`,
										children: String(i + 1).padStart(2, "0")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex-1 truncate font-display text-xs font-semibold uppercase tracking-wide sm:text-base lg:text-lg",
										children: s.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `hidden h-px transition-all duration-500 sm:block ${isActive ? "w-8 bg-primary sm:w-10" : "w-3 bg-border group-hover:w-5 sm:w-4 sm:group-hover:w-6"}` })
								]
							}) }, s.title);
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-primary/20 pt-4 sm:mt-10 sm:gap-6 sm:pt-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 sm:gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-9 w-9 shrink-0 place-items-center rounded-full border border-primary text-primary sm:h-12 sm:w-12",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-xs font-bold sm:text-lg",
									children: "D&M"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display text-[10px] font-bold uppercase tracking-widest sm:text-sm",
									children: "D&M Parlour"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[8px] uppercase tracking-widest text-muted-foreground sm:text-[11px]",
									children: "Est. Rongai"
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 sm:gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "font-display text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:text-xs sm:tracking-[0.3em]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-primary",
										children: String(active + 1).padStart(2, "0")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mx-1 sm:mx-2",
										children: "/"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: String(SLIDES.length).padStart(2, "0") })
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "sm",
								className: "h-8 font-display text-[10px] font-semibold uppercase tracking-wider gold-glow sm:h-10 sm:text-xs",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/book",
									children: ["Book Now ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1.5 h-3.5 w-3.5 sm:ml-2 sm:h-4 sm:w-4" })]
								})
							})]
						})]
					})
				]
			})]
		})]
	});
}
var highlights = services.filter((s) => [
	"skin-fade",
	"fade-beard-combo",
	"knotless-braids",
	"makeup"
].includes(s.id));
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArcCarouselHero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-primary/20 bg-background py-20 sm:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "One House",
					title: "Barbershop. Salon. One House.",
					description: "Whether you want a clean skin fade, a beard sculpt, fresh knotless braids or full glam — D&M is the spot. Two craft-driven teams, one bold address in Rongai."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid grid-cols-2 gap-4 sm:max-w-md",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-sm border border-primary/30 bg-card p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scissors, { className: "h-6 w-6 text-primary" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 font-display text-2xl font-bold",
								children: "Barbershop"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: "Fades, beards, shaves, kids cuts"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-sm border border-primary/30 bg-card p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-6 w-6 text-primary" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 font-display text-2xl font-bold",
								children: "Salon"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: "Braids, weaves, mani-pedi, glam"
							})
						]
					})]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-3 gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hover-zoom col-span-2 aspect-[4/5] overflow-hidden rounded-sm border border-primary/20",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: interior_default,
							alt: "Inside D&M Parlour",
							loading: "lazy",
							className: "h-full w-full object-cover"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hover-zoom aspect-square overflow-hidden rounded-sm border border-primary/20",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: gallery_1_default,
									alt: "Fresh fade",
									loading: "lazy",
									className: "h-full w-full object-cover"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hover-zoom aspect-square overflow-hidden rounded-sm border border-primary/20",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: gallery_2_default,
									alt: "Box braids",
									loading: "lazy",
									className: "h-full w-full object-cover"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hover-zoom aspect-square overflow-hidden rounded-sm border border-primary/20",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: gallery_3_default,
									alt: "Hot towel shave",
									loading: "lazy",
									className: "h-full w-full object-cover"
								})
							})
						]
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20 sm:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-end justify-between gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "What We Do",
						title: "Signature Services"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						className: "border-primary/40 font-display uppercase tracking-wider",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/services",
							children: ["All services ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-4 w-4" })]
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
					children: highlights.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/book",
						search: { service: s.id },
						className: "group block rounded-sm border border-primary/20 bg-card p-6 transition hover:border-primary hover:gold-glow",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 font-display text-xs font-bold uppercase tracking-widest text-primary",
								children: [s.category === "barbershop" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scissors, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), s.category]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-xl font-bold uppercase tracking-wide",
								children: s.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: s.description
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex items-center justify-between border-t border-border pt-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-lg font-bold text-primary",
									children: formatKES(s.price)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-muted-foreground",
									children: s.duration
								})]
							})
						]
					}, s.id))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-primary/20 bg-card/50 py-20 sm:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Word on the Street",
					title: "What Clients Say",
					align: "center"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
					children: testimonials.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "flex h-full flex-col rounded-sm border border-primary/20 bg-background p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-1 text-primary",
								children: Array.from({ length: t.rating }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-current" }, i))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
								className: "mt-4 flex-1 text-sm text-foreground/90",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-3xl leading-none text-primary",
									children: "\""
								}), t.quote]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
								className: "mt-6 border-t border-border pt-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display text-sm font-bold uppercase tracking-wider",
									children: t.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted-foreground",
									children: t.service
								})]
							})
						]
					}, t.id))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative isolate overflow-hidden py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 -z-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: hero_default,
					alt: "",
					className: "h-full w-full object-cover opacity-30"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-background/80" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-3xl px-4 text-center sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-4xl font-bold uppercase tracking-wide sm:text-5xl md:text-6xl",
						children: ["Ready for a ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary",
							children: "fresh look?"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground",
						children: "Book in under a minute. No deposits, no hassle — just sharp work."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							className: "font-display text-sm font-semibold uppercase tracking-wider gold-glow",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/book",
								children: ["Book Your Chair ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-4 w-4" })]
							})
						})
					})
				]
			})]
		})
	] });
}
//#endregion
export { HomePage as component };
