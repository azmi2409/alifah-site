// Case studies shared by the /work index, the /work/[slug] detail pages,
// the home page teaser, and JSON-LD.
export interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  filterTag: 'meta' | 'fb' | 'health' | 'edu';
  period: string;
  location: string;
  role: string;
  image: string;
  summary: string;
  deliverables: string[];
  metrics: { label: string; value: string }[];
  highlight: string;
  /** ISO year-month, used in structured data */
  startDate: string;
  endDate: string;
}

export const projects: Project[] = [
  {
    id: 'bonsai-sushi',
    startDate: '2023-03',
    endDate: '2023-04',
    title: 'End-to-End Meta Ads & Instagram Creative Strategy',
    client: 'Bonsai Sushi',
    category: 'F&B & Restaurant Growth',
    filterTag: 'fb',
    period: 'March 2023 - April 2023',
    location: 'Cibubur, Jakarta, Indonesia',
    role: 'Digital Marketing Specialist',
    image: '/images/bonsai-sushi.webp',
    summary: 'Full-funnel paid acquisition strategy combining targeted Facebook Ads and Google Display Ads with hands-on Instagram content planning and creative ad design.',
    deliverables: [
      'Full campaign architecture setup (Prospecting to Retargeting)',
      'A/B split testing on ad copies, imagery, and promotional hooks',
      'Targeting setup, custom audiences, and budget allocation',
      'Weekly and monthly owner reporting with actionable growth insights',
      'Instagram content planning and high-converting visual assets',
    ],
    metrics: [
      { label: 'Platform', value: 'Meta & IG Ads' },
      { label: 'Reporting', value: 'Weekly to Owner' },
      { label: 'A/B Testing', value: 'Creative & Copy' },
      { label: 'Outcome', value: 'Targeted Footfall' },
    ],
    highlight: 'Integrated paid ads directly with Instagram content design for unified brand presentation.',
  },
  {
    id: 'kowara-eatery',
    startDate: '2023-01',
    endDate: '2023-02',
    title: 'Performance Marketing & Looker Studio Attribution',
    client: 'Kowara Eatery Group',
    category: 'F&B & Restaurant Growth',
    filterTag: 'fb',
    period: 'January 2023 - February 2023',
    location: 'Jakarta, Indonesia',
    role: 'Performance Marketing (RevoU Labs)',
    image: '/images/kowara-eatery.webp',
    summary: 'Managed Facebook Ads accounts for Kowara Eatery Group under RevoU Labs, executing rigorous A/B testing and delivering automated Google Data Studio reporting for stakeholders.',
    deliverables: [
      'End-to-end Facebook Ads campaign management and monitoring',
      'Audience segmentation, demographic testing, and budget pacing',
      'Google Data Studio / Looker Studio dynamic dashboards',
      'Direct presentations to corporate stakeholders with scaling insights',
    ],
    metrics: [
      { label: 'Agency Hub', value: 'RevoU Labs' },
      { label: 'Dashboard', value: 'Google Data Studio' },
      { label: 'Optimization', value: 'CBO & ABO' },
      { label: 'Cadence', value: 'Bi-weekly Reviews' },
    ],
    highlight: 'Built interactive Google Data Studio dashboards providing real-time visibility into ad spend efficiency.',
  },
  {
    id: 'indental-clinic',
    startDate: '2022-10',
    endDate: '2022-12',
    title: 'High-Intent Dental Care & Beauty Paid Acquisition',
    client: 'Indental Clinic Surabaya',
    category: 'Healthcare & Aesthetics',
    filterTag: 'health',
    period: 'October 2022 - December 2022',
    location: 'Surabaya, East Java, Indonesia',
    role: 'Performance Marketing (RevoU Labs)',
    image: '/images/indental-clinic.webp',
    summary: 'Precision geo-targeted Facebook Ads campaign for a premier Surabaya dental clinic, driving patient inquiries for routine dental care and cosmetic dentistry.',
    deliverables: [
      'Localized radius and high-intent demographic targeting in East Java',
      'Ad creative messaging focused on painless care and aesthetic transformation',
      'A/B testing ad formats (single image vs carousel vs video)',
      'Comprehensive Google Data Studio KPI tracking and stakeholder reporting',
    ],
    metrics: [
      { label: 'Audience', value: 'Surabaya Metro' },
      { label: 'Focus', value: 'Cosmetic & Care' },
      { label: 'Attribution', value: 'Looker Studio' },
      { label: 'Testing', value: 'Multi-Variant' },
    ],
    highlight: 'Successfully matched aesthetic medical messaging with localized audience segmentation in Surabaya.',
  },
  {
    id: 'bali-wise',
    startDate: '2022-11',
    endDate: '2022-11',
    title: 'Social Media Advertising Vocational Curriculum',
    client: 'Bali WISE Non-Profit',
    category: 'Non-Profit & Vocational Education',
    filterTag: 'edu',
    period: 'November 2022',
    location: 'Nusa Dua, Bali, Indonesia',
    role: 'Social Media Module Writer',
    image: '/images/bali-wise-education.jpg',
    summary: 'Developed a comprehensive educational module on social media advertising for Bali WISE, empowering marginalized Indonesian women with practical, job-ready digital marketing skills.',
    deliverables: [
      'Complete pedagogical curriculum on social media advertising',
      'Theoretical frameworks, campaign summaries, and technical setups',
      'Hands-on quizzes and practical exercises for student assessment',
      'Empowerment-driven training material tailored for vocational learning',
    ],
    metrics: [
      { label: 'Impact', value: 'Women Empowerment' },
      { label: 'Scope', value: 'Full Curriculum' },
      { label: 'Modules', value: 'Theory & Practical' },
      { label: 'Location', value: 'Nusa Dua, Bali' },
    ],
    highlight: 'Distilled complex ad algorithms into accessible, empowering educational materials for women entering the workforce.',
  },
];

export const projectPath = (project: Project) => `/work/${project.id}/`;
