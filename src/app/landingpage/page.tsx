import Projectviewsection from "@/components/(landingPage)/Projectview";
import AboutProject from "@/components/(landingPage)/AboutProject";
import CaseStudySection from "@/components/(landingPage)/CaseStudySection";


export default function landingpage() {
    return (
        <div className="">
            <Projectviewsection/>
            <AboutProject/>
            <CaseStudySection/>
        </div>
    );
}