import AnimatedProgrammingSVG from "@/component/AnimatedProgrammingSVG";
import Appbar from "@/component/appbar";

export default function Home() {
  return (
    <>
      <Appbar />
      
      <main className="w-full mt-40 mx-auto max-w-7xl px-6 relative ">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-20 px-4 md:px-8">

          <div className="flex flex-col items-start relative z-10 lg:-mr-12">
            <h1 className="font-prata font-medium text-5xl md:text-7xl text-left leading-tighter max-w-3xl text-neutral-900 selection:bg-amber-200 selection:text-amber-900">
              We grow <span className="text-[#6c63fa]">digital ecosystems</span> from the roots up
            </h1>

            <h2 className="font-open-sans max-w-xl mt-6 text-lg md:text-xl text-neutral-600 text-left selection:bg-amber-200 selection:text-amber-900">
              Transforming complex business challenges into seamless digital experiences across web, mobile, and the cloud.
            </h2>

            {/* Changed 'mt-8' to 'mt-10' to better match the visual spacing */}
            <div className=" flex flex-row justify-between gap-10 mt-10">
              <button className="px-8 py-3 text-center font-open-sans font-medium transition duration-150 active:scale-[0.98] hover:bg-[#392cfa]  text-white bg-[#6c63fa]  rounded-xl cursor-pointer">
                Get in touch
              </button>
              <button className="px-8 py-3 text-center font-open-sans font-medium transition duration-150 active:scale-[0.98]  text-neutral-800 border border-2 rounded-md cursor-pointer">
                Our portfolio
              </button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-center relative mt-20">
            <div className="w-full max-w-162.5  scale-100 lg:scale-110">
              <AnimatedProgrammingSVG />
            </div>
          </div>
        </div>
      </main>
      {/* <section className="relative">
        hi there
      </section> */}
    </>
  );
}