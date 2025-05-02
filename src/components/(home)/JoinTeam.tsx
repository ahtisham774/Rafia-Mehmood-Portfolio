import Image from 'next/image';
import img from "../../../public/assets/home-images/team-join.png";

export default function JoinTeam() {
    return (
        <div
            className="w-full bg-cover bg-center h-full relative z-40 min-h-[884px] max-w-[1600px] mx-auto my-20 px-3"
            style={{ backgroundImage: `url(${img.src})` }}
        >
            <div className="py-10 md:py-16">
                <h1 className='text-white text-center text-[24px] mb-2'>I'm currently looking to join a <span className='text-[#FF7C2B]'>cross-functional</span>  team</h1>
                <h4 className='text-white text-center text-[17px]'>that values improving people's lives through accessible design</h4>
            </div>
        </div>
    );
}
