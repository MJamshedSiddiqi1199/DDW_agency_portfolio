import React from 'react';

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
                            {/* Social Icons Placeholder */}
                            {['LI', 'TW', 'IG', 'YT'].map((label, i) => (
                                <div key={i} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary transition-all cursor-pointer group">
                                    <span className="text-[10px] font-bold group-hover:text-bg-base">{label}</span>
                                </div>
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
                            <li className="hover:text-brand-primary cursor-pointer transition">Portfolio</li>
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
