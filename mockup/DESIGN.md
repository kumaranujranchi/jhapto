# Design System: High-End Hyper-Speed Editorial

## 1. Overview & Creative North Star: "Velocity Brutalism"

This design system moves beyond the predictable "app-grid" layout to embrace **Velocity Brutalism**. The Creative North Star is the intersection of high-end editorial precision and the raw, chaotic energy of a comic book. We aren't just delivering groceries; we are breaking the sound barrier.

To achieve this, the system rejects standard UI passivity. We use **intentional asymmetry**, **overlapping elements**, and **kinetic typography**. While the foundation is built on premium, layered surfaces, we inject "controlled chaos"—slanted containers, speed-line motifs, and high-contrast color blocks—to ensure the user feels the urgency and wit of the brand in every interaction.

---

## 2. Colors & Surface Logic

We utilize a high-octane palette where "Primary Yellow" acts as a beacon of speed against a sophisticated, deep-neutral foundation.

### The "No-Line" Rule
Explicitly prohibit 1px solid borders for sectioning. Boundaries are defined through **Background Color Shifts**. For example, a `surface-container-low` section should sit on a `surface` background to define a zone. The only exception is the "Hard Shadow" aesthetic used for primary UI components.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical, stacked layers.
- **Base Layer:** `surface` (#f9f6f5).
- **Secondary Zone:** `surface-container-low` (#f3f0ef).
- **Elevated Content:** `surface-container-highest` (#dfdcdc).
- **Floating Global Actions:** `primary-container` (#ffd709).

### Glass & Gradient Rule
For persistent headers or floating "Speed Trackers," use **Glassmorphism**:
- **Token:** `surface` at 70% opacity + 20px Backdrop Blur.
- **Visual Soul:** Use a subtle linear gradient on primary CTAs (`primary` to `primary-container`) to prevent the yellow from feeling "flat" or "cheap."

---

## 3. Typography: The Editorial Voice

Our typography is a conversation between structural stability and frantic motion.

*   **Display & Headlines (Epilogue):** Chunky, authoritative, and unapologetic. Use `display-lg` for hero moments, often with a slight negative letter-spacing (-0.02em) to feel "tight" and high-end.
*   **Body (Plus Jakarta Sans):** Chosen for its modern, geometric clarity. It provides the "Adult in the room" balance to the chaotic headlines.
*   **Labels (Space Grotesk):** This is our "Technical Speed" font. It feels like a receipt or a digital stopwatch.

**The "Chaos" Token:** Any label indicating time or speed (e.g., "Arriving in 5 mins") must use an italicized `label-md` to visually lean into the direction of movement.

---

## 4. Elevation & Depth: Tonal Layering

We avoid traditional "soft" shadows in favor of a "Pop-Art" depth model.

*   **The Layering Principle:** Instead of shadows, stack `surface-container-lowest` cards on a `surface-dim` background. This creates a crisp, editorial lift.
*   **Ambient Shadows:** For floating elements (like a "Cart" button), use a tinted shadow: `color: on-surface (8% opacity)`, `blur: 32px`, `y-offset: 12px`.
*   **The "Hard Shadow" (Meme Aesthetic):** For primary cards, use a 0-blur, 4px offset shadow using the `outline` token (#787676). This mimics the "thick border" request without looking like a template.
*   **Ghost Borders:** For inactive states, use `outline-variant` at 15% opacity. Never use 100% opaque borders for non-interactive elements.

---

## 5. Components: Precision vs. Play

### Buttons (The "Sonic" Variant)
*   **Primary:** `primary-container` background, `on-primary-container` text. Radius: `md` (1.5rem). Apply a 4px "Hard Shadow" on hover to simulate a physical button being pressed.
*   **Secondary:** `secondary-container` with an italicized `label-md` to signify action.

### Cards & Lists (The "Anti-Grid")
*   **No Dividers:** Prohibit horizontal lines. Separate list items using `surface-container-low` backgrounds with a `sm` (0.5rem) vertical gap.
*   **Asymmetric Corners:** For featured "Speed Deals," use a custom radius: Top-Left `xl`, Bottom-Right `xl`, but Top-Right/Bottom-Left `sm`.

### Input Fields
*   **State:** When focused, the input container should "tilt" 1-degree and the border should switch to a thick 3px `primary` stroke.
*   **Error State:** Use `error_container` with `on_error_container` text. The helper text should be bold and all-caps.

### Additional Signature Components
*   **The "Speed Streak":** A progress bar for deliveries that uses a gradient of `primary` to `tertiary`, ending in a blurred "motion trail."
*   **Meme Tooltips:** Use `inverse_surface` (#0e0e0e) with `inverse_on_surface` text for tooltips, featuring humorous, conversational microcopy (e.g., "Hold your horses, we're calculating...").

---

## 6. Do’s and Don’ts

### Do
*   **Do** overlap images over container edges. A grocery bag should "burst" out of its card.
*   **Do** use extreme typographic scale. If it’s important, make it `display-lg`.
*   **Do** use "Speed Lines" (3pt strokes of `outline-variant` at 20% opacity) in the background of empty states to maintain the "velocity" vibe.

### Don't
*   **Don't** use 1px grey lines. They are the enemy of premium design.
*   **Don't** use standard "Ease-in-out" transitions. Use "Back-out" or "Spring" animations to give the UI a snappy, kinetic feel.
*   **Don't** center-align everything. Use intentional left-alignment with wide gutters to feel like a modern magazine.

---

**Director’s Note:**
Remember, this system is a high-wire act. We are balancing the "chaos" of a startup with the "precision" of a luxury brand. If a screen feels too messy, tighten the typography. If it feels too boring, tilt a container or brighten the yellow. Move fast. Look sharp.