import Projectviewsection from "@/components/(projectview)/Projectview";
import AboutProject from "@/components/(projectview)/AboutProject";
import DesignProcess from "@/components/(projectview)/DesignProcess";
import DesignSystem from "@/components/(projectview)/DesignSystem";
import UserInterface from "@/components/(projectview)/UserInterface";
import CaseStudySection from "@/components/(projectview)/CaseStudySection";


export default function Projectview() {
    return (
        <div className="">
            <Projectviewsection/>
            <AboutProject/>
            <DesignProcess/>
            <DesignSystem/>
            <UserInterface/>
            <CaseStudySection/>
        </div>
    );
}