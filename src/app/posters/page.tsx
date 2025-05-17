import Projectviewsection from "@/components/(posters)/Projectview";
import AboutProject from "@/components/(posters)/AboutProject";
import CaseStudySection from "@/components/(posters)/CaseStudySection";


export default function posters() {
    return (
        <div className="">
            <Projectviewsection/>
            <AboutProject/>
            <CaseStudySection/>
        </div>
    );
}