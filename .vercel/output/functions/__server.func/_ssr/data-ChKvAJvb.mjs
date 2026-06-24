import { i as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, r as Slot, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/data-ChKvAJvb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-foreground text-background shadow hover:shadow-[0_0_0_1px_var(--color-primary),0_10px_24px_-10px_var(--color-primary)] transition-shadow",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-foreground bg-transparent text-foreground shadow-sm hover:bg-foreground hover:text-background",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent/15 hover:text-foreground",
			link: "text-foreground underline-offset-4 decoration-primary decoration-2 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var team_1_default = "/assets/team-1-sUW70YAH.jpg";
var team_2_default = "/assets/team-2-16coi21d.jpg";
var team_3_default = "/assets/team-3-C6nzJ6tx.jpg";
var team_4_default = "/assets/team-4-CFK5hzN5.jpg";
var services = [
	{
		id: "skin-fade",
		name: "Skin Fade",
		description: "Clean, sharp fade tailored to your style",
		price: 500,
		duration: "30 min",
		category: "barbershop"
	},
	{
		id: "beard-trim",
		name: "Beard Trim & Shape",
		description: "Precision beard sculpting and lineup",
		price: 300,
		duration: "20 min",
		category: "barbershop"
	},
	{
		id: "hot-towel-shave",
		name: "Hot Towel Shave",
		description: "Classic straight-razor shave with hot towel finish",
		price: 600,
		duration: "30 min",
		category: "barbershop"
	},
	{
		id: "kids-cut",
		name: "Kids Cut",
		description: "Gentle, friendly cuts for the little ones",
		price: 350,
		duration: "20 min",
		category: "barbershop"
	},
	{
		id: "line-up",
		name: "Line Up / Edge Up",
		description: "Crisp edges and hairline cleanup",
		price: 250,
		duration: "15 min",
		category: "barbershop"
	},
	{
		id: "fade-beard-combo",
		name: "Haircut + Beard Combo",
		description: "Full grooming — haircut and beard in one session",
		price: 800,
		duration: "45 min",
		category: "barbershop"
	},
	{
		id: "knotless-braids",
		name: "Knotless Braids",
		description: "Lightweight, natural-looking knotless braids",
		price: 2500,
		duration: "3–4 hrs",
		category: "salon"
	},
	{
		id: "cornrows",
		name: "Cornrows",
		description: "Neat, classic cornrow styling",
		price: 1e3,
		duration: "1.5 hrs",
		category: "salon"
	},
	{
		id: "weave-install",
		name: "Weave Install",
		description: "Professional weave install, blended finish",
		price: 2e3,
		duration: "2–3 hrs",
		category: "salon"
	},
	{
		id: "treatment",
		name: "Treatment & Deep Conditioning",
		description: "Restorative hair treatment for strength and shine",
		price: 800,
		duration: "45 min",
		category: "salon"
	},
	{
		id: "mani-pedi",
		name: "Manicure & Pedicure",
		description: "Full hand and foot care, polish included",
		price: 1200,
		duration: "1 hr",
		category: "salon"
	},
	{
		id: "makeup",
		name: "Makeup (Glam)",
		description: "Event-ready makeup application",
		price: 1500,
		duration: "1 hr",
		category: "salon"
	}
];
var stylists = [
	{
		id: "dennis",
		name: "Dennis M.",
		role: "Master Barber",
		category: "barbershop",
		bio: "Fades, line-ups and beard sculpting. 10+ years on the chair.",
		photo: team_1_default
	},
	{
		id: "mike",
		name: "Mike K.",
		role: "Senior Barber",
		category: "barbershop",
		bio: "Specialist in textured cuts, locs and skin fades.",
		photo: team_2_default
	},
	{
		id: "amani",
		name: "Amani W.",
		role: "Lead Stylist",
		category: "salon",
		bio: "Braiding queen — box braids, knotless, cornrows.",
		photo: team_3_default
	},
	{
		id: "wanjiku",
		name: "Wanjiku N.",
		role: "Makeup & Nails",
		category: "salon",
		bio: "Glam makeup, gel nails and bridal sessions.",
		photo: team_4_default
	}
];
var testimonials = [
	{
		id: "t1",
		name: "Brian O.",
		quote: "Sharpest fade in Rongai. Walked in stressed, walked out a new man.",
		rating: 5,
		service: "Skin Fade + Beard"
	},
	{
		id: "t2",
		name: "Cynthia A.",
		quote: "Amani did my knotless braids in record time and they look unreal. Booked for life.",
		rating: 5,
		service: "Knotless Braids"
	},
	{
		id: "t3",
		name: "Kevin M.",
		quote: "The hot towel shave is a whole experience. The vibe in here is unmatched.",
		rating: 5,
		service: "Hot Towel Shave"
	},
	{
		id: "t4",
		name: "Esther N.",
		quote: "Mani-pedi + makeup before my event — flawless. Whole team is professional.",
		rating: 5,
		service: "Mani-Pedi + Makeup"
	}
];
var businessInfo = {
	name: "D&M Parlour",
	tagline: "Sharp Cuts. Bold Style.",
	address: "Maasai Mall, Ongata Rongai, Kajiado County, Kenya",
	phone: "+254 712 345 678",
	phoneRaw: "+254712345678",
	whatsapp: "https://wa.me/254712345678",
	email: "hello@dmparlour.co.ke",
	instagram: "https://instagram.com/dmparlour",
	tiktok: "https://tiktok.com/@dmparlour",
	facebook: "https://facebook.com/dmparlour",
	hours: [
		{
			day: "Mon – Fri",
			time: "9:00 AM – 8:00 PM"
		},
		{
			day: "Saturday",
			time: "8:00 AM – 9:00 PM"
		},
		{
			day: "Sunday",
			time: "10:00 AM – 6:00 PM"
		}
	]
};
var timeSlots = [
	{
		time: "9:00 AM",
		available: true
	},
	{
		time: "10:00 AM",
		available: false
	},
	{
		time: "11:00 AM",
		available: true
	},
	{
		time: "12:00 PM",
		available: true
	},
	{
		time: "1:00 PM",
		available: false
	},
	{
		time: "2:00 PM",
		available: true
	},
	{
		time: "3:00 PM",
		available: true
	},
	{
		time: "4:00 PM",
		available: false
	},
	{
		time: "5:00 PM",
		available: true
	},
	{
		time: "6:00 PM",
		available: true
	},
	{
		time: "7:00 PM",
		available: false
	}
];
var formatKES = (amount) => `KES ${amount.toLocaleString("en-KE")}`;
//#endregion
export { formatKES as a, team_1_default as c, timeSlots as d, cn as i, team_3_default as l, businessInfo as n, services as o, buttonVariants as r, stylists as s, Button as t, testimonials as u };
