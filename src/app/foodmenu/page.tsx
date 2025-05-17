import Projectviewsection from "@/components/(foodmenu)/Projectview";
import AboutProject from "@/components/(foodmenu)/AboutProject";
import DesignProcess from "@/components/(foodmenu)/DesignProcess";
import DesignSystem from "@/components/(foodmenu)/DesignSystem";
import UserInterface from "@/components/(foodmenu)/UserInterface";
import CaseStudySection from "@/components/(foodmenu)/CaseStudySection";
import Challenges from "@/components/(foodmenu)/Challenges";


export default function foodmenu() {
    return (
        <div className="">
            <Projectviewsection/>
            <AboutProject/>
            <DesignProcess/>
            <Challenges/>
            <DesignSystem/>
            <UserInterface/>
            <CaseStudySection/>
        </div>
    );
}