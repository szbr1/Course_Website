import { Plus } from 'lucide-react';

/**
 * Interface for FAQ items
 */
interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

/**
 * FAQ Constants for the Landing Page Section
 * Values based on common platform standards for courses and subscriptions.
 */
export const FAQ_DATA: FAQItem[] = [
  {
    id: 1,
    question: "Do I get lifetime access to the courses?",
    answer: "Yes! Once you purchase a course, you have unlimited lifetime access to the content, including any future updates made to that specific course."
  },
  {
    id: 2,
    question: "Can I learn at my own pace?",
    answer: "Absolutely. Our platform is entirely self-paced. You can start, pause, and resume your learning whenever it fits your schedule."
  },
  {
    id: 3,
    question: "What happens if I upgrade to Pro?",
    answer: "Upgrading to Pro unlocks premium features such as advanced projects, exclusive community access, monthly live Q&A sessions, and priority support."
  },
  {
    id: 4,
    question: "Do you provide certificates?",
    answer: "Yes, upon successful completion of a course and its associated assessments, you will receive a digital certificate of completion that you can share on LinkedIn or your portfolio."
  },
  {
    id: 5,
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your subscription at any time through your account settings. You will retain access to Pro features until the end of your current billing period."
  },
  {
    id: 6,
    question: "Who should I contact for support?",
    answer: "For technical issues or billing inquiries, you can reach our support team through the contact page or by emailing support@platform.com."
  }
];