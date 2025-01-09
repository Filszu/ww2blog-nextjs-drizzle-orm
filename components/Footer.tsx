import Link from 'next/link'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 font-playfair">WW2 Machines</h3>
            <p className="text-sm text-gray-400">Exploring the technology that shaped history.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-gray-300 transition-colors duration-200">About</Link></li>
              <li><Link href="/contact" className="hover:text-gray-300 transition-colors duration-200">Contact</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-gray-300 transition-colors duration-200">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl hover:text-gray-300 transition-colors duration-200"><FaFacebook /></a>
              <a href="#" className="text-2xl hover:text-gray-300 transition-colors duration-200"><FaTwitter /></a>
              <a href="#" className="text-2xl hover:text-gray-300 transition-colors duration-200"><FaInstagram /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>Give a star on <Link href={"https://github.com/filszu"}>Github</Link></p>
          <p>&copy; 2024 - 2025 WW2 Machines Blog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

