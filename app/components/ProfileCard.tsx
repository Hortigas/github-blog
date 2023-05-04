import Image from "next/image";
import { FaBuilding, FaGithub, FaUserFriends } from 'react-icons/fa';
import { HiExternalLink } from 'react-icons/hi';

interface ProfileProps {
    html_url: string;
    login: string;
    name: string;
    avatar_url: string;
    bio: string;
    company: string;
    followers: number;
}

async function fetchGithubProfile(): Promise<ProfileProps> {
    const res = await fetch("https://api.github.com/users/hortigas");
    return res.json();
}

export async function ProfileCard() {
    const profileData = await fetchGithubProfile();

    return (
        <div className="w-full p-8 rounded-lg bg-base-profile shadow-2xl flex gap-8">
            <Image src={profileData.avatar_url} height={148} width={148} alt="profile picture" className="rounded-lg" style={{ objectFit: "scale-down" }} />
            <div className="flex flex-col justify-center flex-1">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-base-title my-2">{profileData.name}</h2>
                    <a href={profileData.html_url} target="_blank" className="text-xs text-blue flex items-center hover:border-b hover:mb-[-1px]">GITHUB<HiExternalLink size={16} className="ml-2" /></a>
                </div>
                <span>{profileData.bio}</span>
                <div className="flex mt-6">
                    <span className="text-base-subtitle flex items-center mr-6"><FaGithub size={18} className="mr-2 text-base-label" />{profileData.login}</span>
                    <span className="text-base-subtitle flex items-center mr-6"><FaBuilding size={18} className="mr-2 text-base-label" />{profileData.company}</span>
                    <span className="text-base-subtitle flex items-center mr-6"><FaUserFriends size={18} className="mr-2 text-base-label" />{profileData.followers} seguidores</span>
                </div>
            </div>
        </div>
    );
}