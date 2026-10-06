export const SITE_URL = 'https://www.alifah.my.id';
export const PERSON_NAME = 'Alifah Azhar Nurhazmi';
export const JOB_TITLE = 'Performance Marketer & Meta Ads Specialist';
export const EMAIL = 'alifahazhar@gmail.com';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/alifahazhar';
export const WHATSAPP_URL = 'https://wa.me/6281259488390?text=Hi%20Alifah,%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20connect!';

export const absoluteUrl = (path: string) => new URL(path, SITE_URL).href;

export const navItems = [
  { href: '/work/', label: 'Work' },
  { href: '/approach/', label: 'Approach' },
  { href: '/experience/', label: 'Experience' },
  { href: '/contact/', label: 'Contact' },
];

export const faqs = [
  {
    question: 'Who is Alifah Azhar Nurhazmi?',
    answer: 'Alifah Azhar Nurhazmi is a performance marketer and Meta Ads specialist based in Bekasi, Indonesia. Alifah spent about four years in commercial banking at Bank BRISyariah and BNI Life before moving into digital marketing through the RevoU Full Stack Digital Marketing program.',
  },
  {
    question: 'What services does Alifah offer?',
    answer: 'Meta (Facebook & Instagram) Ads campaign setup and management, audience architecture, A/B creative and hook testing, Instagram content planning, and Looker Studio reporting dashboards that track ROAS, CPA and CTR.',
  },
  {
    question: 'Which industries has Alifah worked with?',
    answer: 'F&B and restaurants (Bonsai Sushi, Kowara Eatery Group), healthcare and aesthetics (Indental Clinic Surabaya), and non-profit vocational education (Bali WISE).',
  },
  {
    question: 'How does a banking background help with paid ads?',
    answer: 'Years of reviewing cash flow and credit reports mean ad spend is treated as an investment: budgets are tied to cost per acquisition and return on ad spend, and results are reported in plain business terms rather than vanity metrics.',
  },
  {
    question: 'Is Alifah available for new projects?',
    answer: 'Yes. Alifah is open to Meta Ads consulting, contract performance-marketing roles and paid acquisition projects, working remotely from Bekasi, West Java. The fastest way to get in touch is WhatsApp (+62 812 5948 8390) or email (alifahazhar@gmail.com).',
  },
];
