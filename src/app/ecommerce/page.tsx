import Projectviewsection from "@/components/(ecommerce)/Projectview";
import AboutProject from "@/components/(ecommerce)/AboutProject";
import DesignProcess from "@/components/(ecommerce)/DesignProcess";
import DesignSystem from "@/components/(ecommerce)/DesignSystem";
import UserInterface from "@/components/(ecommerce)/UserInterface";
import CaseStudySection from "@/components/(ecommerce)/CaseStudySection";
import Challenges from "@/components/(ecommerce)/Challenges";


export default function ecommerce() {
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