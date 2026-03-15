// Add your apps here. Each slug becomes the URL path: /apps/<slug>
export interface AppEntry {
  slug: string
  name: string
  tagline: string
  description: string
  icon: string // emoji or URL to an image
  features: string[]
  playStoreUrl: string // set to '' to hide the badge
  appStoreUrl: string // set to '' to hide the badge
  privacyPolicy: string // HTML string
}

export const apps: AppEntry[] = [
  {
    slug: 'sample-app',
    name: 'Sample App',
    tagline: 'A short, catchy description of your app.',
    description:
      'Give a compelling summary of what your app does and why people will love it. This appears on the app detail page. Keep it clear, friendly, and a couple of sentences long.',
    icon: '✨',
    features: [
      'Feature one — what it does and why it matters',
      'Feature two — another key benefit for users',
      'Feature three — round things off nicely',
    ],
    playStoreUrl: 'https://play.google.com/store',
    appStoreUrl: 'https://apps.apple.com',
    privacyPolicy: `
      <h2>Privacy Policy</h2>
      <p>Last updated: March 15, 2026</p>
      <p>
        Your privacy matters. This Privacy Policy explains how
        <strong>Sample App</strong> handles information when you use our app.
      </p>
      <h3>Information We Collect</h3>
      <p>
        This app does not collect any personally identifiable information.
        We do not require account creation or login.
      </p>
      <h3>Third-Party Services</h3>
      <p>
        This app does not integrate any third-party analytics, advertising,
        or tracking services.
      </p>
      <h3>Changes to This Policy</h3>
      <p>
        We may update this Privacy Policy from time to time. Any changes will
        be reflected on this page with an updated date.
      </p>
      <h3>Contact</h3>
      <p>
        If you have any questions about this Privacy Policy, feel free to
        reach out via the contact details on our website.
      </p>
    `,
  },
]
