"use client"
import Image from "next/image";
export default function Header () {
    return(
        <header className="w-full bg-black text-white">
            <div className="flex items-center justify-center">
                <div className="flex items-center gap-2">
                    <Image
                    src={./}
                    />
                </div>
            </div>
        </header>
    )
}