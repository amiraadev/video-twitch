import Link from "next/link";
import Image from "next/image";
import {Poppins} from "next/font/google";
import {cn} from "@/lib/utils";

const font = Poppins({
    subsets:["latin"],
    weight:["200","300","400","500","600","700","800"]
})

export const Logo = () => {
    return (
       <Link href='/'>
        <div className="hidden lg:flex items-center gap-x-4 hover:opacity-75 transition">
            <div className="bg-white rounded-full p-1 ">
                <Image src="/spooky.svg" alt="logo image" height="32" width="32"/>
            </div>
            <div className={cn(font.className)}>
                <p className="text-lg font-semibold">
                    Gamehub
                </p>
                <p className="text-sm text-muted-foreground">
                    Let&apos;s play
                </p>
            </div>
        </div>
       </Link>
    )
}