/**
 * Single source of truth for every piece of copy, contact detail and number on
 * the landing page. Edit here — nothing else needs to change.
 *
 * Entries marked PLACEHOLDER are invented and must be replaced with real
 * figures before the site goes live.
 */

export const business = {
  name: "Fixxir",
  tagline: "Reliable repairs for the devices you depend on.",
  phone: "+2349066927907",
  phoneDisplay: "+234 906 692 7907",
  whatsapp: "2349066927907",
  email: "fixxir.official@gmail.com",
  address: {
    street: "6a Pepple Street",
    city: "Ikeja",
    region: "Lagos",
    country: "Nigeria",
  },
  addressDisplay: "6a Pepple Street, Ikeja, Lagos",
  hours: "9:00 am – 6:00 pm, Monday to Saturday",
  hoursShort: "Mon – Sat, 9am – 6pm",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=6a+Pepple+Street+Ikeja+Lagos",
  surveyUrl: "https://forms.gle/YNojiucwfb96gLxg8",
  url: "https://fixxir.com",
} as const;

/** Social profiles. Set a handle to null to hide the link. */
export const socials = {
  instagram: null as string | null,
  x: null as string | null,
  tiktok: null as string | null,
} as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const cta = {
  bookRepair: whatsappLink(
    "Hi Fixxir, I'd like to book a repair. My device is a ",
  ),
  businessSupport: whatsappLink(
    "Hi Fixxir, I'd like to talk about repair support for my business devices.",
  ),
  askQuestion: whatsappLink("Hi Fixxir, I have a question about a repair."),
} as const;

/** PLACEHOLDER — replace all four with your real numbers. */
export const stats = [
  { value: "500+", label: "Devices repaired" },
  { value: "4.9/5", label: "Average customer rating" },
  { value: "48hrs", label: "Typical turnaround" },
  { value: "100%", label: "Quoted before we start" },
] as const;

export const promises = [
  "Quote before any work begins",
  "Genuine parts, confirmed to you",
  "Talk to a technician first",
] as const;

/**
 * Objections lifted straight from the customer survey. Each pain point is
 * paired with the way Fixxir answers it.
 */
export const objections = [
  {
    pain: "You don't know who to trust with it.",
    answer: "A real shop, and a real diagnosis",
    detail:
      "We have an address in Ikeja you can walk into and a technician who will explain what they found in plain language. No jargon, no vanishing act.",
  },
  {
    pain: "You're afraid of fake or low-quality parts.",
    answer: "You'll know what went in",
    detail:
      "We tell you exactly which part we're fitting and what grade it is before we fit it, so the choice is yours rather than a discovery months later.",
  },
  {
    pain: "The price changes halfway through.",
    answer: "The quote comes first",
    detail:
      "You get the repair cost, the parts needed and the timeline before we begin. No chargeable work starts without your approval, and the number doesn't move.",
  },
  {
    pain: "You can't tell if it was properly fixed.",
    answer: "Tested before it goes back",
    detail:
      "Our goal isn't a device that powers on. We test the repaired function and the ones around it before handing it back to you.",
  },
  {
    pain: "It drags on and nobody updates you.",
    answer: "Updates where you already are",
    detail:
      "You get an expected timeline after diagnosis and a message on WhatsApp if anything changes — including when a part has to be sourced.",
  },
] as const;

export const services = [
  {
    title: "Smartphones",
    blurb:
      "Screen replacements, battery and charging faults, water-damage assessment, software issues and the everyday failures that stop your day.",
    items: [
      "Screen & glass replacement",
      "Battery & charging faults",
      "Water-damage assessment",
      "Software & boot issues",
    ],
  },
  {
    title: "Laptops & computers",
    blurb:
      "Power faults, keyboards, hinges, broken displays, overheating, storage upgrades and operating systems that refuse to cooperate.",
    items: [
      "Won't power on / no display",
      "Keyboard & hinge repair",
      "Overheating & fan service",
      "Storage & memory upgrades",
    ],
  },
  {
    title: "Tablets & wearables",
    blurb:
      "Support for selected tablets, smart watches, small gadgets and accessories, depending on the fault and parts availability.",
    items: [
      "Tablet screens & batteries",
      "Smart watch faults",
      "Charging ports",
      "Accessory diagnostics",
    ],
  },
  {
    title: "Complex & board-level",
    blurb:
      "The repairs other shops turn away. Motherboard faults, liquid corrosion and intermittent problems that need real investigation.",
    items: [
      "Motherboard diagnostics",
      "Liquid-damage recovery",
      "Charging-IC & power faults",
      "Second opinions",
    ],
    featured: true,
  },
] as const;

/**
 * PLACEHOLDER — replace with your real starting prices, or set `prices` to an
 * empty array to hide the pricing section entirely.
 */
export type Price = { service: string; from: string; note: string };

