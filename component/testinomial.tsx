"use client";
import { TypewriterEffectSmooth } from "./typewriter-effect";

export function Testonomial() {
    const words = [
        { text: "What " },
        { text: "our" },
        {
            text: "client's ",
            className: "text-[#6c63fa]",
        },
        {
            text: "say",
        },
    ];

    const reviews = [
        {
            id: 1,
            clientImage: "/dummy.jpg",
            title: "Amazing Service",
            description: "CEO at InnovateX",
        },
        {
            id: 2,
            clientImage: "/dummy.jpg",
            title: "Great Quality",
            description: "Manager at Designly",
        },
        {
            id: 3,
            clientImage: "/dummy.jpg",
            title: "Highly Recommend",
            description: "Founder of StartupHub",
        },
        {
            id: 4,
            clientImage: "/dummy.jpg",
            title: "Excellent Support",
            description: "CTO at WebFlow",
        },
        {
            id: 5,
            clientImage: "/dummy.jpg",
            title: "Excellent Support",
            description: "CTO at WebFlow",
        },
        {
            id: 6,
            clientImage: "/dummy.jpg",
            title: "Excellent Support",
            description: "CTO at WebFlow",
        },
    ];

    return (
        <div className="flex flex-col items-center justify-center bg-blue-100 rounded-lg p-6">
            <div className="hidden md:block text-center">
                <TypewriterEffectSmooth 
                    words={words}
                    cursorClassName="h-12 bg-[#6c63fa]" 
                />
            </div>

            <h1 className="md:hidden text-2xl font-bold mb-2">What our clients say</h1>
            <p className="mx-auto max-w-lg text-center text-lg text-neutral-600 mb-8">
                Real feedback from the teams we&apos;ve helped scale.
            </p>

            {/* Added responsive grid-cols-1 for mobile, md:grid-cols-3 for desktop */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 overflow-hidden mb-5 p-2 mask-b-from-10%">
                {reviews.map((review) => (
                    <div 
                        key={review.id} 
                        className="flex flex-col items-center text-center bg-white p-6 rounded-xl shadow-sm border border-neutral-100"
                    >
                        <img 
                            src={review.clientImage} 
                            alt={review.title} 
                            className="w-16 h-16 rounded-full object-cover mb-4 shadow-sm"
                        />
                        <h3 className="font-semibold text-lg text-neutral-800">
                            {review.title}
                        </h3>
                        <p className="text-sm text-neutral-500 mt-1">
                            {review.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}