import AnimatedProgrammingSVG from "@/component/AnimatedProgrammingSVG";
import Appbar from "@/component/appbar";

export default function Page() {
    return (<>
        <Appbar />
        <h1>hi from services page</h1>
        <div className="mx-auto  p-20 mt-10 flex flex-row items-center">
            <AnimatedProgrammingSVG/>

        </div>
        
    </>)
}