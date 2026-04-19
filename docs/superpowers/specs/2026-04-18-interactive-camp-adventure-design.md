# Design Specification: Interactive Camp Adventure Portal

**Date:** 2026-04-18
**Project:** Buzachi Kids Camp Portal
**Status:** Draft / User Approved Concepts

## Goal
Transform the current multi-step camp selection survey into a high-end, immersive "Digital Luxury" experience characterized by fluid animations, gamified progress, and premium visual aesthetics.

## User Experience & Narrative
The user experience is framed as a "Journey to the Perfect Camp." As the user provides information, they are figuratively "packing their bags" for the adventure.

### 1. Progress Gamification: The "Packer"
- **Visual:** A custom-designed backpack icon/SVG remains visible.
- **Narrative Sync:**
  1. **Employee Data** → *Map* (Planning the start).
  2. **Child Info** → *Sneakers* (Preparing the traveler).
  3. **Camp Type** → *Compass* (Finding the direction).
  4. **Location** → *Binoculars* (Scouting the target).
  5. **Activities** → *Flashlight* (Exploring details).
  6. **Budget** → *Tent* (Setting up camp).
- **Animation:** Upon clicking "Next," the corresponding item icon spawns from the button/card and flies into the backpack using a GSAP parabolic path.

### 2. Motion Design (GSAP)
- **Step Transitions:** Steps will transition using a "Slide & Fade" pattern over 0.5s.
  - Old step: `x: -50, opacity: 0`
  - New step: `from x: 50, opacity: 0`
- **Card Interactions:**
  - Hover: Subtle scale `1.02` and border-glow effect.
  - Click: "Pulse" animation to confirm selection.
- **Result Reveal:** Cards in `step-result` will appear using a `stagger` effect (0.1s delay between each card) to create a premium feel.

### 3. Dynamic UI & Adaptive Sizing
- **[NEW] Adaptive Cards:** Remove `min-height` constraints. The `survey-card` will now dynamically shrink or expand based on the number of fields (e.g., when adding more kids).
- **[NEW] GSAP Height Transitions:** In `main.js`, I will implement height-sensing logic that smoothly animates the card's height during step transitions for a "breathing" premium feel.

### 4. Survey Flow Revision (6 Essential Steps)
- **Step 1: Employee Data** (Standard).
- **Step 2 (Children):** 
  - [NEW] Allery / Health / Features text input.
  - Profile card for each child.
- **Step 3 (Vacation Style):** 
  - Type (Active/IT/Art).
  - [NEW] Accommodation (Houses/Tents/Premium).
  - [NEW] Duration (7-20 days).
- **Step 4 (Logistics):**
  - City of departure.
  - [NEW] Max Distance (100km / 500km / Any).
  - [NEW] Organized Transport toggle.
- **Step 5 (Activities):**
  - Expanded Activity list.
  - [NEW] Excursion Importance (Nice to have / Critical).
- **Step 6 (Parameters):**
  - Budget.
  - [NEW] Month selection.
  - [NEW] First-time in camp? (Toggle).
  - [NEW] Critical choice factor (Safety/Price/Program).

### 5. Visual Identity
- **Theme:** "Modern Outdoor" - Vibrant but professional colors (Blue, Green, Amber).
- **Glassmorphism:** Navigation and input cards will use `backdrop-filter: blur(10px)` with semi-transparent white backgrounds.
- **Typography:** 
  - Headings: **Unbounded** (Bold, Geometric).
  - Body/Inputs: **Nunito** (Friendly, Readable).
- **Responsive:** Strict Mobile-First approach adhering to the `/structure` workflow.

## Technical Requirements
- **Core:** Semantic HTML5, CSS3 Variables.
- **Libraries:** GSAP (GreenSock) via CDN.
- **Data Logic:** Maintain existing validatory logic (5-digit employee ID, age matching).
- **Social Integration:** Add "Share to WhatsApp" functionality on the results page.

## Success Criteria
- Time-to-complete survey remains low despite animations.
- "Wow" factor: The interface feels alive and responsive.
- Error-free data validation.
- Consistent rendering on iOS/Android mobile browsers.

## Verification Plan
- **Performance:** Check that animations run at 60fps.
- **Usability:** Ensure the "Back" button correctly reverses item animations in the backpack (if feasible) or resets the state.
- **Device Testing:** Verify layout on 360px width screens.
