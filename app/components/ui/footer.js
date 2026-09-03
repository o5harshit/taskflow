
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-xl bg-white p-2">
                <span className="text-xl font-black text-gray-900">TF</span>
              </div>

              <h2 className="text-2xl font-bold text-white">TaskFlow</h2>
            </div>

            <p className="max-w-sm leading-7 text-gray-400">
              Manage projects, collaborate with your team, and deliver work
              faster with one modern workspace.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="rounded-lg bg-gray-800 p-3 transition hover:bg-indigo-600"
              >
                GitHub
              </a>

              <a
                href="#"
                className="rounded-lg bg-gray-800 p-3 transition hover:bg-indigo-600"
              >
                LinkedIn
              </a>

              <a
                href="#"
                className="rounded-lg bg-gray-800 p-3 transition hover:bg-indigo-600"
              >
                X
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Product</h3>

            <ul className="space-y-3">
              <li>
                <Link href="/dashboard" className="hover:text-white">
                  Dashboard
                </Link>
              </li>

              <li>
                <Link href="/projects" className="hover:text-white">
                  Projects
                </Link>
              </li>

              <li>
                <Link href="/tasks" className="hover:text-white">
                  Tasks
                </Link>
              </li>

              <li>
                <Link href="/pricing" className="hover:text-white">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Company</h3>

            <ul className="space-y-3">
              <li>
                <Link href="/about" className="hover:text-white">
                  About
                </Link>
              </li>

              <li>
                <Link href="/careers" className="hover:text-white">
                  Careers
                </Link>
              </li>

              <li>
                <Link href="/blog" className="hover:text-white">
                  Blog
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Support</h3>

            <ul className="space-y-3">
              <li>
                <Link href="/help" className="hover:text-white">
                  Help Center
                </Link>
              </li>

              <li>
                <Link href="/privacy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link href="/terms" className="hover:text-white">
                  Terms
                </Link>
              </li>

              <li>
                <Link href="/faq" className="hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-14 rounded-2xl border border-gray-800 bg-gray-900 p-8">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <h3 className="text-xl font-bold text-white">
                Stay updated
              </h3>

              <p className="mt-2 text-gray-400">
                Get product updates and productivity tips every week.
              </p>
            </div>

            <div className="flex w-full max-w-md gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-xl border border-gray-700 bg-gray-950 px-4 py-3 text-white outline-none focus:border-indigo-500"
              />

              <button className="rounded-xl bg-indigo-600 px-5 py-3 font-medium text-white transition hover:bg-indigo-500">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-6 text-sm text-gray-500 md:flex-row">
          <p>© {year} TaskFlow. All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>

            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>

            <Link href="/cookies" className="hover:text-white">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}