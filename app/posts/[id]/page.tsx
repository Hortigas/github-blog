import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import Link from "next/link";
import { FaCalendarDay, FaChevronLeft, FaComment, FaGithub } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import { Remarkable } from 'remarkable';
import styles from "./styles.module.css";

interface PostProps {
    params: {
        id: string;
    };
}

interface PostDataProps {
    title: string;
    html_url: string;
    user: {
        login: string;
    };
    created_at: string;
    comments: number;
    body: string;
}

async function getPost(id: string): Promise<PostDataProps> {
    const res = await fetch(`https://api.github.com/repos/hortigas/github-blog/issues/${id}`);
    return res.json();
}

export default async function Post({ params }: PostProps) {
    const { title, html_url, user: { login: username }, created_at, comments, body } = await getPost(params.id);
    const md = new Remarkable();
    const bodyParsed = md.render(body);
    return (
        <main className="w-full max-w-4xl mx-4 z-10 mb-48">
            <div className="w-full p-8 rounded-lg bg-base-profile shadow-2xl flex flex-col">
                <div className="flex justify-between mb-5">
                    <Link href="/" className="text-xs text-blue flex items-center"><FaChevronLeft size={12} className="mr-2" />VOLTAR</Link>
                    <a href={html_url} target="_blank" className="text-xs text-blue flex items-center hover:border-b hover:mb-[-1px]">VER NO GITHUB<HiExternalLink size={16} className="ml-2" /></a>
                </div>
                <h2 className="text-2xl font-bold text-base-title mb-2">{title}</h2>
                <div className="flex">
                    <a className="text-base-subtitle flex items-center mr-6"><FaGithub size={18} className="mr-2 text-base-label" />{username}</a>
                    <a className="text-base-subtitle flex items-center mr-6"><FaCalendarDay size={18} className="mr-2 text-base-label" />
                        {formatDistanceToNow(new Date(created_at), { addSuffix: true, locale: ptBR })}
                    </a>
                    <a className="text-base-subtitle flex items-center mr-6"><FaComment size={18} className="mr-2 text-base-label" />{comments} comentários</a>
                </div>
            </div>
            <div className={"my-10 mx-8 " + styles.post} dangerouslySetInnerHTML={{ __html: bodyParsed }} />
        </main >
    );
}