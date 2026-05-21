export interface BusinessInfo { name: string; tagline: string; phone: string; email: string; address: string; mapUrl: string; }
export interface HeroSection { headline: string; subheadline: string; ctaText: string; ctaSecondaryText: string; image: string; }
export interface AboutSection { badge: string; title: string; body: string; stats: Array<{ value: string; label: string }>; image: string; }
export interface Service { name: string; description: string; icon: string; image: string; }
export interface Testimonial { name: string; text: string; role: string; rating: number; }
export interface ContactSection { title: string; subtitle: string; }
export interface FooterSection { tagline: string; links: Array<{ label: string; href: string }>; }
export interface Theme { primary: string; primaryDark: string; secondary: string; accent: string; background: string; surface: string; textPrimary: string; textSecondary: string; headingFont: string; bodyFont: string; }
export interface SiteContent { business: BusinessInfo; hero: HeroSection; about: AboutSection; services: Service[]; testimonials: Testimonial[]; contact: ContactSection; footer: FooterSection; theme: Theme; }

export const content: SiteContent = {
  business: {
    name: "The Spice Route",
    tagline: "Authentic Indian Flavours, Modern Mumbai Soul",
    phone: "+912264001234",
    email: "hello@spiceroute.in",
    address: "Bandra West, Mumbai, Maharashtra",
    mapUrl: "https://maps.google.com/?q=Bandra+West+Mumbai",
  },
  hero: {
    headline: "Taste the Soul of Authentic North Indian Cuisine",
    subheadline: "Award-winning dishes crafted with heritage spices and contemporary flair. Experience 8 years of culinary excellence in the heart of Mumbai.",
    ctaText: "Reserve Your Table",
    ctaSecondaryText: "Browse Menu",
    image: "/images/hero.jpg",
  },
  about: {
    badge: "Our Story",
    title: "Where Tradition Meets Modern Mumbai",
    body: "The Spice Route celebrates the rich culinary heritage of North India with a modern Mumbai twist. For 8 years, we've been crafting authentic Mughlai delicacies and street food favorites that transport our guests from bustling bazaars to warm, rustic dining experiences. Our warm ambience and heritage-inspired décor with contemporary touches create the perfect setting for celebrations, gatherings, and everyday indulgence.",
    stats: [
      { value: "8+", label: "Years of Excellence" },
      { value: "2800+", label: "Happy Diners Monthly" },
      { value: "100+", label: "Signature Dishes" },
      { value: "95%", label: "Customer Satisfaction" },
    ],
    image: "/images/about.jpg",
  },
  services: [
    {
      name: "Dine-In Experience",
      description: "Enjoy 80 indoor and 20 outdoor covers in our warm, heritage-inspired ambience. Perfect for intimate dinners, family gatherings, and celebrations with authentic North Indian flavours.",
      icon: "🍽️",
      image: "/images/service-1.jpg",
    },
    {
      name: "Butter Chicken Perfection",
      description: "Our signature creamy butter chicken, slow-cooked with aromatic spices and finished with fresh cream. A masterpiece that's been delighting guests for over 8 years.",
      icon: "🍗",
      image: "/images/service-2.jpg",
    },
    {
      name: "Seekh Kebab Speciality",
      description: "Hand-rolled minced meat kebabs infused with traditional spices and grilled to perfection. A street food favourite brought to fine dining standards.",
      icon: "🔥",
      image: "/images/service-3.jpg",
    },
    {
      name: "Biryani Artistry",
      description: "Fragrant basmati rice layered with tender meat and authentic Mughlai spices. Each grain tells the story of centuries-old culinary tradition.",
      icon: "🍚",
      image: "/images/service-4.jpg",
    },
    {
      name: "Quick Delivery Service",
      description: "Available on Swiggy and Zomato for convenient home delivery. Freshly prepared authentic meals delivered hot to your doorstep during lunch and dinner service.",
      icon: "🚚",
      image: "/images/service-5.jpg",
    },
    {
      name: "Dal Makhani Excellence",
      description: "Creamy lentil curry slow-cooked overnight with butter and fresh cream. A vegetarian delight that pairs perfectly with warm naan and basmati rice.",
      icon: "🥘",
      image: "/images/service-6.jpg",
    },
  ],
  testimonials: [
    { name: "Rajesh Patel", text: "The Spice Route serves the most authentic butter chicken in Mumbai. Every bite transported me back to my grandmother's kitchen. The ambience is warm and welcoming—perfect for a family dinner.", role: "Regular Customer", rating: 5 },
    { name: "Priya Sharma", text: "Outstanding biryani! The spice balance is impeccable and the meat is incredibly tender. We've been ordering through Swiggy for 6 months and quality never wavers. Highly recommended!", role: "Food Enthusiast", rating: 5 },
    { name: "Vikram Desai", text: "Celebrated our anniversary here. The seekh kebabs were absolute perfection, and the service was attentive without being intrusive. The rustic heritage décor added such character to our evening.", role: "Celebrations Guest", rating: 5 },
  ],
  contact: {
    title: "Visit The Spice Route",
    subtitle: "Experience authentic North Indian flavours in our warm, heritage-inspired setting. Open daily from 12pm–3pm and 7pm–11pm.",
  },
  footer: {
    tagline: "Authentic Indian Flavours, Modern Mumbai Soul",
    links: [
      { label: "Home", href: "/" },
      { label: "Menu", href: "/menu" },
      { label: "About", href: "/about" },
      { label: "Reservations", href: "/reservations" },
      { label: "Delivery", href: "/delivery" },
      { label: "Contact", href: "/contact" },
    ],
  },
  theme: {
    primary: "#C56A39",
    primaryDark: "#1d4ed8",
    secondary: "#F5E6D3",
    accent: "#8B2500",
    background: "#ffffff",
    surface: "#f1f5f9",
    textPrimary: "#0f172a",
    textSecondary: "#64748b",
    headingFont: "Nunito",
    bodyFont: "Lato",
  },
};