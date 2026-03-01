export default function CompliancePage() {
  return (
    <main className="w-full">

      {/* Hero */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Compliance & Immigration Standards
          </h1>
          <p className="mt-6 text-gray-300 max-w-3xl mx-auto">
            Maintaining rigorous employment verification, immigration alignment,
            and workforce compliance standards across all engagements.
          </p>
        </div>
      </section>

      {/* E-Verify Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">
            BRB Data InfoTech Is an E-Verify Participating Company
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mb-10">
            We are enrolled in the E-Verify program administered by the
            U.S. Department of Homeland Security (DHS) and the Social
            Security Administration (SSA) to confirm employment
            authorization for our workforce.
          </p>

          <div className="grid md:grid-cols-4 gap-6 text-sm">
            <div className="p-4 border rounded-lg bg-white">
              ✓ DHS Authorized E-Verify Participant
            </div>
            <div className="p-4 border rounded-lg bg-white">
              ✓ I-9 Employment Verification
            </div>
            <div className="p-4 border rounded-lg bg-white">
              ✓ STEM OPT 24-Month Extension Eligible
            </div>
            <div className="p-4 border rounded-lg bg-white">
              ✓ USCIS Process Alignment
            </div>
          </div>
        </div>
      </section>

      {/* Immigration & Work Authorization */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-6">
            Immigration & Work Authorization
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We directly sponsor H-1B petitions as an employer entity and maintain
            structured immigration and employment compliance processes across
            all workforce engagements.
          </p>
        </div>
      </section>

      {/* Workforce Compliance */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-6">
            Workforce Compliance Framework
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our compliance framework includes employment eligibility
            verification, immigration documentation management,
            regulatory record keeping, and structured onboarding
            processes to meet enterprise and federal workforce standards.
          </p>
        </div>
      </section>

    </main>
  );
}