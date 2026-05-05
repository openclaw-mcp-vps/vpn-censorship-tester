export default function Home() {
  const faqs = [
    {
      q: "How is the data collected?",
      a: "Verified users in censored regions run lightweight connection tests through our secure API. Results are aggregated in real time to show which VPNs are currently working."
    },
    {
      q: "Which countries are covered?",
      a: "We cover 40+ countries with active censorship including China, Russia, Iran, UAE, and more. Coverage grows as our tester network expands."
    },
    {
      q: "Is my identity protected when I submit test results?",
      a: "Yes. All submissions are anonymized and routed through our privacy layer. We never log IP addresses or link results to individual accounts."
    }
  ];

  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      {/* Hero */}
      <section className="text-center mb-16">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Real-Time VPN Intelligence
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
          Know Which VPNs Actually Work
          <span className="text-[#58a6ff]"> In Your Country</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Crowdsourced, real-time reports from verified users inside censored regions.
          Stop guessing — get live data on VPN effectiveness before you need it most.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-lg px-8 py-3 rounded-lg transition-colors"
        >
          Get Access — $9/mo
        </a>
        <p className="mt-3 text-sm text-[#8b949e]">Cancel anytime. No questions asked.</p>
      </section>

      {/* Pricing */}
      <section className="mb-16">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Pro Access</h2>
          <p className="text-[#8b949e] mb-6">Everything you need to stay connected under censorship.</p>
          <div className="text-5xl font-extrabold text-[#58a6ff] mb-1">$9</div>
          <div className="text-[#8b949e] mb-8">per month</div>
          <ul className="text-left space-y-3 mb-8 max-w-xs mx-auto">
            {[
              "Live VPN status for 40+ countries",
              "Alerts when your VPN gets blocked",
              "Access to full historical test data",
              "Priority API access for developers",
              "Verified tester community access"
            ].map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold mt-0.5">✓</span>
                {feature}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="inline-block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-lg px-8 py-3 rounded-lg transition-colors"
          >
            Start Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