export const prices: Price[] = [
  { service: "Diagnostics & assessment", from: "Free", note: "On walk-in" },
  { service: "Phone screen replacement", from: "₦25,000", note: "Model dependent" },
  { service: "Phone battery replacement", from: "₦15,000", note: "Model dependent" },
  { service: "Laptop screen replacement", from: "₦45,000", note: "Model dependent" },
  { service: "Charging port repair", from: "₦12,000", note: "Model dependent" },
  { service: "Board-level repair", from: "₦30,000", note: "After diagnosis" },
];

export const steps = [
  {
    title: "Tell us what happened",
    detail:
      "Message us on WhatsApp or walk in and describe the fault. Photos help if you can send them.",
  },
  {
    title: "We diagnose it",
    detail:
      "Our technicians assess the device and identify the underlying fault, not just the symptom.",
  },
  {
    title: "You review the options",
    detail:
      "A clear explanation of the repair, the cost, the parts required and how long it should take.",
  },
  {
    title: "You approve the work",
    detail:
      "Nothing chargeable happens until you say yes. If a repair isn't worth it, we'll tell you that too.",
  },
  {
    title: "Collect a working device",
    detail:
      "We test the repair, then it's ready for pickup — or delivery where available.",
  },
] as const;

export const businessBenefits = [
  "Diagnosis and repair of company devices",
  "Ongoing maintenance for phones and laptops",
  "Multiple-device repair requests in one go",
  "Clear repair updates and documentation",
  "Practical repair-versus-replace guidance",
  "A named point of contact for your team",
] as const;

/**
 * Candidate app features, ordered by what survey respondents actually asked for
 * most. Keep this order in step with new survey results.
 */
export const appFeatures = [
  {
    title: "A price estimate before you commit",
    detail: "The single most requested thing. Know the range up front.",
  },
  {
    title: "Request a repair from home",
    detail: "Describe the fault, get it logged, skip the queue.",
  },
  {
    title: "Proof of the parts used",
    detail: "See exactly what went into your device, and its grade.",
  },
  {
    title: "Speak to a technician first",
    detail: "Ask before you travel, so you're not guessing either.",
  },
  {
    title: "Repair history & warranty",
    detail: "Every past repair and warranty detail in one place.",
  },
  {
    title: "Pickup and delivery",
    detail: "Arrange collection and return without leaving your desk.",
  },
  {
    title: "Track the repair in real time",
    detail: "Know which stage your device is at, without chasing us.",
  },
  {
    title: "Book a walk-in slot",
    detail: "Turn up at a time that's actually convenient.",
  },
] as const;

export type Testimonial = { quote: string; name: string; context: string };

/** PLACEHOLDER — replace with real customer testimonials before launch. */
export const testimonials: Testimonial[] = [
  {
    quote:
      "They told me the screen was fine and it was actually the battery. Two other shops wanted to replace the whole screen. Saved me a lot.",
    name: "Adaeze O.",
    context: "iPhone 12 · Ikeja",
  },
  {
    quote:
      "My laptop wouldn't come on at all and I'd written it off. Fixxir traced it to the board and had it running in three days.",
    name: "Tunde A.",
    context: "HP EliteBook · Board repair",
  },
  {
    quote:
      "We send all our office phones and laptops here now. They give us one update thread and we always know where things are.",
    name: "Chinelo E.",
    context: "Operations lead · Lagos",
  },
];

export const repairReasons = [
  "Extend the life of a device you already know",
  "Protect the files and accounts already on it",
  "Avoid the cost of an unnecessary replacement",
  "Keep one more device out of the waste stream",
] as const;

export const faqs = [
  {
    q: "How long will my repair take?",
    a: "It depends on the fault, the model, how complex the work is and whether parts need to be sourced. You'll get an estimated timeline straight after diagnosis, and we'll tell you if it changes.",
  },
  {
    q: "Do you repair all device brands?",
    a: "We support most popular phone and laptop brands. Send us your device model on WhatsApp and we'll confirm before you make the trip.",
  },
  {
    q: "Will you start work without my approval?",
    a: "No. We explain the recommended repair and the cost first. No chargeable work begins until you approve it.",
  },
  {
    q: "Can you recover data from a damaged device?",
    a: "Sometimes, depending on the type and extent of the damage. We need to assess the device before we can tell you honestly whether it's possible.",
  },
  {
    q: "What if the repair isn't worth it?",
    a: "We'll say so. If the cost of the repair doesn't make sense against the value of the device, we'd rather tell you than take your money.",
  },
  {
    q: "Do you support businesses with multiple devices?",
    a: "Yes. We handle multi-device requests, ongoing maintenance and documentation for teams. Message us and we'll set up a process that fits how you work.",
  },
] as const;

export const navLinks = [
  { label: "What we fix", href: "#services" },
  { label: "How it works", href: "#process" },
  { label: "For business", href: "#business" },
  { label: "The app", href: "#app" },
  { label: "FAQ", href: "#faq" },
] as const;
