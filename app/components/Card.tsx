import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import Link from "next/link";
import { IPost } from "./Posts";

interface CardProps {
    post: IPost;
}

export function Card({ post }: CardProps) {
    return (
        <Link href={`/posts/${post.number}`}>
            <div className="p-8 rounded-lg bg-base-post flex flex-col gap-5 hover:outline-base-label hover:outline-2 hover:outline">
                <div className="flex justify-between gap-4">
                    <h3 className="text-base-title flex-1 text-xl">{post.title}</h3>
                    <span className="text-base-span text-sm">{formatDistanceToNow(new Date(post.created_at), { locale: ptBR })}</span>
                </div>
                <p className="line-clamp-4">{post.body}</p>
            </div>
        </Link>
    );
}