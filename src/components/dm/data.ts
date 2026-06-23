import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";

export type ServiceCategory = "barbershop" | "salon";

export interface Service {
  id: string;
  name: string;
  description: string;
  price: number; // KES
  duration: string;
  category: ServiceCategory;
}

export const services: Service[] = [
  // Barbershop
  { id: "skin-fade", name: "Skin Fade", description: "Clean, sharp fade tailored to your style", price: 500, duration: "30 min", category: "barbershop" },
  { id: "beard-trim", name: "Beard Trim & Shape", description: "Precision beard sculpting and lineup", price: 300, duration: "20 min", category: "barbershop" },
  { id: "hot-towel-shave", name: "Hot Towel Shave", description: "Classic straight-razor shave with hot towel finish", price: 600, duration: "30 min", category: "barbershop" },
  { id: "kids-cut", name: "Kids Cut", description: "Gentle, friendly cuts for the little ones", price: 350, duration: "20 min", category: "barbershop" },
  { id: "line-up", name: "Line Up / Edge Up", description: "Crisp edges and hairline cleanup", price: 250, duration: "15 min", category: "barbershop" },
  { id: "fade-beard-combo", name: "Haircut + Beard Combo", description: "Full grooming — haircut and beard in one session", price: 800, duration: "45 min", category: "barbershop" },

  // Salon
  { id: "knotless-braids", name: "Knotless Braids", description: "Lightweight, natural-looking knotless braids", price: 2500, duration: "3–4 hrs", category: "salon" },
  { id: "cornrows", name: "Cornrows", description: "Neat, classic cornrow styling", price: 1000, duration: "1.5 hrs", category: "salon" },
  { id: "weave-install", name: "Weave Install", description: "Professional weave install, blended finish", price: 2000, duration: "2–3 hrs", category: "salon" },
  { id: "treatment", name: "Treatment & Deep Conditioning", description: "Restorative hair treatment for strength and shine", price: 800, duration: "45 min", category: "salon" },
  { id: "mani-pedi", name: "Manicure & Pedicure", description: "Full hand and foot care, polish included", price: 1200, duration: "1 hr", category: "salon" },
  { id: "makeup", name: "Makeup (Glam)", description: "Event-ready makeup application", price: 1500, duration: "1 hr", category: "salon" },
];

export interface Stylist {
  id: string;
  name: string;
  role: string;
  category: ServiceCategory;
  bio: string;
  photo: string;
}

export const stylists: Stylist[] = [
  { id: "dennis", name: "Dennis M.", role: "Master Barber", category: "barbershop", bio: "Fades, line-ups and beard sculpting. 10+ years on the chair.", photo: team1 },
  { id: "mike", name: "Mike K.", role: "Senior Barber", category: "barbershop", bio: "Specialist in textured cuts, locs and skin fades.", photo: team2 },
  { id: "amani", name: "Amani W.", role: "Lead Stylist", category: "salon", bio: "Braiding queen — box braids, knotless, cornrows.", photo: team3 },
  { id: "wanjiku", name: "Wanjiku N.", role: "Makeup & Nails", category: "salon", bio: "Glam makeup, gel nails and bridal sessions.", photo: team4 },
];

export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  rating: number;
  service: string;
}

export const testimonials: Testimonial[] = [
  { id: "t1", name: "Brian O.", quote: "Sharpest fade in Rongai. Walked in stressed, walked out a new man.", rating: 5, service: "Skin Fade + Beard" },
  { id: "t2", name: "Cynthia A.", quote: "Amani did my knotless braids in record time and they look unreal. Booked for life.", rating: 5, service: "Knotless Braids" },
  { id: "t3", name: "Kevin M.", quote: "The hot towel shave is a whole experience. The vibe in here is unmatched.", rating: 5, service: "Hot Towel Shave" },
  { id: "t4", name: "Esther N.", quote: "Mani-pedi + makeup before my event — flawless. Whole team is professional.", rating: 5, service: "Mani-Pedi + Makeup" },
];

export const businessInfo = {
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
    { day: "Mon – Fri", time: "9:00 AM – 8:00 PM" },
    { day: "Saturday", time: "8:00 AM – 9:00 PM" },
    { day: "Sunday", time: "10:00 AM – 6:00 PM" },
  ],
};

// Mock time slots — some marked unavailable
export const timeSlots: { time: string; available: boolean }[] = [
  { time: "9:00 AM", available: true },
  { time: "10:00 AM", available: false },
  { time: "11:00 AM", available: true },
  { time: "12:00 PM", available: true },
  { time: "1:00 PM", available: false },
  { time: "2:00 PM", available: true },
  { time: "3:00 PM", available: true },
  { time: "4:00 PM", available: false },
  { time: "5:00 PM", available: true },
  { time: "6:00 PM", available: true },
  { time: "7:00 PM", available: false },
];

export const formatKES = (amount: number) =>
  `KES ${amount.toLocaleString("en-KE")}`;
