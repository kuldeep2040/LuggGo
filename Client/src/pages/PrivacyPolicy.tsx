
export default function PrivacyPolicy() {
  return (
    <main className="relative min-h-screen bg-[#f5faff] py-20 px-6 md:px-16 text-gray-800 overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse z-0" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse z-0" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-lg text-gray-600 mb-10">
          Effective Date: May 14, 2025
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">1. Information We Collect</h2>
          <p className="text-gray-600">
            We collect personal information such as your name, email, phone number, and payment details when you use our services. We may also collect data about your location and usage to improve our offerings.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">2. How We Use Your Information</h2>
          <p className="text-gray-600">
            Your information is used to process bookings, provide customer support, and improve our services. We may also use it for legal compliance and internal analytics.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">3. Data Sharing & Security</h2>
          <p className="text-gray-600">
            We do not sell your data. We only share information with trusted service providers under strict confidentiality. All your data is encrypted and protected using industry-standard security measures.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">4. Your Rights</h2>
          <p className="text-gray-600">
            You have the right to access, update, or delete your personal data. You can contact us at any time to exercise these rights.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">5. Cookies</h2>
          <p className="text-gray-600">
            We use cookies to personalize your experience and analyze site traffic. You can control cookie preferences through your browser settings.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">6. Changes to This Policy</h2>
          <p className="text-gray-600">
            We may update this policy from time to time. Significant changes will be notified on this page.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">7. Contact Us</h2>
          <p className="text-gray-600">
            For questions about this Privacy Policy, please contact us at <a href="mailto:support@lugggo.com" className="text-blue-600 underline">support@lugggo.com</a>.
          </p>
        </section>
      </div>
    </main>
  );
}
