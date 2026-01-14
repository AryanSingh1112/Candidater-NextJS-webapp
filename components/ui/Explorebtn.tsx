'use client';

import Image from "next/image";
import Link from "next/link";

const ExploreBtn = () => {
    return (
        <Link href="/add-candidate" id="explore-btn" className="mt-7 mx-auto block">
            <button type="button" className="flex items-center gap-2 cursor-pointer">
                Get Started
                <Image src="/arrow-down.png" alt="arrow-down" width={24} height={24} />
            </button>
        </Link>
    )
}

export default ExploreBtn