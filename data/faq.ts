export interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  { question: "What technologies do you use?", answer: "I primarily work with React, Next.js, Node.js, TypeScript, and Tailwind CSS for web development. For databases, I use PostgreSQL and MongoDB. I also have experience with Python, Docker, and various cloud platforms." },
  { question: "How long does a typical project take?", answer: "It depends on the complexity. A simple landing page can be done in 3-5 days, while a full web application might take 2-4 weeks. I'll provide a detailed timeline after understanding your requirements." },
  { question: "Do you offer post-launch maintenance?", answer: "Yes! I offer ongoing maintenance and support packages. This includes bug fixes, performance monitoring, security updates, and feature additions as needed." },
  { question: "How do we communicate during the project?", answer: "I'm flexible with communication. We can use Slack, WhatsApp, Email, or any platform you prefer. I provide regular updates and am available for quick calls when needed." },
  { question: "What's your payment process?", answer: "I typically work with 50% upfront and 50% on completion. For larger projects, we can arrange milestone-based payments. I accept bank transfers and online payment methods." },
  { question: "Can you work with existing codebases?", answer: "Absolutely. I regularly work with existing projects — whether it's adding features, fixing bugs, refactoring, or improving performance. I'll review the codebase first and provide honest feedback." },
];
