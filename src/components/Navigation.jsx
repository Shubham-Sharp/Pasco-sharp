"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export const Navigation = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="bg-[#f90] text-white sticky top-0 z-50 shadow-lg">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href={"/"} className="text-2xl font-bold border-2 border-primary-foreground px-3 py-1">
                            Sharp Edge
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-4">

                        <Link
                            href="/about"
                            className="px-4 py-2 rounded-md text-white hover:text-gray-200 transition font-bold"
                        >
                            About Us
                        </Link>

                        <Link
                            href="/contact"
                            className="px-4 py-2 rounded-md text-white hover:text-gray-200 transition font-bold"
                        >
                            Contact Us
                        </Link>
                        <Link
                            href="/product"
                            className="px-4 py-2 rounded-md text-white hover:text-gray-200 transition font-bold"
                        >
                            Product
                        </Link>

                        {/* <div className="relative group">
                            <button
                                variant="ghost"
                                className="text-primary-foreground hover:bg-primary-foreground/10"
                            >
                                About Us <ChevronDown className="ml-1 h-4 w-4" />
                            </button>
                            <div className="absolute left-0 mt-0 w-48 bg-popover text-popover-foreground shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                                <a href="#" className="block px-4 py-2 hover:bg-muted">
                                    Management Team
                                </a>
                                <a href="#" className="block px-4 py-2 hover:bg-muted">
                                    Mission & Vision
                                </a>
                            </div>
                        </div> */}

                        {/* <div className="relative group">
                            <button
                                variant="ghost"
                                className="text-primary-foreground hover:bg-primary-foreground/10"
                            >
                                Customer Service <ChevronDown className="ml-1 h-4 w-4" />
                            </button>
                            <div className="absolute left-0 mt-0 w-48 bg-popover text-popover-foreground shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                                <a href="#" className="block px-4 py-2 hover:bg-muted">
                                    Extended Care
                                </a>
                                <a href="#" className="block px-4 py-2 hover:bg-muted">
                                    Machine Repair
                                </a>
                            </div>
                        </div> */}
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="lg:hidden p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>

                {mobileMenuOpen && (
                    <div className="lg:hidden pb-4 space-y-2">
                        <button
                            variant="ghost"
                            className="w-full text-left text-primary-foreground hover:bg-primary-foreground/10 justify-start"
                        >
                            Product
                        </button>
                        <button
                            variant="ghost"
                            className="w-full text-left text-primary-foreground hover:bg-primary-foreground/10 justify-start"
                        >
                            Attachment
                        </button>
                        <button
                            variant="ghost"
                            className="w-full text-left text-primary-foreground hover:bg-primary-foreground/10 justify-start"
                        >
                            About Us
                        </button>
                        <button
                            variant="ghost"
                            className="w-full text-left text-primary-foreground hover:bg-primary-foreground/10 justify-start"
                        >
                            Customer Service
                        </button>
                        <button
                            variant="ghost"
                            className="w-full text-left text-primary-foreground hover:bg-primary-foreground/10 justify-start"
                        >
                            Promotions
                        </button>
                        <button
                            variant="ghost"
                            className="w-full text-left text-primary-foreground hover:bg-primary-foreground/10 justify-start"
                        >
                            Parts
                        </button>
                        <button
                            variant="ghost"
                            className="w-full text-left text-primary-foreground hover:bg-primary-foreground/10 justify-start"
                        >
                            Contact Us
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
};
