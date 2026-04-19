# Design Specification: Digital Luxury Shift Calculator 2026

## Overview
A high-end, "Digital Luxury" web application for calculating shift-based salaries in Kazakhstan for the year 2026. The app features a sophisticated UI, real-time calculations, and breakdown of taxes and bonuses according to specific company and legal requirements.

## Visual Identity (Digital Luxury)
- **Palette**: Obsidian (#0A0C10), Emerald Green (#10B981), and Gold (#F59E0B) accents.
- **Glassmorphism**: Translucent panels with backdrop-blur effects and subtle borders.
- **Typography**: "Outfit" or "Inter" from Google Fonts for a premium look.
- **Animations**: GSAP-driven transitions, counting numbers, and smooth scroll effects.
- **Layout**: Bento-grid style for information density with clarity.

## Functional Requirements
### 1. Calculation Engine (Gross)
The calculator will follow these sequential steps:
1.  **Hourly Rate ($Rate$**): `Base Salary (890,592 ₸) / Monthly Norm`.
2.  **Basic Salary**: `(Day Hours + Night Hours * 1.5) * Rate`.
3.  **Bonus (25%)**: `Basic Salary * 0.25`.
4.  **Holiday Pay**: `Holiday Hours * Rate * 0.5` (Adding the premium on top of basic).
5.  **Travel Pay**: `22 * Rate` (Fixed travel time).
6.  **Shift Allowance**: `Shift Days * 650 ₸`.
7.  **Bonus Hour**: `1 * Rate`.
8.  **Holiday Bonus**: `MRP Count * 4,325 ₸`.
    - Nauryz, Republic Day, Independence Day: 40 MRP.
    - Petroleum Worker Day: 50 MRP.

### 2. Tax Engine (Deductions)
Calculated as a "ladder":
1.  **OPV (10%)**: `Gross * 0.1`.
2.  **VOSMS (2%)**: `(Gross - OPV) * 0.02`.
3.  **IPN (10%)**: `(Gross - OPV - VOSMS - 129,750) * 0.1`.
4.  **Net (Total Handout)**: `Gross - (OPV + VOSMS + IPN)`.

### 3. Data Integration
- **Shifts**: 4 shifts (A, B, C, D) with distinct patterns.
- **Calendar**: 2026 Kazakhstan Production Calendar integrated for norms and holidays.
- **Interactive UI**: Dropdowns for Month and Shift, toggles for Schedule Type (Day vs Day+Night).

## Proposed Approaches
### Option 1: Single-file "Instant" App (Recommended)
- All HTML/CSS/JS in one sophisticated file.
- Heavily optimized for mobile and desktop.
- Integrated 2026 data arrays.

**Recommendation**: Option 1. It provides the "Wow" effect instantly and is easiest to deploy or copy-paste into an existing environment.

## Success Criteria
- [ ] User can select Month and Shift and see immediate, accurate results.
- [ ] UI looks "Digital Luxury" (dark mode, gold/emerald accents).
- [ ] Formulas match the provided specification exactly.
- [ ] Detailed breakdown (Gross vs Net) is clearly visible.
