export default function Footer() {
  return (
    <footer className="bg-brown text-white/70 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid sm:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-white mb-3">
              <span className="text-honey">Bee Bomb</span> Honey
            </h3>
            <p className="text-sm leading-relaxed italic">
              Our bees are the bomb.
            </p>
            <p className="text-sm mt-2">Steamboat Springs, Colorado</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold uppercase tracking-wider text-sm mb-4">
              Quick Links
            </h4>
            <div className="space-y-2">
              {["Home", "About", "Products", "Gallery", "Blog", "FAQ", "Contact"].map(
                (link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="block text-sm hover:text-honey transition-colors"
                  >
                    {link}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold uppercase tracking-wider text-sm mb-4">
              Contact
            </h4>
            <div className="space-y-2 text-sm">
              <p>2130 Resort Drive, Unit E</p>
              <p>Steamboat Springs, CO</p>
              <a href="tel:3036411659" className="block hover:text-honey transition-colors">
                (303) 641-1659
              </a>
              <a href="mailto:beebombhoney@gmail.com" className="block hover:text-honey transition-colors">
                beebombhoney@gmail.com
              </a>
              <a
                href="https://www.facebook.com/people/Bee-Bomb-Honey/61552058123683/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-honey transition-colors mt-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Bee Bomb Honey. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
