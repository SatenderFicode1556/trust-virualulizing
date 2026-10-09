export const SITE_IMAGE = "/services/deep-cleaning-photo.png";


export const services = [
  {
    id: "salon-at-home",
    name: "Salon at home",
    icon: "/services/salon.svg",
    image: SITE_IMAGE,
    category: "Beauty and wellness",
    price: 499,
    duration: "45-90 min",
    tone: "bg-rose-100 text-rose-900",
    accent: "from-rose-100 via-white to-pink-50",
    description:
      "Grooming, facial, waxing, and hair care services arranged with beauty professionals.",
    includes: ["Hygiene kit", "Stylist for selected service", "Extras discussed before work"],
    popularFor: ["Facial cleanup", "Waxing", "Hair spa"],
    subcategories: [
      {
        id: "facial-cleanup",
        name: "Facial cleanup",
        price: 699,
        duration: "60 min",
        description: "Deep cleansing, scrub, massage, steam, and glow mask.",
      },
      {
        id: "waxing",
        name: "Waxing",
        price: 399,
        duration: "45 min",
        description: "Hygienic roll-on or regular waxing for arms and legs.",
      },
      {
        id: "hair-spa",
        name: "Hair spa",
        price: 899,
        duration: "75 min",
        description: "Nourishing hair spa with head massage and steam.",
      },
    ],
  },
  {
    id: "ac-repair",
    name: "AC repair",
    icon: "/services/ac-repair.svg",
    image: SITE_IMAGE,
    category: "Appliance care",
    price: 299,
    duration: "30-60 min",
    tone: "bg-cyan-100 text-cyan-900",
    accent: "from-cyan-100 via-white to-sky-50",
    description:
      "Inspection, servicing, gas checks, cooling issue diagnosis, and repair for split and window AC units.",
    includes: ["Diagnosis details", "Spare quote before replacement", "Follow-up terms confirmed before booking"],
    popularFor: ["Low cooling", "Water leakage", "Annual service"],
    subcategories: [
      {
        id: "split-ac",
        name: "Split AC service",
        image: SITE_IMAGE,
        price: 499,
        duration: "45-60 min",
        description: "Indoor unit filter cleaning, coil wash, drain check, and cooling inspection.",
      },
      {
        id: "window-ac",
        name: "Window AC service",
        image: SITE_IMAGE,
        price: 399,
        duration: "40-55 min",
        description: "Filter cleaning, coil cleaning, fan check, and basic performance testing.",
      },
      {
        id: "gas-refill",
        name: "AC gas refill",
        image: SITE_IMAGE,
        price: 1899,
        duration: "60-90 min",
        description: "Leak check, pressure testing, and refrigerant refill as per AC tonnage.",
      },
      {
        id: "installation",
        name: "AC installation",
        image: SITE_IMAGE,
        price: 1499,
        duration: "90-150 min",
        description: "Mounting, copper pipe connection, drainage setup, and test run.",
      },
    ],
  },
  {
    id: "deep-cleaning",
    name: "Deep cleaning",
    icon: "/services/deep-cleaning.svg",
    image: SITE_IMAGE,
    category: "Home cleaning",
    price: 1299,
    duration: "2-5 hrs",
    tone: "bg-emerald-100 text-emerald-900",
    accent: "from-emerald-100 via-white to-lime-50",
    description:
      "Cleaning options for rooms, bathrooms, kitchens, sofas, and full homes.",
    includes: ["Cleaning equipment", "Selected cleaning scope", "Before-and-after checklist"],
    popularFor: ["Kitchen cleaning", "Bathroom cleaning", "Full home"],
    subcategories: [
      {
        id: "kitchen-cleaning",
        name: "Kitchen cleaning",
        price: 999,
        duration: "2-3 hrs",
        description: "Degreasing of tiles, stove area, sink, cabinets outside, and floor.",
      },
      {
        id: "bathroom-cleaning",
        name: "Bathroom cleaning",
        price: 499,
        duration: "60-90 min",
        description: "Tile scrubbing, fixture polishing, hard-water stain removal, and disinfection.",
      },
      {
        id: "full-home-cleaning",
        name: "Full home cleaning",
        price: 2499,
        duration: "4-6 hrs",
        description: "Complete dry and wet cleaning for rooms, kitchen, bathrooms, and common areas.",
      },
    ],
  },
  {
    id: "plumbing",
    name: "Plumbing",
    icon: "/services/plumbing.svg",
    image: SITE_IMAGE,
    category: "Home repair",
    price: 199,
    duration: "20-60 min",
    tone: "bg-amber-100 text-amber-950",
    accent: "from-amber-100 via-white to-orange-50",
    description:
      "Help with leak repair, tap fitting, drainage fixes, flush repairs, and installation work.",
    includes: ["Visit inspection", "Material estimate", "Work terms discussed before starting"],
    popularFor: ["Leakage", "Tap fitting", "Drain blockage"],
    subcategories: [
      {
        id: "tap-fitting",
        name: "Tap fitting",
        price: 249,
        duration: "30-45 min",
        description: "Installation or replacement of kitchen and bathroom taps.",
      },
      {
        id: "leak-repair",
        name: "Leak repair",
        price: 299,
        duration: "30-60 min",
        description: "Leak detection and repair for exposed pipes, taps, and joints.",
      },
      {
        id: "drain-blockage",
        name: "Drain blockage",
        price: 399,
        duration: "45-75 min",
        description: "Blockage clearing for bathroom, kitchen, and utility drains.",
      },
    ],
  },
  {
    id: "washing-machine",
    name: "Washing machine",
    icon: "/services/washing-machine.svg",
    image: SITE_IMAGE,
    category: "Appliance care",
    price: 349,
    duration: "30-75 min",
    tone: "bg-blue-100 text-blue-900",
    accent: "from-blue-100 via-white to-sky-50",
    description:
      "Diagnosis, servicing, drainage checks, vibration issues, and repair support for washing machines.",
    includes: ["Diagnosis details", "Spare quote before replacement", "Follow-up terms confirmed before booking"],
    popularFor: ["Front load", "Top load", "Drain issue"],
    subcategories: [
      {
        id: "front-load",
        name: "Front load repair",
        price: 399,
        duration: "45-75 min",
        description: "Diagnosis and repair for drum, drainage, vibration, and panel issues.",
      },
      {
        id: "top-load",
        name: "Top load repair",
        price: 349,
        duration: "35-60 min",
        description: "Inspection and repair for wash cycle, motor, inlet, and drainage issues.",
      },
      {
        id: "installation",
        name: "Installation",
        price: 499,
        duration: "45-60 min",
        description: "Machine placement, inlet-outlet connection, leveling, and test run.",
      },
    ],
  },
  {
    id: "electrician",
    name: "Electrician",
    icon: "/services/electrician.svg",
    image: SITE_IMAGE,
    category: "Electrical work",
    price: 199,
    duration: "20-60 min",
    tone: "bg-yellow-100 text-yellow-950",
    accent: "from-yellow-100 via-white to-amber-50",
    description:
      "Switchboard repair, light fitting, fan installation, wiring checks, and small electrical fixes.",
    includes: ["Safety check", "Material estimate", "Work support"],
    popularFor: ["Switch repair", "Fan fitting", "Light fitting"],
    subcategories: [
      {
        id: "switchboard-repair",
        name: "Switchboard repair",
        price: 249,
        duration: "30-45 min",
        description: "Repair or replacement support for switches, sockets, and boards.",
      },
      {
        id: "fan-installation",
        name: "Fan installation",
        price: 399,
        duration: "45-60 min",
        description: "Ceiling fan installation, balancing, and basic wiring check.",
      },
      {
        id: "light-fitting",
        name: "Light fitting",
        price: 199,
        duration: "20-40 min",
        description: "Installation or replacement of wall, ceiling, and decorative lights.",
      },
    ],
  },
  {
    id: "parceling",
    name: "Parceling",
    icon: "/services/parceling.svg",
    image: SITE_IMAGE,
    category: "Packing help",
    price: 299,
    duration: "30-120 min",
    tone: "bg-green-100 text-green-900",
    accent: "from-green-100 via-white to-emerald-50",
    description:
      "Home packing, parcel preparation, box labeling, and safe item wrapping for local movement.",
    includes: ["Packing guidance", "Labeling", "Careful handling"],
    popularFor: ["Box packing", "Fragile packing", "Move prep"],
    subcategories: [
      {
        id: "box-packing",
        name: "Box packing",
        price: 299,
        duration: "30-60 min",
        description: "Neat packing of household items into boxes with basic labeling.",
      },
      {
        id: "fragile-packing",
        name: "Fragile packing",
        price: 599,
        duration: "60-120 min",
        description: "Extra-care wrapping for glassware, decor, electronics, and delicate items.",
      },
      {
        id: "move-prep",
        name: "Move preparation",
        price: 899,
        duration: "90-150 min",
        description: "Organized packing assistance before local shifting or transport pickup.",
      },
    ],
  },
  {
    id: "home-painter",
    name: "Home painter",
    icon: "/services/home-painter.svg",
    image: SITE_IMAGE,
    category: "Home improvement",
    price: 1499,
    duration: "4-8 hrs",
    tone: "bg-pink-100 text-pink-900",
    accent: "from-pink-100 via-white to-rose-50",
    description:
      "Interior wall painting, touch-ups, texture consultation, and room refresh services.",
    includes: ["Wall inspection", "Paint estimate", "Surface prep"],
    popularFor: ["Room painting", "Touch-up", "Texture wall"],
    subcategories: [
      {
        id: "single-room",
        name: "Single room painting",
        price: 1499,
        duration: "4-6 hrs",
        description: "Painting support for one room with surface preparation and neat finishing.",
      },
      {
        id: "wall-touch-up",
        name: "Wall touch-up",
        price: 699,
        duration: "2-4 hrs",
        description: "Minor patches, stain coverage, and small wall repainting work.",
      },
      {
        id: "texture-wall",
        name: "Texture wall",
        price: 2499,
        duration: "6-8 hrs",
        description: "Accent wall texture consultation and execution for premium interiors.",
      },
    ],
  },
];

export function getServiceById(id: string) {
  return services.find((service) => service.id === id);
}

export function getServiceCategory(serviceId: string, categoryId: string) {
  const service = getServiceById(serviceId);
  const category = service?.subcategories.find((item) => item.id === categoryId);

  return service && category ? { service, category } : null;
}

export const bookingSteps = [
  "Choose service",
  "Select exact type",
  "Pick preferred time",
  "Review details",
];






export const servicePromises = [
  ["Clear pricing", "See a starting price before you send a request."],
  ["Service choices", "Choose the type of work that fits your need."],
  ["Flexible timing", "Share a preferred visit slot in the booking form."],
  ["Human support", "Call us if you need help choosing a service."],
];
