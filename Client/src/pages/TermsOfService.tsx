import React from "react";

export default function TermsOfService() {
  return (
    <main className="relative min-h-screen bg-[#f5faff] py-20 px-4 md:px-10 overflow-hidden">
      {/* Blue and Orange Blobs for style */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse z-0" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse z-0" />

      <div className="relative z-10 max-w-4xl mx-auto text-gray-800">
        <h1 className="text-4xl font-semibold mb-6 text-center text-gray-900">
          Terms of Service
        </h1>

        <section className="space-y-6 text-gray-700 leading-relaxed text-sm md:text-base">
          <p>
            Welcome to LuggGo! By accessing or using our services, you agree to
            comply with and be bound by the following terms and conditions.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">
            1. Use of Service
          </h2>
          <p>
            You agree to use our luggage storage and delivery services only for
            lawful purposes and in accordance with these Terms of Service.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">
            2. User Responsibilities
          </h2>
          <p>
            You are responsible for ensuring that your luggage contents comply
            with all applicable laws and regulations. We reserve the right to
            refuse service for prohibited or hazardous items.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">
            3. Payment and Fees
          </h2>
          <p>
            Fees are charged according to the hourly or daily plans selected.
            All payments are non-refundable except where required by law.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">
            4. Liability and Insurance
          </h2>
          <p>
            While we take all reasonable precautions to secure your luggage,
            we are not liable for loss or damage beyond the insurance coverage
            provided.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">
            5. Changes to Terms
          </h2>
          <p>
            We reserve the right to update or modify these Terms of Service at
            any time without prior notice. Continued use of the service
            constitutes acceptance of the revised terms.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">
            6. Contact Us
          </h2>
          <p>
            For questions about these Terms, please contact our support team
            via the contact page.
          </p>
        </section>
      </div>
    </main>
  );
}
    