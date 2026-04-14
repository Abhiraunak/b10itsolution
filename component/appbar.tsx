"use client"
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Page() {
    const navItems = [
        {
            title: 'About us',
            href: "/about"
        },
        {
            title: 'Contact us',
            href: "/contact"
        },
        {
            title: 'Services',
            href: "/services"
        }
    ]
    const [hovered, setHovered] = useState<number | null>(null);
    return (
        <nav className="fixed inset-x-0 top-0 z-50 mx-auto max-w-7xl flex items-center justify-between  px-4 py-2 p-2 mt-2 bg-white rounded-md shadow-md">
            <div className="font-bold">
                <Link href="/" className="block">
                    <Image
                        src="/Logo.png"
                        height={100}
                        width={100}
                        alt="logo"
                        loading="eager"
                        className="w-full h-auto"
                    />
                </Link>
            </div>

            <motion.div className="flex items-center">
                {navItems.map((item, idx) => (
                    <Link
                        key={idx}
                        href={item.href}
                        onMouseEnter={() => setHovered(idx)}
                        onMouseLeave={() => setHovered(null)}
                        className="relative px-2 py-1 gap-2 text-neutral-800 text-md">

                        {hovered === idx && (
                            <motion.span
                                layoutId="hoverBackground"
                                initial={false}
                                className="h-full w-full absolute inset-0 rounded-xl bg-[#6c63fa]" />
                        )}
                        <span className="relative z-10 text-lg font-semibold tracking-wide leading-0.5 hover:text-white"> {item.title}</span>
                    </Link>
                ))}
            </motion.div>

            <div>
                <button className="px-6 py-2 text-center font-medium transition duration-150 active:scale-[0.98] text-white bg-[#6c63fa] rounded-xl cursor-pointer">
                    Get in touch
                </button>
            </div>
        </nav>
    );
}