import { i as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { a as formatKES, d as timeSlots, i as cn, o as services, r as buttonVariants, s as stylists, t as Button } from "./data-ChKvAJvb.mjs";
import { t as SectionHeading } from "./SectionHeading-BI761MFX.mjs";
import { M as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { b as CircleCheck, f as ChevronRight, g as Calendar, h as Check, i as Phone, m as ChevronDown, p as ChevronLeft, v as UserRound, y as Sparkles } from "../_libs/lucide-react.mjs";
import { t as Route } from "./book-BRoOgu4d.mjs";
import { n as Label, t as Input } from "./label-CV4mHOfH.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { p as format } from "../_libs/date-fns.mjs";
import { n as getDefaultClassNames, t as DayPicker } from "../_libs/react-day-picker.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/book-Ba51yOxY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Calendar$1({ className, classNames, showOutsideDays = true, captionLayout = "label", buttonVariant = "ghost", formatters, components, ...props }) {
	const defaultClassNames = getDefaultClassNames();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DayPicker, {
		showOutsideDays,
		className: cn("bg-background group/calendar p-3 [--cell-size:2rem] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent", String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`, String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`, className),
		captionLayout,
		formatters: {
			formatMonthDropdown: (date) => date.toLocaleString("default", { month: "short" }),
			...formatters
		},
		classNames: {
			root: cn("w-fit", defaultClassNames.root),
			months: cn("relative flex flex-col gap-4 md:flex-row", defaultClassNames.months),
			month: cn("flex w-full flex-col gap-4", defaultClassNames.month),
			nav: cn("absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1", defaultClassNames.nav),
			button_previous: cn(buttonVariants({ variant: buttonVariant }), "h-(--cell-size) w-(--cell-size) select-none p-0 aria-disabled:opacity-50", defaultClassNames.button_previous),
			button_next: cn(buttonVariants({ variant: buttonVariant }), "h-(--cell-size) w-(--cell-size) select-none p-0 aria-disabled:opacity-50", defaultClassNames.button_next),
			month_caption: cn("flex h-(--cell-size) w-full items-center justify-center px-(--cell-size)", defaultClassNames.month_caption),
			dropdowns: cn("flex h-(--cell-size) w-full items-center justify-center gap-1.5 text-sm font-medium", defaultClassNames.dropdowns),
			dropdown_root: cn("has-focus:border-ring border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] relative rounded-md border", defaultClassNames.dropdown_root),
			dropdown: cn("bg-popover absolute inset-0 opacity-0", defaultClassNames.dropdown),
			caption_label: cn("select-none font-medium", captionLayout === "label" ? "text-sm" : "[&>svg]:text-muted-foreground flex h-8 items-center gap-1 rounded-md pl-2 pr-1 text-sm [&>svg]:size-3.5", defaultClassNames.caption_label),
			table: "w-full border-collapse",
			weekdays: cn("flex", defaultClassNames.weekdays),
			weekday: cn("text-muted-foreground flex-1 select-none rounded-md text-[0.8rem] font-normal", defaultClassNames.weekday),
			week: cn("mt-2 flex w-full", defaultClassNames.week),
			week_number_header: cn("w-(--cell-size) select-none", defaultClassNames.week_number_header),
			week_number: cn("text-muted-foreground select-none text-[0.8rem]", defaultClassNames.week_number),
			day: cn("group/day relative aspect-square h-full w-full select-none p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md", defaultClassNames.day),
			range_start: cn("bg-accent rounded-l-md", defaultClassNames.range_start),
			range_middle: cn("rounded-none", defaultClassNames.range_middle),
			range_end: cn("bg-accent rounded-r-md", defaultClassNames.range_end),
			today: cn("bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none", defaultClassNames.today),
			outside: cn("text-muted-foreground aria-selected:text-muted-foreground", defaultClassNames.outside),
			disabled: cn("text-muted-foreground opacity-50", defaultClassNames.disabled),
			hidden: cn("invisible", defaultClassNames.hidden),
			...classNames
		},
		components: {
			Root: ({ className, rootRef, ...props }) => {
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"data-slot": "calendar",
					ref: rootRef,
					className: cn(className),
					...props
				});
			},
			Chevron: ({ className, orientation, ...props }) => {
				if (orientation === "left") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
					className: cn("size-4", className),
					...props
				});
				if (orientation === "right") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
					className: cn("size-4", className),
					...props
				});
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
					className: cn("size-4", className),
					...props
				});
			},
			DayButton: CalendarDayButton,
			WeekNumber: ({ children, ...props }) => {
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					...props,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex size-(--cell-size) items-center justify-center text-center",
						children
					})
				});
			},
			...components
		},
		...props
	});
}
function CalendarDayButton({ className, day, modifiers, ...props }) {
	const defaultClassNames = getDefaultClassNames();
	const ref = import_react.useRef(null);
	import_react.useEffect(() => {
		if (modifiers.focused) ref.current?.focus();
	}, [modifiers.focused]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		ref,
		variant: "ghost",
		size: "icon",
		"data-day": day.date.toLocaleDateString(),
		"data-selected-single": modifiers.selected && !modifiers.range_start && !modifiers.range_end && !modifiers.range_middle,
		"data-range-start": modifiers.range_start,
		"data-range-end": modifiers.range_end,
		"data-range-middle": modifiers.range_middle,
		className: cn("data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 flex aspect-square h-auto w-full min-w-(--cell-size) flex-col gap-1 font-normal leading-none data-[range-end=true]:rounded-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] [&>span]:text-xs [&>span]:opacity-70", defaultClassNames.day, className),
		...props
	});
}
var badgeVariants = cva("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
	variants: { variant: {
		default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
		secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
		destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
		outline: "text-foreground"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
var steps = [
	{
		id: 1,
		label: "Service",
		icon: Sparkles
	},
	{
		id: 2,
		label: "Stylist",
		icon: UserRound
	},
	{
		id: 3,
		label: "Date & Time",
		icon: Calendar
	},
	{
		id: 4,
		label: "Your Details",
		icon: Phone
	},
	{
		id: 5,
		label: "Confirmed",
		icon: CircleCheck
	}
];
function BookingWizard({ initialServiceId, initialStylistId }) {
	const navigate = useNavigate();
	const initialService = services.find((s) => s.id === initialServiceId);
	const initialStylist = stylists.find((s) => s.id === initialStylistId);
	const [step, setStep] = (0, import_react.useState)(initialService ? 2 : 1);
	const [service, setService] = (0, import_react.useState)(initialService);
	const [stylist, setStylist] = (0, import_react.useState)(initialStylist);
	const [date, setDate] = (0, import_react.useState)();
	const [time, setTime] = (0, import_react.useState)();
	const [name, setName] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [errors, setErrors] = (0, import_react.useState)({});
	const filteredStylists = service ? stylists.filter((s) => s.category === service.category) : stylists;
	function next() {
		if (step === 4) {
			const e = {};
			if (name.trim().length < 2) e.name = "Enter your full name";
			if (!/^\+?\d[\d\s]{7,}$/.test(phone.trim())) e.phone = "Enter a valid phone number";
			setErrors(e);
			if (Object.keys(e).length > 0) return;
			toast.success("Booking request received", { description: `We'll text ${phone} shortly to confirm.` });
		}
		setStep((s) => Math.min(5, s + 1));
	}
	function back() {
		setStep((s) => Math.max(1, s - 1));
	}
	function reset() {
		setStep(1);
		setService(void 0);
		setStylist(void 0);
		setDate(void 0);
		setTime(void 0);
		setName("");
		setPhone("");
		setErrors({});
		navigate({
			to: "/book",
			search: {}
		});
	}
	const canAdvance = step === 1 && !!service || step === 2 && !!stylist || step === 3 && !!date && !!time || step === 4 || step === 5;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-4xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "mb-10 grid grid-cols-5 gap-2",
			children: steps.map((s) => {
				const active = step === s.id;
				const done = step > s.id;
				const Icon = s.icon;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex flex-col items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: cn("grid h-10 w-10 place-items-center rounded-full border-2 transition", done && "border-primary bg-primary text-primary-foreground", active && "border-primary text-primary gold-glow", !active && !done && "border-border text-muted-foreground"),
						children: done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("hidden text-[10px] font-display font-bold uppercase tracking-widest sm:block", active || done ? "text-foreground" : "text-muted-foreground"),
						children: s.label
					})]
				}, s.id);
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-sm border border-primary/20 bg-card p-6 sm:p-8",
			children: [
				step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepWrap, {
					title: "Choose a service",
					subtitle: "Pick what you're coming in for.",
					children: ["barbershop", "salon"].map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-8 last:mb-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "mb-3 font-display text-sm font-bold uppercase tracking-widest text-primary",
							children: cat === "barbershop" ? "Barbershop" : "Salon"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-3 sm:grid-cols-2",
							children: services.filter((s) => s.category === cat).map((s) => {
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => {
										setService(s);
										if (stylist && stylist.category !== s.category) setStylist(void 0);
									},
									className: cn("group flex items-start justify-between gap-4 rounded-sm border p-4 text-left transition", service?.id === s.id ? "border-primary bg-primary/5 gold-glow" : "border-border hover:border-primary/60"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-display text-base font-bold uppercase tracking-wide",
											children: s.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-1 text-xs text-muted-foreground",
											children: s.duration
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "shrink-0 font-display text-sm font-bold text-primary",
										children: formatKES(s.price)
									})]
								}, s.id);
							})
						})]
					}, cat))
				}),
				step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepWrap, {
					title: "Choose your stylist",
					subtitle: service ? `Available for ${service.name}` : "Pick anyone.",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: filteredStylists.map((s) => {
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setStylist(s),
								className: cn("flex items-center gap-4 rounded-sm border p-4 text-left transition", stylist?.id === s.id ? "border-primary bg-primary/5 gold-glow" : "border-border hover:border-primary/60"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: s.photo,
									alt: s.name,
									className: "h-16 w-16 shrink-0 rounded-sm object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-display text-base font-bold uppercase tracking-wide",
											children: s.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs text-primary",
											children: s.role
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-1 truncate text-xs text-muted-foreground",
											children: s.bio
										})
									]
								})]
							}, s.id);
						})
					})
				}),
				step === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepWrap, {
					title: "Pick a date & time",
					subtitle: "Greyed slots are already booked.",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-8 md:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar$1, {
							mode: "single",
							selected: date,
							onSelect: setDate,
							disabled: (d) => d < new Date((/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0)),
							className: cn("rounded-sm border border-border bg-background p-3 pointer-events-auto")
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								className: "font-display text-xs font-bold uppercase tracking-widest text-primary",
								children: "Time slot"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 grid grid-cols-3 gap-2",
								children: timeSlots.map((slot) => {
									const selected = time === slot.time;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										disabled: !slot.available,
										onClick: () => setTime(slot.time),
										className: cn("rounded-sm border px-2 py-2 text-xs font-semibold transition", !slot.available && "cursor-not-allowed border-border/40 text-muted-foreground/40 line-through", slot.available && !selected && "border-border hover:border-primary", selected && "border-primary bg-primary text-primary-foreground"),
										children: slot.time
									}, slot.time);
								})
							}),
							date && time && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-4 text-sm text-muted-foreground",
								children: ["Selected: ", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-foreground",
									children: [
										format(date, "EEE, d MMM yyyy"),
										" · ",
										time
									]
								})]
							})
						] })]
					})
				}),
				step === 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepWrap, {
					title: "Your details",
					subtitle: "We'll send a confirmation by SMS or WhatsApp.",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid max-w-lg gap-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "name",
								children: "Full name"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "name",
								value: name,
								onChange: (e) => setName(e.target.value),
								placeholder: "Jane Mwangi",
								className: "mt-1"
							}),
							errors.name && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-destructive",
								children: errors.name
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "phone",
								children: "Phone number"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "phone",
								type: "tel",
								value: phone,
								onChange: (e) => setPhone(e.target.value),
								placeholder: "+254 712 345 678",
								className: "mt-1"
							}),
							errors.phone && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-destructive",
								children: errors.phone
							})
						] })]
					})
				}),
				step === 5 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "py-6 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto mb-6 grid h-20 w-20 place-items-center rounded-full border-2 border-primary text-primary gold-glow",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
								className: "h-10 w-10",
								strokeWidth: 3
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-3xl font-bold uppercase tracking-wide",
							children: "Booking confirmed"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: [
								"Thanks ",
								name.split(" ")[0],
								"! Your appointment is on the books."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto mt-8 max-w-md rounded-sm border border-primary/30 bg-background p-6 text-left",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
									label: "Service",
									value: service ? `${service.name} · ${formatKES(service.price)}` : ""
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
									label: "Stylist",
									value: stylist?.name ?? ""
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
									label: "Date",
									value: date ? format(date, "EEE, d MMM yyyy") : ""
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
									label: "Time",
									value: time ?? ""
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
									label: "Contact",
									value: `${name} · ${phone}`
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap justify-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								onClick: reset,
								variant: "outline",
								children: "Book another"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "/",
									children: "Back to home"
								})
							})]
						})
					]
				}),
				step < 5 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-primary/20 pt-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "ghost",
							onClick: back,
							disabled: step === 1,
							className: "font-display uppercase tracking-wider",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "mr-1 h-4 w-4" }), " Back"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hidden flex-wrap items-center gap-2 sm:flex",
							children: [
								service && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: "outline",
									className: "border-primary/40 text-foreground",
									children: service.name
								}),
								stylist && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: "outline",
									className: "border-primary/40 text-foreground",
									children: stylist.name
								}),
								date && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: "outline",
									className: "border-primary/40 text-foreground",
									children: format(date, "d MMM")
								}),
								time && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: "outline",
									className: "border-primary/40 text-foreground",
									children: time
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							onClick: next,
							disabled: !canAdvance,
							className: "font-display uppercase tracking-wider",
							children: [
								step === 4 ? "Confirm booking" : "Next",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "ml-1 h-4 w-4" })
							]
						})
					]
				})
			]
		})]
	});
}
function StepWrap({ title, subtitle, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "font-display text-2xl font-bold uppercase tracking-wide",
			children: title
		}),
		subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm text-muted-foreground",
			children: subtitle
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6",
			children
		})
	] });
}
function SummaryRow({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex justify-between gap-4 border-b border-border/50 py-2 text-sm last:border-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-right font-medium text-foreground",
			children: value
		})]
	});
}
function BookPage() {
	const { service, stylist } = Route.useSearch();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b border-primary/20 py-16 sm:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Reserve Your Chair",
				title: "Book Your Appointment",
				description: "Five quick steps. No deposit. We'll confirm by SMS.",
				align: "center",
				as: "h1"
			})
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-16 sm:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingWizard, {
				initialServiceId: service,
				initialStylistId: stylist
			})
		})
	})] });
}
//#endregion
export { BookPage as component };
