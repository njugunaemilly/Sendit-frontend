import { Link } from "react-router-dom";
const navigation = {
  main: [
    { name: 'About', href: '/about' },
    { name: 'Contact us', href: '/contact-us' },
    { name: 'Sign up', href: '/sign-up' },
  ]
}

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl overflow-hidden py-20 px-6 sm:py-24 lg:px-8">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <Link href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; 2023 SENDIT. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}