import React, { useState } from 'react';
import { Copy, Check, FileText, Layout, Sparkles, Layers, BookOpen } from 'lucide-react';
import { SECTION_SPECS, COMPARISON_DATA, TESTIMONIALS } from '../data/landingCopy';

export const CopySpecView: React.FC = () => {
  const [copiedAll, setCopiedAll] = useState(false);
  const [copiedSection, setCopiedSection] = useState<number | null>(null);

  const generateFullMarkdown = () => {
    return `# Zyphor LifeBand — High-Converting Landing Page Copy & Wireframe Architecture

**Product:** Zyphor LifeBand (by Zyphor)  
**Category:** AI-Powered Senior Health & Safety Wearable  
**Core Target Audience:** Elderly individuals (dementia, Alzheimer's, chronic heart conditions) and their adult children/caregivers.  
**CRO Core Thesis:** Eliminate caregiver dread ("the 3 AM call") while overcoming senior resistance by replacing stigmatizing panic buttons with an effortless, dignified wellness band.

---

## Section 1: Hero Section
- **Catchy Headline:** Stop Wondering If They’re Safe. Know It in Real Time.
- **Subheadline:** The first AI-guided health band engineered for aging parents. It detects silent heart irregularities, tracks falls before they escalate, and alerts you instantly—without awkward buttons or confusing touchscreens.
- **Primary CTA Button:** Claim Your 60-Day Risk-Free Trial
- **Secondary CTA:** Watch How It Works (60s Video)
- **Friction Eliminators:** 60-Day In-Home Trial • 100% Money-Back Guarantee • No Setup or App Fees
- **UI/UX Wireframe Notes:**
  - Above-the-fold 60/40 desktop split: High-contrast typography on left, 3D interactive LifeBand device on right with live pulse and telemetry rings.
  - Sticky trust micro-bar below CTA: "⭐ Rated 4.9/5 by 14,000+ Families • Free 2-Day Priority Delivery".
  - High-emphasis primary button with subtle emerald accent, WCAG AAA compliant text contrast against clean neutral background (#FBFBFA).

---

## Section 2: The Problem We're Solving
- **Headline:** The Silent 4 Minutes That Keep Caregivers Awake at 2 AM
- **Subheadline:** When your parent lives alone or battles dementia, silence isn’t golden. Silence is terrifying.
- **Core Pain Points:**
  1. *The "Hidden" Fall:* 80% of elderly falls happen alone in bathrooms or hallways. If they can’t reach a phone, hours slip away.
  2. *Silent Stroke & Arrhythmia:* Atrial fibrillation whispers until it's too late. Conventional smartwatches notice too late or drown you in false alarms.
  3. *The Agony of Dementia Wandering:* For someone with memory decline, a familiar stroll becomes disorienting within three blocks.
  4. *The Stigma of Ugly Pendants:* Seniors leave bulky panic buttons on bedside tables because wearing a plastic box feels humiliating.
- **UI/UX Wireframe Notes:**
  - 4-card asymmetric layout with muted danger badges (soft amber/crimson, not aggressive alarmist neon).
  - Stat counters with verifiable data sources.
  - Emotional caregiver pull-quote box validating burnout and guilt.

---

## Section 3: Introducing Zyphor LifeBand
- **Headline:** Continuous AI Vigilance. Zero Effort for Your Parent.
- **Subheadline:** We stripped out every unnecessary gadget feature and poured all our engineering into what saves lives: immediate anomaly detection and split-second alert dispatch.
- **The 4 AI Protection Pillars:**
  1. *AI Neural Heart Sentinel:* Scans pulse variance 120 times every minute, catching Afib precursors and micro-spikes linked to impending strokes.
  2. *Multi-Vector Fall Verification:* Combines barometric pressure shifts and 6-axis gyroscopes to wipe out 98% of false alarms.
  3. *Autonomous SafeZone GPS:* Sets invisible safety perimeters. If dementia causes wandering, family phones buzz before they cross busy intersections.
  4. *Tactile Physical SOS:* Deliberate 3-second tactile hold summons emergency contacts and streams live GPS coordinates without unlocking any screen.
  5. *Hardware Reliability:* 7-day magnetic battery, IP68 showerproof, breathable hypoallergenic knit band.
- **UI/UX Wireframe Notes:**
  - Interactive hotspot selector linking 4 core features to anatomical device illustrations.
  - Data signal visualization: Sensor array → AI anomaly filter → Instant family app notification.

---

## Section 4: Key Benefits (Seniors & Caregivers)
- **Headline:** Dignity for Them. Undisturbed Sleep for You.
- **Subheadline:** Caregiving shouldn’t mean turning your relationship into an exhausting police patrol.
- **For Seniors (Dignity & Freedom):**
  - *True Independence:* Live alone without children calling every forty minutes to verify you are upright.
  - *Invisible Protection:* Sleek, lightweight matte design resembles an understated wrist accessory, not a hospital tag.
  - *Zero Tech Menus:* No tiny apps, logins, or confusing Bluetooth pairing rituals.
  - *24/7 Showerproof Safety:* Keep it on in the shower where over 70% of bathroom slips happen.
- **For Caregivers (Peace of Mind & Speed):**
  - *Unbroken Sleep:* Sleep soundly knowing critical alerts bypass silent phone mode only for genuine crises.
  - *Instant 3-Second Alerts:* Receive exact GPS coordinates, fall impact severity, and battery levels instantly.
  - *United Family Circle Hub:* Coordinate check-ins between siblings, grandchildren, and visiting nurses in one app.
  - *Proactive Anomaly Insights:* Export cardiovascular trend reports directly for their cardiologist.
- **UI/UX Wireframe Notes:**
  - Side-by-side interactive split tab: "For Aging Loved Ones" vs "For Family & Caregivers".
  - Clear visual contrast between emotional dignity and logistical peace of mind.

---

## Section 5: Why Choose Us / Uniqueness
- **Headline:** Why Common Smartwatches & Bulky Pendants Fall Short
- **Subheadline:** Most devices were designed for marathon runners or retirement homes. Zyphor was built specifically for active seniors and their families.
- **Comparison Matrix Highlights:**
  - *Battery:* Zyphor (7 Days) vs. Smartwatch (18-24 hours, dies overnight during peak stroke window) vs. Pendant (Months, but no vitals).
  - *Fall Detection Accuracy:* Zyphor (99.4% Dual Barometer + AI) vs. Smartwatch (High false alarms) vs. Pendant (Fails on slow slips).
  - *GPS Autonomy:* Zyphor (Built-in Cellular 4G LTE) vs. Smartwatch (Needs nearby phone) vs. Pendant (300ft home base only).
  - *Ease of Use:* Zyphor (Zero menus, 1 tactile SOS) vs. Smartwatch (Complex screens) vs. Pendant (Lanyard snag hazard).
  - *Stigma Factor:* Zyphor (Understated modern band) vs. Smartwatch (Bulky gadget) vs. Pendant (Humiliating hospital buzzer).
- **UI/UX Wireframe Notes:**
  - Persistent sticky comparison matrix with Zyphor column styled in elevated dark slate with a "Purpose-Built" highlight pill badge.

---

## Section 6: Social Proof & Trust Architecture
- **Headline:** Trusted by Over 14,000 Families and Geriatric Specialists
- **Subheadline:** Real stories from sons, daughters, and healthcare professionals who refuse to leave safety to chance.
- **Clinical & User Quotes:**
  - *"My mom fell at 3:15 AM getting a glass of water... Zyphor buzzed my phone immediately. Paramedics were there in 12 minutes."* — Elena Rostova, Caregiver (Denver, CO)
  - *"Most consumer watches cause alarm fatigue. Zyphor’s AI anomaly model catches real hemodynamic drops and arrhythmia."* — Dr. Michael Chen, MD, Cardiologist
  - *"Dad started wandering at 4 PM due to sundowning. The SafeZone geofence warned us before he left the cul-de-sac."* — Marcus Vance, Son (Austin, TX)
- **Trust Badges:**
  - HIPAA-compliant 256-bit encrypted telemetry data.
  - Medical sensor calibrated optical cluster.
  - Multi-carrier cellular connectivity with automated tower fallback.
- **UI/UX Wireframe Notes:**
  - 3-card grid with 5-star ratings, location stamps, verified purchaser tags, and security badge strip.

---

## Section 7: Final Call-to-Action Footer
- **Headline:** Don’t Wait for a Close Call to Force Your Hand.
- **Subheadline:** Give your loved ones the freedom they deserve and yourself the calm nights you’ve been missing. Try Zyphor LifeBand completely risk-free for 60 days.
- **Primary CTA Button:** Secure Your Loved One’s Safety Now
- **Advisory Phone Alternative:** Call our Senior Care Advisors: 1-800-555-ZYPHOR
- **Conversion Guarantees:**
  - 60-Day In-Home Trial (100% money back)
  - Free 2-Day Priority Delivery
  - 2-Year Full Hardware Replacement Warranty
  - 1-on-1 Dedicated Family Setup Specialist
- **Objection Crushing FAQs:** Covers senior compliance, unconscious fall handling, cellular Independence, and return policy.
- **UI/UX Wireframe Notes:**
  - High-contrast closing focal banner with phone order secondary link, accordion FAQ, and clean legal disclaimers.
`;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateFullMarkdown());
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2500);
  };

  const copySingleSection = (idx: number, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(idx);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  return (
    <div className="py-12 bg-stone-100 min-h-screen text-stone-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header Bar with Quick Copy */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
              <span>Full Venture & CRO Specification Document</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-serif">
              Zyphor LifeBand — Landing Page Copy & UX Wireframe Specs
            </h1>
            <p className="text-sm text-stone-600 font-sans mt-1">
              Engineered for high-converting direct-to-consumer geriatric safety, caregiver peace of mind, and senior dignity.
            </p>
          </div>

          <button
            id="copy-full-spec-btn"
            onClick={copyToClipboard}
            className={`inline-flex items-center space-x-2 px-5 py-3 rounded-xl font-semibold text-xs transition-all shadow-xs shrink-0 ${
              copiedAll
                ? 'bg-emerald-700 text-white'
                : 'bg-stone-900 hover:bg-stone-800 text-white active:scale-95'
            }`}
          >
            {copiedAll ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            <span>{copiedAll ? 'Full Markdown Copied!' : 'Copy Full Markdown'}</span>
          </button>
        </div>

        {/* Section Cards */}
        <div className="space-y-6">
          {SECTION_SPECS.map((spec, idx) => {
            const sectionText = `### Section ${spec.sectionNumber}: ${spec.title}\n\n**Headline:** ${spec.headline}\n**Subheadline:** ${spec.subheadline || ''}\n${spec.ctaText ? `**CTA Button:** ${spec.ctaText}\n` : ''}\n**Key Body Copy:**\n${spec.bodyCopy.map(b => `- ${b}`).join('\n')}\n\n**UI/UX Wireframe Notes:**\n${spec.uxWireframeNotes.map(n => `- ${n}`).join('\n')}\n\n**CRO Strategy:** ${spec.croRationale}`;
            const isCopied = copiedSection === idx;

            return (
              <div
                key={spec.id}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-2xs space-y-5"
              >
                <div className="flex items-center justify-between border-b border-stone-100 pb-4">
                  <div className="flex items-center space-x-2">
                    <span className="w-7 h-7 rounded-lg bg-stone-100 text-stone-800 font-mono font-bold text-xs flex items-center justify-center">
                      0{spec.sectionNumber}
                    </span>
                    <h2 className="text-lg font-bold text-stone-900 font-serif">{spec.title}</h2>
                  </div>

                  <button
                    onClick={() => copySingleSection(idx, sectionText)}
                    className="inline-flex items-center space-x-1.5 text-xs text-stone-600 hover:text-stone-900 font-medium px-3 py-1.5 rounded-lg border border-stone-200 hover:bg-stone-50 transition-colors"
                  >
                    {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{isCopied ? 'Copied' : 'Copy Section'}</span>
                  </button>
                </div>

                {/* Content Block */}
                <div className="space-y-3">
                  <div>
                    <span className="text-[11px] font-mono font-semibold uppercase text-stone-600 block">Headline:</span>
                    <div className="text-xl font-bold font-serif text-stone-900">{spec.headline}</div>
                  </div>

                  {spec.subheadline && (
                    <div>
                      <span className="text-[11px] font-mono font-semibold uppercase text-stone-600 block">Subheadline:</span>
                      <p className="text-sm text-stone-700 font-sans">{spec.subheadline}</p>
                    </div>
                  )}

                  {spec.ctaText && (
                    <div>
                      <span className="text-[11px] font-mono font-semibold uppercase text-stone-600 block">Primary CTA Text:</span>
                      <div className="inline-block px-3 py-1 bg-emerald-50 text-emerald-800 font-semibold text-xs rounded-md border border-emerald-200 mt-1">
                        {spec.ctaText}
                      </div>
                    </div>
                  )}

                  <div>
                    <span className="text-[11px] font-mono font-semibold uppercase text-stone-600 block mb-1">Body Points:</span>
                    <ul className="list-disc pl-5 text-xs text-stone-700 space-y-1 font-sans">
                      {spec.bodyCopy.map((pt, pIdx) => (
                        <li key={pIdx}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* UX Wireframe & Layout Blueprint */}
                <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-xs space-y-2">
                  <div className="flex items-center space-x-1.5 font-bold text-amber-900 uppercase tracking-wider text-[11px]">
                    <Layout className="w-4 h-4 text-amber-700" />
                    <span>UI/UX Wireframe & Visual Layout Notes</span>
                  </div>
                  <ul className="list-disc pl-5 text-stone-700 space-y-1 font-mono">
                    {spec.uxWireframeNotes.map((note, nIdx) => (
                      <li key={nIdx}>{note}</li>
                    ))}
                  </ul>
                  <div className="pt-2 border-t border-amber-200/60 font-mono text-[11px] text-stone-600">
                    <strong className="text-stone-800">CRO Psychology:</strong> {spec.croRationale}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
