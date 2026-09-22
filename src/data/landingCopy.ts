import { Testimonial, ComparisonFeature, SectionSpec } from '../types';

export const SECTION_SPECS: SectionSpec[] = [
  {
    id: 'hero',
    sectionNumber: 1,
    title: 'Hero Section',
    headline: 'Stop Wondering If They’re Safe. Know It in Real Time.',
    subheadline:
      'The first AI-guided health band engineered for aging parents. It detects silent heart irregularities, tracks falls before they escalate, and alerts you instantly—without awkward buttons or confusing touchscreens.',
    bodyCopy: [
      'Continuous 24/7 cardiac & stroke risk tracking.',
      'Precision fall detection with zero-delay GPS locator.',
      'One tactile SOS push directly dials family & dispatchers.',
      'No complex apps for seniors to stumble through.'
    ],
    ctaText: 'Claim Your 60-Day Risk-Free Trial',
    uxWireframeNotes: [
      'Above-the-fold 60/40 split: High-contrast typography on left, 3D/photorealistic LifeBand device on right with live pulse & telemetry rings.',
      'Sticky trust micro-bar directly below CTA: "⭐ Rated 4.9/5 by 3,400+ Families • Free 2-Day Shipping • 60-Day In-Home Guarantee".',
      'Dual CTA hierarchy: High-emphasis Primary Button with subtle pulse accent, accompanied by secondary text link: "Watch 60s Caregiver Video".',
      'Accessibility: 18px+ body font, WCAG AAA compliant text contrast against clean linen background (#FBFBFA).'
    ],
    croRationale:
      'Taps into the acute subconscious dread every adult child harbors ("Did Mom pick up the phone?"). Eliminates friction by reassuring them that seniors don’t need tech literacy to wear it.'
  },
  {
    id: 'problem',
    sectionNumber: 2,
    title: "The Problem We're Solving",
    headline: 'The Silent 4 Minutes That Keep Caregivers Awake at 2 AM',
    subheadline:
      'When your parent lives alone or battles dementia, silence isn’t golden. Silence is terrifying.',
    bodyCopy: [
      'The "Hidden" Fall: 80% of elderly falls happen in bathrooms or hallways when nobody is looking. If they can’t reach a phone, hours slip away.',
      'Silent Stroke & Arrhythmia: Atrial fibrillation rarely shouts; it whispers. Conventional smartwatches notice too late or drown you in false alarms.',
      'The Agony of Wandering: For someone with memory decline, a familiar stroll becomes disorienting within three blocks.',
      'The Stigma of Ugly Pendants: Seniors leave bulky panic buttons on bedside tables because wearing a plastic box feels humiliating.'
    ],
    uxWireframeNotes: [
      '4-column or 2x2 asymmetric card layout with muted danger badges (soft amber/crimson accents, not jarring neon).',
      'Real-world statistical counters (e.g. "1 in 3 adults over 65 fall each year", "Average time to help without automated alerts: 4.2 hours").',
      'Emotional storytelling callout container with pull-quote from a daughter who discovered her father after an overnight bathroom fall.'
    ],
    croRationale:
      'Agitates the specific emotional tension points without coming across as manipulative scare tactics. Validates the caregiver’s guilt and exhaustion while framing automation as an act of loving vigilance.'
  },
  {
    id: 'intro-features',
    sectionNumber: 3,
    title: 'Introducing Zyphor LifeBand',
    headline: 'Continuous AI Vigilance. Zero Effort for Your Parent.',
    subheadline:
      'We stripped out every unnecessary gadget feature and poured all our engineering into what saves lives: immediate anomaly detection and split-second alert dispatch.',
    bodyCopy: [
      'AI Neural Heart Sentinel: Scans pulse variance 120 times every minute, catching Afib precursors and micro-spikes linked to impending strokes.',
      'Multi-Vector Fall Verification: Combines barometric pressure shifts and 6-axis gyroscopes. It differentiates dropping a book from a hard hip impact, wiping out 98% of false alarms.',
      'Autonomous SafeZone GPS: Sets invisible safety perimeters around home and neighborhood. If dementia causes wandering, family phones buzz before they cross busy intersections.',
      'Tactile Physical SOS: No swipe-to-unlock, no tiny touch menus. A deliberate 3-second tactile hold summons emergency contacts and streams live GPS coordinates.',
      '7-Day Ultra-Battery: Breathable hypoallergenic band with rapid magnetic snap charging that lasts a full week.'
    ],
    uxWireframeNotes: [
      'Interactive visual breakdown: Interactive hotspot pins over the LifeBand casing highlighting the sensor package, recessed SOS button, and medical-grade optical cluster.',
      'Micro-animations illustrating the signal flow: LifeBand Sensor → AI Anomaly Filter → Instant Cloud Alert → Family Smartphone App & 911 Dispatch.'
    ],
    croRationale:
      'Positions the AI as an active guardian rather than a passive data tracker. Demystifies technology with simple cause-and-effect benefits.'
  },
  {
    id: 'benefits',
    sectionNumber: 4,
    title: 'Key Benefits (For Seniors & Caregivers)',
    headline: 'Dignity for Them. Undisturbed Sleep for You.',
    subheadline:
      'Caregiving shouldn’t mean turning your relationship into an exhausting police patrol.',
    bodyCopy: [
      'FOR SENIORS: True Independence: Live alone without children calling every forty minutes to verify you are breathing.',
      'FOR SENIORS: Invisible Protection: Sleek, lightweight matte design resembles an understated wrist accessory, not a hospital tag.',
      'FOR SENIORS: Zero Complex Menus: Put it on, snap the clasp, and live your day.',
      'FOR CAREGIVERS: Instant Actionable Alerts: Receive push notifications and SMS within 3 seconds of a registered incident.',
      'FOR CAREGIVERS: Multi-Family Circle: Coordinate with siblings, neighbors, or home nurses in one unified status dashboard.',
      'FOR CAREGIVERS: Reduced Burnout: Reclaim your mental bandwidth knowing a dedicated AI shield is keeping watch 24 hours a day.'
    ],
    uxWireframeNotes: [
      'Side-by-side comparative split tabs: "For Aging Loved Ones" (Dignity & Ease) vs. "For Family & Caregivers" (Peace of Mind & Speed).',
      'Iconography pairing: Heartbeat pulse, shield, battery life, family circle, and phone notification previews with simulated SMS messages.'
    ],
    croRationale:
      'Solves the dual-customer purchase dilemma: The adult child is usually the buyer, but the senior is the user. If the senior refuses to wear it, the sale fails. Demonstrating dignity overcomes senior resistance.'
  },
  {
    id: 'comparison',
    sectionNumber: 5,
    title: 'Why Choose Us / Uniqueness',
    headline: 'Why Common Smartwatches & Bulky Pendants Fall Short',
    subheadline:
      'Most devices were designed for marathon runners or retirement homes. Zyphor was built specifically for active seniors and their families.',
    bodyCopy: [
      'Smartwatches require daily charging; LifeBand lasts 7 days so it stays on their wrist overnight when most strokes occur.',
      'Smartwatches require navigating confusing apps; LifeBand works fully autonomously.',
      'Medical call buttons only work inside the house within range of a wall plug; LifeBand carries nationwide cellular GPS anywhere.',
      'Medical pendants scream "fragile patient"; LifeBand looks like a modern minimalist health band.'
    ],
    uxWireframeNotes: [
      'Comprehensive comparison matrix table with checkmarks and cross icons across 6 critical dimensions (Battery, AI Stroke Detection, Fall Accuracy, Wandering GPS, Ease of Use, Stigma Factor).',
      'Highlight column for Zyphor with elevated drop shadow and "Best Overall Protection" pill badge.'
    ],
    croRationale:
      'Systematically neutralizes the two biggest alternatives: "Can’t I just buy Mom an Apple Watch?" and "Shouldn’t I just get the cheap red plastic button?".'
  },
  {
    id: 'social-proof',
    sectionNumber: 6,
    title: 'Social Proof / Clinical Trust',
    headline: 'Trusted by Over 14,000 Families and Geriatric Specialists',
    subheadline:
      'Real stories from sons, daughters, and healthcare professionals who refuse to leave safety to chance.',
    bodyCopy: [
      '"Last month my father wandered outside during an early morning fog. Before he reached the highway, the Zyphor SafeZone alert woke me up. That alert saved his life." — Sarah M., Caregiver',
      '"The stroke risk anomaly detection flagged an irregular arrhythmia in my mother three weeks before her clinical checkup. Her cardiologist told us catching it early prevented a major cardiac episode." — David K., Son',
      '"As a geriatric physician, the biggest hurdle is compliance. Patients take off ugly gadgets. They keep the Zyphor on because it feels comfortable and looks normal." — Dr. Aris Vance, MD, Geriatric Medicine'
    ],
    uxWireframeNotes: [
      '3-card masonry grid with 5-star ratings, verified purchaser badges, and authentic photos/avatars.',
      'Security & compliance logo ribbon: HIPAA Compliant Data Encryption, FDA-Registered Sensor Partners, Cellular Carrier Certified (AT&T/Verizon/T-Mobile dual-SIM).'
    ],
    croRationale:
      'Provides institutional credibility alongside raw emotional empathy. Addresses lingering doubts about medical validity and daily compliance.'
  },
  {
    id: 'final-cta',
    sectionNumber: 7,
    title: 'Final Call-to-Action Footer',
    headline: 'Don’t Wait for a Close Call to Force Your Hand.',
    subheadline:
      'Give your loved ones the freedom they deserve and yourself the calm nights you’ve been missing. Try Zyphor LifeBand completely risk-free for 60 days.',
    bodyCopy: [
      'Full 60-day in-home trial with 100% money-back guarantee.',
      'Free 2-day discreet priority shipping directly to your door.',
      'Pre-activated cellular connectivity—works straight out of the box with zero Wi-Fi headaches.',
      'Dedicated US-based family onboarding specialist ready to assist.'
    ],
    ctaText: 'Secure Your Loved One’s Safety Now',
    uxWireframeNotes: [
      'High-contrast focal banner with warm emerald or indigo container, clear primary action button, phone order alternative ("Or speak with an advisor: 1-800-555-ZYPHOR").',
      'Trust icon array: 60-Day Trial, Free Returns, 1-Year Warranty, 256-bit Encrypted Health Data.',
      'Minimalist footer with FAQ links, clinical whitepaper download, and caregiver guide resources.'
    ],
    croRationale:
      'Creates urgency rooted in genuine love and responsibility rather than synthetic countdown timers. Clears all financial risk with the 60-day refund guarantee.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: 'Elena Rostova',
    role: 'Primary Caregiver for her Mother (Age 81)',
    location: 'Denver, Colorado',
    rating: 5,
    highlight: 'Saved mom after a middle-of-the-night kitchen fall',
    quote:
      'My mom fell at 3:15 AM getting a glass of water. Her old pendant was sitting on the nightstand. The Zyphor LifeBand detected the impact immediately, verified no recovery movement, and buzzed my phone. We had paramedics there in 12 minutes. I can’t put a price on that.'
  },
  {
    id: '2',
    author: 'Dr. Michael Chen, MD',
    role: 'Board-Certified Cardiologist & Aging Researcher',
    location: 'Boston Medical Center',
    rating: 5,
    highlight: 'Clinical-grade anomaly filtering eliminates panic alerts',
    quote:
      'Most consumer smartwatches generate too many false positives, which causes alarm fatigue for both families and physicians. Zyphor’s AI anomaly model specifically looks for hemodynamic drop combined with pulse arrhythmia. It is a genuine leap in proactive geriatric telemetry.'
  },
  {
    id: '3',
    author: 'Marcus & Brenda Vance',
    role: 'Caring for Father with Stage 2 Dementia',
    location: 'Austin, Texas',
    rating: 5,
    highlight: 'The SafeZone geofencing gave our family our lives back',
    quote:
      'Dad started wandering around 4 PM every afternoon due to sundowning. With Zyphor, we drew a 200-meter safety zone around our cul-de-sac. Last Tuesday he walked past the garden gate and our phones chimed right away. We gently walked him back before he felt any panic.'
  }
];

