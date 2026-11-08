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
  supportEmail: string // support contact email
}

export const apps: AppEntry[] = [
  {
    slug: 'commitr',
    name: 'Commitr',
    tagline: 'Track your commitments — subscriptions, warranties, contracts and more.',
    description:
      "Commitr helps you stay on top of every commitment in your life. Whether it's subscriptions, warranties, insurance policies, vehicle records, contracts, or utilities — organise them in one place, set reminders so nothing slips, and lock sensitive entries behind biometrics for extra peace of mind.",
    icon: 'assets/Commitr/high-resolution-color-logo.png',
    features: [
      'Track subscriptions, warranties, insurance, vehicles, contracts, utilities, and custom types',
      'Attach documents like receipts and contracts, stored securely on your device',
      'Lock individual commitments with biometric or PIN authentication and AES-256 encryption',
      'Set reminders for key dates so you never miss an expiry or renewal',
      'Export and import your data as JSON for easy backups',
    ],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.yst.commitr',
    appStoreUrl: 'https://apps.apple.com/us/app/commitr/id6767057806',
    supportEmail: 'commitr@yellowstonetechnologies.co.uk',
    privacyPolicy: `
      <h2>Privacy Policy</h2>
      <p>Last updated: October 17, 2026</p>
      <p>
        Your privacy matters. This Privacy Policy explains how
        <strong>Commitr</strong> handles information when you use our app.
      </p>

      <h3>Information We Collect</h3>
      <p>
        Commitr does not collect any personally identifiable information.
        There are no accounts, no sign-ups, and no commitment data is ever
        sent to external servers. All commitment data - including titles,
        descriptions, dates, amounts, notes, custom fields, and file
        attachments - is stored exclusively on your device in a local
        database. The only internet connection Commitr ever makes is the
        optional model download covered in its own section below, and it
        sends none of this data.
      </p>
      <p>
        Your commitments and attachments are left out of your phone's cloud
        backups (Google, iCloud). To move them to a new phone, use Export
        &amp; Import; on Android 12 and later, direct phone-to-phone transfer
        also carries them (locked attachments excepted).
      </p>
      <p>
        Your app preferences (theme, accent colour, currency, and default
        billing cycle) are stored on your device and never sent anywhere by
        Commitr. On iPhone, your phone's own backup may include these display
        settings, but never your commitments or files.
      </p>

      <h3>Optional On-Device Model Download</h3>
      <p>
        Settings offers an optional "Enhanced accuracy" model that improves
        how well Commitr reads documents during import. Only when you tap
        Download there does Commitr connect to the internet: it downloads the
        model file from Hugging Face (huggingface.co and its content-delivery
        servers on hf.co). The download is offered on Android, where the file
        is about 2.6 GB. iPhones with Apple Intelligence use Apple's built-in
        model and download nothing; other iPhones are not offered the
        download at present. A model downloaded earlier can be deleted in
        Settings.
      </p>
      <p>
        This download sends no personal data and no document content - only
        what any web request sends, such as your IP address. Once the file is
        downloaded and verified, the model runs entirely on your device, and
        your documents never leave it. On Android it runs on LiteRT-LM, an
        open-source runtime that works offline and never connects to the
        internet.
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
        Keychain). Commitr never sends this key anywhere and cannot retrieve
        it remotely. On iPhone, the Keychain may include it, encrypted, in
        your phone's own backup.
      </p>

      <h3>Notifications</h3>
      <p>
        If you grant notification permission, it is used solely to deliver
        reminders for commitment dates you have set - for example, upcoming
        renewals or expiries. Exact-alarm and boot-completed permissions
        ensure your reminders survive device restarts. These permissions
        are never used for marketing or promotional communications.
      </p>

      <h3>File Attachments</h3>
      <p>
        Commitr allows you to attach files (receipts, contracts, documents)
        to your commitments. These files are stored locally on your device.
        When you use the share or open feature, the file is handed to your
        device's built-in sharing or file-opening mechanism - Commitr does
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
        reach out at <a href="mailto:commitr@yellowstonetechnologies.co.uk">commitr@yellowstonetechnologies.co.uk</a>.
      </p>
    `,
  },
]
