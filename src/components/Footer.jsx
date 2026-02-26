import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-bg-base border-t border-white/5 pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

                    {/* Brand Section */}
                    <div className="col-span-1 lg:col-span-1">
                        <div className="mb-6 flex items-center gap-2">
                            <img src="/logo.jpeg" alt="DDW Agency Logo" className="h-12 w-auto rounded-xl object-contain" />
                            <span className="text-white font-bold tracking-tight text-xl">DDW Agency</span>
                        </div>
                        <p className="text-text-muted text-sm leading-relaxed mb-8">
                            High-margin technical consulting and production-ready software systems for enterprise brands.
                        </p>
                        <div className="flex gap-4">
                            {/* Social Icons */}
                            {[
                                {
                                    label: 'LinkedIn',
                                    icon: (
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                        </svg>
                                    ),
                                    url: "#"
                                },
                                {
                                    label: 'Instagram',
                                    icon: (
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                    ),
                                    url: "#"
                                }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary transition-all cursor-pointer group"
                                    aria-label={social.label}
                                >
                                    <span className="text-white group-hover:text-bg-base transition-colors">
                                        {social.icon}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Sections */}
                    <div>
                        <h4 className="text-lg font-bold mb-8">Our Focus</h4>
                        <ul className="space-y-4 text-sm text-text-muted">
                            <li className="hover:text-brand-primary cursor-pointer transition">Custom Software</li>
                            <li className="hover:text-brand-primary cursor-pointer transition">AI Integration</li>
                            <li className="hover:text-brand-primary cursor-pointer transition">Marketing Tech</li>
                            <li className="hover:text-brand-primary cursor-pointer transition">Strategic Advisory</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-8">Quick Links</h4>
                        <ul className="space-y-4 text-sm text-text-muted">
                            <li className="hover:text-brand-primary cursor-pointer transition">
                                <Link to="/projects">Portfolio</Link>
                            </li>
                            <li className="hover:text-brand-primary cursor-pointer transition">Our Approach</li>
                            <li className="hover:text-brand-primary cursor-pointer transition">
                                <a href="https://ddwstudio.com" target="_blank" rel="noopener noreferrer" className="text-brand-primary font-bold">Visit DDW Studio</a>
                            </li>
                            <li className="hover:text-brand-primary cursor-pointer transition">Book a Call</li>
                        </ul>
                    </div>

                    {/* Office Section */}
                    <div>
                        <h4 className="text-lg font-bold mb-8">Offices</h4>
                        <ul className="space-y-6 text-sm text-text-muted">
                            <li className="flex items-start gap-3">
                                <div className="w-5 h-5 rounded-full border border-brand-primary/30 flex items-center justify-center mt-0.5 text-[8px] text-brand-primary font-bold">IT</div>
                                <span>Rome, <br />Italy</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-5 h-5 rounded-full border border-brand-primary/30 flex items-center justify-center mt-0.5 text-[8px] text-brand-primary font-bold">US</div>
                                <span>Florida, <br />USA</span>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Footer */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-text-muted text-sm">
                        © 2024 <span className="text-white font-bold tracking-tight text-brand-primary">DDW Agency</span>. All rights reserved.
                    </p>
                    <div className="flex gap-8 text-sm text-text-muted">
                        <span className="hover:text-white cursor-pointer">Privacy Policy</span>
                        <span className="hover:text-white cursor-pointer">Terms & Conditions</span>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
