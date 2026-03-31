import { BlogPost, DetailedServiceGroup, QuickService, Testimonial } from '@/lib/types';

export const quickServices: QuickService[] = [
  {
    title: 'Nursing Visit',
    description: 'Qualified nursing professionals for home visits and essential procedures.',
    icon: 'Stethoscope',
    highlights: ['Clinical-grade procedures', 'Home comfort care', 'Trained professionals'],
    turnaround: 'Within 30-60 minutes',
    availability: '7 days a week'
  },
  {
    title: 'Lab Tests',
    description: 'Convenient at-home sample collection and reliable pathology support.',
    icon: 'FlaskConical',
    highlights: ['Accurate diagnostics', 'Safe sample collection', 'Timely reporting'],
    turnaround: 'Same-day collection',
    availability: 'Morning to evening slots'
  },
  {
    title: 'Nursing Care',
    description: 'Compassionate and regular care plans for short and long-term needs.',
    icon: 'HeartPulse',
    highlights: ['Personalized care plans', 'Family communication', 'Routine health monitoring'],
    turnaround: 'Quick caregiver assignment',
    availability: 'Flexible visit scheduling'
  }
];

export const testimonials: Testimonial[] = [
  {
    name: 'Ritika Sharma',
    role: 'Family Caregiver',
    review: 'Healfast India responded quickly and provided very professional nursing care for my father.',
    rating: 5,
    service: 'Nursing Visit'
  },
  {
    name: 'Anil Verma',
    role: 'Patient',
    review: 'The lab sample collection was smooth and timely. Reports were shared clearly and on time.',
    rating: 5,
    service: 'Lab Tests'
  },
  {
    name: 'Seema Nair',
    role: 'Patient Attendant',
    review: 'The staff is polite, skilled, and genuinely supportive. Highly recommended for home healthcare.',
    rating: 5,
    service: 'Nursing Care'
  }
];

export const serviceGroups: DetailedServiceGroup[] = [
  {
    group: 'Nursing Visit',
    icon: 'Syringe',
    items: [
      {
        name: 'Injection IV / IM',
        includes: [
          'Pre-procedure vitals and basic safety check',
          'Sterile technique and administration by trained nurse',
          'Immediate post-procedure observation'
        ],
        notIncludes: ['Medicine cost unless provided by patient', 'Emergency life-support interventions'],
        suitableFor: 'Patients needing prescribed injectable medication at home'
      },
      {
        name: 'Cannulation Insertion',
        includes: [
          'Peripheral IV cannula insertion with aseptic precautions',
          'Site preparation and fixation',
          'Basic aftercare guidance for patient/family'
        ],
        notIncludes: ['Central line procedures', 'Long-term in-hospital infusion monitoring'],
        suitableFor: 'Short-term IV access for home medication or fluids'
      },
      {
        name: 'Wound Dressing',
        includes: [
          'Wound cleaning and dressing change as advised',
          'Infection-prevention protocol',
          'Healing progress notes for family'
        ],
        notIncludes: ['Suturing or surgical interventions', 'Doctor consultation fee'],
        suitableFor: 'Post-operative and chronic wound care at home'
      },
      {
        name: 'Urine Catheter Change',
        includes: [
          'Safe catheter replacement under sterile precautions',
          'Urine flow check after placement',
          'Hygiene and care instructions'
        ],
        notIncludes: ['Treatment for severe urinary complications', 'Hospital emergency care'],
        suitableFor: 'Bedridden or long-term catheterized patients'
      },
      {
        name: 'Ryle’s Tube Change',
        includes: [
          'Tube replacement by trained nursing professional',
          'Placement check as per standard bedside protocol',
          'Family education for routine tube care'
        ],
        notIncludes: ['Radiology confirmation charges if required', 'Critical emergency airway procedures'],
        suitableFor: 'Patients requiring enteral feeding support at home'
      }
    ]
  },
  {
    group: 'Lab Tests',
    icon: 'TestTubeDiagonal',
    items: [
      {
        name: 'CBC',
        includes: [
          'At-home blood sample collection',
          'Hemoglobin, WBC, platelet and RBC profile',
          'Digital report delivery'
        ],
        notIncludes: ['Doctor interpretation consult', 'Emergency treatment planning'],
        suitableFor: 'General health screening, fever workup, and routine monitoring'
      },
      {
        name: 'LFT',
        includes: ['Liver enzyme and bilirubin panel', 'Home sample collection and secure handling', 'Online reports'],
        notIncludes: ['Ultrasound or imaging tests', 'Medication prescription'],
        suitableFor: 'Liver health monitoring and medicine follow-up'
      },
      {
        name: 'KFT',
        includes: ['Kidney function markers (urea, creatinine)', 'Proper sample labeling and transport', 'Report sharing'],
        notIncludes: ['Nephrologist consultation', 'Dialysis support'],
        suitableFor: 'Patients with diabetes, BP, or renal-risk conditions'
      },
      {
        name: 'All types of blood tests',
        includes: ['Wide test menu based on doctor prescription', 'Home collection scheduling', 'Standard lab processing'],
        notIncludes: ['Non-blood diagnostics (X-ray, MRI, CT)', 'Hospital admission support'],
        suitableFor: 'Comprehensive routine and condition-specific diagnostics'
      }
    ]
  },
  {
    group: 'Healthcare Services',
    icon: 'ShieldPlus',
    items: [
      {
        name: 'Elderly Care',
        includes: [
          'Daily living support and mobility assistance',
          'Medication reminder and routine vitals tracking',
          'Companion-style wellness support'
        ],
        notIncludes: ['Emergency ICU-level interventions', 'Specialist doctor home visits by default'],
        suitableFor: 'Senior citizens needing regular supervised care at home'
      },
      {
        name: 'Post-operative Care',
        includes: [
          'Recovery monitoring and dressing support',
          'Doctor-advised nursing follow-up',
          'Pain/comfort observation and caregiver guidance'
        ],
        notIncludes: ['Surgical revision procedures', 'In-patient hospital monitoring'],
        suitableFor: 'Patients recovering after surgery at home'
      },
      {
        name: 'Bedridden Patient Care',
        includes: [
          'Positioning and bedsore-prevention assistance',
          'Hygiene and feeding support',
          'Routine condition monitoring'
        ],
        notIncludes: ['Ventilator ICU setup', 'Complex hospital emergency intervention'],
        suitableFor: 'Long-term dependent patients requiring consistent home care'
      }
    ]
  }
];

export const blogs: BlogPost[] = [
  {
    title: 'How Home Healthcare Improves Recovery Outcomes',
    description: 'Understand how personalized home care helps patients heal faster and safer.',
    category: 'Medical education',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop',
    readTime: '6 min read',
    author: 'Healfast Clinical Team'
  },
  {
    title: '5 Daily Tips to Support Elderly Health at Home',
    description: 'Practical and easy-to-follow habits that improve comfort, safety, and wellness.',
    category: 'Practical healthcare tips',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop',
    readTime: '4 min read',
    author: 'Community Care Desk'
  },
  {
    title: 'Why Timely Blood Tests Matter: A Clinical Perspective',
    description: 'Early detection through diagnostics can significantly improve treatment decisions.',
    category: 'Scientific/medical proofs',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1200&auto=format&fit=crop',
    readTime: '7 min read',
    author: 'Medical Advisory Panel'
  }
];

export const trustStats = [
  { label: 'Patients Served', value: '1500+' },
  { label: 'Qualified Professionals', value: '50+' },
  { label: 'Response Time', value: '< 30 min' },
  { label: 'Service Availability', value: '7 Days' }
];
