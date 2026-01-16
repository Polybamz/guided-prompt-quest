// ...existing code...
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white p-6">
      <section className="max-w-4xl w-full bg-white shadow-lg rounded-2xl overflow-hidden grid md:grid-cols-2">
        <div className="p-10 flex flex-col justify-center gap-6">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 text-indigo-700 font-bold">
              404
            </span>
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">Page not found</h1>
          </div>

          <p className="text-gray-600 leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            If you followed a link, it might be out of date.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
            >
              Return Home
            </Link>

            <a
              href="mailto:support@yourdomain.com?subject=Broken%20link%20report"
              className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 transition"
            >
              Contact Support
            </a>
          </div>

          <div className="mt-4">
            <p className="text-sm text-gray-500">Or try searching the site</p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-2 flex items-center gap-2"
              role="search"
            >
              <input
                aria-label="Search site"
                placeholder="Search..."
                className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-gray-100 border border-gray-200 hover:bg-gray-200 transition"
              >
                Search
              </button>
            </form>
          </div>

          <p className="text-xs text-gray-400 mt-4">
            Path attempted: <span className="text-gray-600 break-all">{location.pathname}</span>
          </p>
        </div>

        <div className="hidden md:flex items-center justify-center bg-indigo-50">
          <svg
            viewBox="0 0 600 400"
            className="w-3/4 h-auto"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0" stopColor="#6366f1" stopOpacity="0.9" />
                <stop offset="1" stopColor="#a78bfa" stopOpacity="0.9" />
              </linearGradient>
            </defs>
            <rect rx="40" width="100%" height="100%" fill="url(#g)" opacity="0.12" />
            <g transform="translate(60,40)">
              <circle cx="180" cy="120" r="70" fill="#fff" opacity="0.12" />
              <path
                d="M120 160c20-40 80-40 100 0"
                stroke="#fff"
                strokeWidth="6"
                strokeLinecap="round"
                fill="none"
                opacity="0.6"
              />
              <g transform="translate(30,20)" fill="#4f46e5" opacity="0.95">
                <rect x="0" y="0" width="140" height="18" rx="6" />
                <rect x="0" y="32" width="110" height="12" rx="6" opacity="0.9" />
                <rect x="0" y="52" width="80" height="12" rx="6" opacity="0.8" />
              </g>
            </g>
          </svg>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
// ...existing code...