# KRISHHHVERSE — Kishan Yadav's personal portfolio

A responsive, animated, single-page portfolio made with plain HTML, CSS and JavaScript. No npm install or build step is required.

## Run it

1. Extract the ZIP file.
2. Open the `krishhhverse` folder in VS Code.
3. Open `index.html` in your browser, or use the VS Code Live Server extension.

## Personalize it

### Add your profile photo
- Put a portrait photo in the `assets` folder.
- Rename it to `profile.jpg`.
- In `index.html`, find the `profileImage` element and add `src="assets/profile.jpg"` to it.
- Keep the crop portrait-oriented for the best result. The KY initials placeholder is shown until you add the photo.

### Add your social links
Open `script.js` and update the `PROFILE_LINKS` values near the top:

```js
const PROFILE_LINKS = {
  email: "mailto:yourname@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://www.linkedin.com/in/yourusername/",
  instagram: "https://www.instagram.com/yourusername/"
};
```

Use only links you want to make public.

### Edit your details
Open `index.html` and search for the text you want to change. Search for `Kishan`, `Chipi Technology`, `Visitor Management System`, or section headings. Update facts only when you can verify them.

## Current content notes

- The portfolio identifies Kishan as a B.Sc. Computer Science & Data Analytics student at IIT Patna (Hybrid), 2025–2028, based on the details supplied.
- HTML, CSS and Python are labeled foundational; Java and video editing are labeled as learning.
- The Visitor Management System entry describes the user's stated contribution as planning and documentation. It does not claim sole development or an unconfirmed technology stack.
- Sports milestones are phrased as national-level participation and KVS regional gold medal achievements. The regional meet year is left unspecified.
- Email, GitHub, LinkedIn and Instagram links are intentionally inactive until the owner adds real public URLs.

## Built-in interactions

- Responsive mobile navigation
- Scroll progress indicator
- Reveal-on-scroll motion
- Skill category filters
- Contact-link setup hints
- Reduced-motion accessibility support

Fonts load from Google Fonts when internet access is available; local system fallbacks are included.
