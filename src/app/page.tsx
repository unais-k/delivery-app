
import Navbar from "@/components/Navbar";

export default function Home() {
    return (
        <main className="">
            <div className="">
                <Navbar />
                <div className="self-center text-zinc-900 text-center text-6xl font-extrabold leading-[76px] tracking-tighter w-[1200px] max-w-[1200px] mt-24 max-md:max-w-full max-md:text-4xl max-md:leading-[62px] max-md:mt-10">
                    Reimagining real estate to <br />
                    make it easier to unlock.
                </div>
                <div className="self-center text-zinc-600 text-center text-lg leading-8 w-[1200px] max-w-[1200px] mt-4 max-md:max-w-full">
                    On the other hand, we denounce with righteous indignation and dislike men who  are so beguiled and
                    demoralized by the charms of pleasure of the moment,  so blinded by desire, that they cannot foresee the
                    pain and trouble.
                </div>
            </div>
        </main>
    );
}
