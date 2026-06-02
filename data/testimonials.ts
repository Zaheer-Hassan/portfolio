export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  { quote: "Zaheer delivered an outstanding web application that exceeded our expectations. Clean code, on time, and great communication throughout.", name: "Ahmed Khan", role: "CEO, TechStartup", avatar: "/images/avatar-1.png" },
  { quote: "Working with Zaheer was a fantastic experience. He understood our requirements perfectly and built exactly what we needed.", name: "Sarah Miller", role: "Product Manager", avatar: "/images/avatar-2.png" },
  { quote: "Highly skilled developer with a keen eye for detail. The final product was polished, fast, and user-friendly.", name: "Ali Raza", role: "Founder, DigitalAgency", avatar: "/images/avatar-3.png" },
];
