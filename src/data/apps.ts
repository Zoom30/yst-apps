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
  {
    slug: 'focus-timer',
    name: 'Focus Timer',
    tagline: 'Stay in the zone with simple, distraction-free Pomodoro sessions.',
    description:
      'Focus Timer helps you work smarter by breaking your day into focused sprints and short breaks. No accounts, no clutter — just a clean timer that keeps you on track and lets your best work flow.',
    icon: '⏱️',
    features: [
      'Customisable focus and break durations',
      'Gentle sound cues to signal each interval',
      'Daily session history so you can see your streaks',
    ],
    playStoreUrl: 'https://play.google.com/store',
    appStoreUrl: 'https://apps.apple.com',
    privacyPolicy: `
      <h2>Privacy Policy</h2>
      <p>Last updated: March 15, 2026</p>
      <p>
        Your privacy matters. This Privacy Policy explains how
        <strong>Focus Timer</strong> handles information when you use our app.
      </p>
      <h3>Information We Collect</h3>
      <p>
        Focus Timer stores all data — your session history, timer preferences,
        and settings — exclusively on your device. We never transmit or store
        any personal information on external servers.
      </p>
      <h3>Third-Party Services</h3>
      <p>
        This app does not integrate any third-party analytics, advertising,
        or tracking services.
      </p>
      <h3>Notifications</h3>
      <p>
        If you grant notification permission, it is used solely to alert you
        when a focus or break interval ends. This permission is never used for
        marketing communications.
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
  {
    slug: 'commitr',
    name: 'Commitr',
    tagline: 'Track your commitments — subscriptions, warranties, contracts and more.',
    description:
      'Commitr helps you stay on top of every commitment in your life. Whether it\'s subscriptions, warranties, insurance policies, vehicle records, contracts, or utilities — organise them in one place, set reminders so nothing slips, and lock sensitive entries behind biometrics for extra peace of mind.',
    icon: '📋',
    features: [
      'Track subscriptions, warranties, insurance, vehicles, contracts, utilities, and custom types',
      'Attach documents like receipts and contracts, stored securely on your device',
      'Lock individual commitments with biometric or PIN authentication and AES-256 encryption',
      'Set reminders for key dates so you never miss an expiry or renewal',
      'Export and import your data as JSON for easy backups',
    ],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.yst.commitr',
    appStoreUrl: '',
    privacyPolicy: `
      <h2>Privacy Policy</h2>
      <p>Last updated: April 4, 2026</p>
      <p>
        Your privacy matters. This Privacy Policy explains how
        <strong>Commitr</strong> handles information when you use our app.
      </p>

      <h3>Information We Collect</h3>
      <p>
        Commitr does not collect any personally identifiable information.
        There are no accounts, no sign-ups, and no data sent to external
        servers. All commitment data — including titles, descriptions, dates,
        amounts, notes, custom fields, and file attachments — is stored
        exclusively on your device in a local database.
      </p>
      <p>
        Your app preferences (theme, accent colour, currency, and default
        billing cycle) are saved locally using on-device storage and are
        never transmitted.
      </p>

      <h3>Biometric Authentication &amp; Encryption</h3>
      <p>
        Commitr lets you lock individual commitments behind biometric
        (fingerprint) or device-credential (PIN/password) authentication.
        Biometric data is handled entirely by your device's operating system;
        Commitr never accesses, stores, or transmits biometric information.
      </p>
      <p>
        When a commitment is locked, its file attachments are encrypted
        on-device using AES-256-CBC. The encryption key is generated once
        and kept in your device's secure storage (Android Keystore / iOS
        Keychain). Commitr cannot retrieve this key remotely, and it never
        leaves your device.
      </p>

      <h3>Notifications</h3>
      <p>
        If you grant notification permission, it is used solely to deliver
        reminders for commitment dates you have set — for example, upcoming
        renewals or expiries. Exact-alarm and boot-completed permissions
        ensure your reminders survive device restarts. These permissions
        are never used for marketing or promotional communications.
      </p>

      <h3>File Attachments</h3>
      <p>
        Commitr allows you to attach files (receipts, contracts, documents)
        to your commitments. These files are stored locally on your device.
        When you use the share or open feature, the file is handed to your
        device's built-in sharing or file-opening mechanism — Commitr does
        not upload files to any server.
      </p>

      <h3>Data Export &amp; Import</h3>
      <p>
        You may export all your commitment data as a JSON file and import
        it back at any time. This process is entirely local; the exported
        file is saved to your device and is never sent to a remote service
        by the app.
      </p>

      <h3>Third-Party Services</h3>
      <p>
        Commitr does not integrate any third-party analytics, advertising,
        or tracking services. No data about your usage is shared with any
        third party.
      </p>

      <h3>Children's Privacy</h3>
      <p>
        Commitr does not knowingly collect any information from children.
        Because no personal data is collected at all, the app is safe for
        users of all ages.
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
