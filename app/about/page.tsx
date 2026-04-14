"use client"
import { motion } from "framer-motion";
export default function Page() {
    return (
        <>
        <div className="flex flex-row justify-center mt-30">
            <svg width="100%" height="3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <motion.linearGradient
                        id="line-gradient"
                        gradientUnits="userSpaceOnUse"
                        initial={{ x1: "0%", x2: "10%" }}
                        animate={{ x1: "90%", x2: "100%" }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        <stop stopColor="transparent" />
                        <stop offset="0.5" stopColor="#3b82f6" /> {/* Blue "light" effect */}
                        <stop offset="1" stopColor="transparent" />
                    </motion.linearGradient>
                </defs>

                <path d="M0 1H400" stroke="#262626" strokeWidth="1" />
                <path d="M0 1H400" stroke="url(#line-gradient)" strokeWidth="2" />
            </svg>

        </div>
            

        </>
    )
}



