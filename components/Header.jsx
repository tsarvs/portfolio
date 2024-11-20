import Image from "next/image";
import Link from "next/link";

import Socials from "../components/Socials";
import {BsArrowRight} from "react-icons/bs";

const ViewResumeButton = () => <button onClick={() => window.open("/TomSarverResumeFW2024.pdf", "_blank")}
                                       className="btn rounded-full border border-white/50 max-w-[250px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-green group"
                                       disabled={false} aria-disabled={false}>
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                View My Resume
              </span>
    <BsArrowRight
        className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
        aria-hidden
    />
</button>

const Header = () => {
    return (<header className="absolute z-30 w-full items-center px-16 xl-px-0 xl:h-[90px]">
        <div className="hidden container mx-auto xl:block">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
                {/* logo */}
                <Link href="/">
                    <Image
                        src="/logo.svg"
                        alt="logo"
                        width={220}
                        height={48}
                        priority
                    />
                </Link>

                {/* socials */}
                <div className="flex flex-row gap-5">
                    <Socials/>
                    <ViewResumeButton/>
                </div>
            </div>
        </div>
    </header>);
};

export default Header;
