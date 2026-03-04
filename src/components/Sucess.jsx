import { useLocation, Link } from "react-router-dom";

const Success = () => {
  const location = useLocation();
  const { name = "there" } = location.state || {};

  return (
    <section className="min-h-screen flex items-center justify-center bg-neutral-950 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <div className="rounded-full bg-green-500/10 p-4">
            <svg
              className="w-16 h-16 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-neutral-50 mb-6">
          Thank You <span className="text-amber-500">for Your Message</span>
        </h1>

        <p className="text-xl text-neutral-400 mb-10">
          Dear <span className="font-semibold text-neutral-50">{name}</span>, I
          appreciate your interest. Your message has been received, and I will
          respond promptly.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="px-6 py-3 bg-amber-500 text-neutral-950 font-semibold rounded-lg hover:bg-amber-400 transition-colors"
          >
            Return to Homepage
          </Link>
          <a
            href="https://wa.me/2348026151366"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-neutral-700 text-neutral-300 font-medium rounded-lg hover:border-green-500 hover:text-green-500 transition-all"
          >
            Connect via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Success;