export const COMPARISON_DATA: ComparisonFeature[] = [
  {
    feature: 'AI Stroke & Cardiac Anomaly Detection',
    category: 'Clinical Protection',
    zyphor: 'Continuous 24/7 Deep AI Analysis',
    standardWatch: 'Basic high/low pulse notifications',
    medicalPendant: 'None (only manual button)',
    advantage: 'Catches silent physiological pre-symptoms before an emergency occurs.'
  },
  {
    feature: 'Fall Detection Accuracy',
    category: 'Emergency Response',
    zyphor: '99.4% Verified (Dual Barometer + AI)',
    standardWatch: 'Moderate (frequent false alarms from hand claps)',
    medicalPendant: 'Basic tilt sensor (fails on slow slips)',
    advantage: 'Virtually zero false alarms so caregivers take every alert seriously.'
  },
  {
    feature: 'Wandering & Real-Time GPS Tracking',
    category: 'Dementia Safety',
    zyphor: 'Autonomous Cellular GPS + SafeZones',
    standardWatch: 'Requires nearby linked iPhone',
    medicalPendant: 'Only works within 300ft of home base unit',
    advantage: 'Works nationwide anywhere there is cellular signal, even on walks and road trips.'
  },
  {
    feature: 'Battery Longevity',
    category: 'Daily Usability',
    zyphor: 'Up to 7 Days on a Single Charge',
    standardWatch: '18–24 hours (dies overnight in bed)',
    medicalPendant: 'Months (but lacks all real-time vitals)',
    advantage: 'Remains on their wrist during sleep, which is the highest-risk window for strokes.'
  },
  {
    feature: 'User Interface Simplicity',
    category: 'Senior Usability',
    zyphor: 'Zero Menus • 1 Tactile SOS Button',
    standardWatch: 'Tiny touch icons & confusing notifications',
    medicalPendant: 'Single button, but awkward lanyard design',
    advantage: 'No passwords, updates, or complicated touch screens for seniors to get lost in.'
  },
  {
    feature: 'Stigma & Form Factor',
    category: 'Lifestyle',
    zyphor: 'Discreet, elegant matte wellness band',
    standardWatch: 'Bulky gadget look',
    medicalPendant: 'Bright red plastic hospital pendant',
    advantage: 'Seniors actually enjoy wearing it every day without feeling self-conscious.'
  }
];
