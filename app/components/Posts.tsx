"use client";

import { useState, } from "react";
import { Card } from "./Card";

export interface IPost {
    number: number;
    title: string;
    body: string;
    created_at: string;
}

interface PostProps {
    totalCount: number;
    posts: IPost[];

}

export function Posts({ totalCount, posts: postsInitial }: PostProps) {
    const [search, setSearch] = useState("");
    const posts = postsInitial.filter((post) => post.title.toLowerCase().includes(search.toLowerCase()) || post.body.toLowerCase().includes(search.toLowerCase()));
    return (
        <div>
            <div className="mt-20 flex flex-col gap-5">
                <div className="flex justify-between items-center">
                    <h4 className="text-lg text-base-subtitle">Publicações</h4>
                    <span className="text-sm text-base-span">{totalCount} publicações</span>
                </div>
                <input value={search} onChange={(event) => setSearch(event.target.value)} className="px-4 py-3 w-full bg-base-input border border-base-border rounded-lg placeholder-base-label focus:border-blue" placeholder="Buscar conteúdo"></input>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8">
                {posts.map((post) => (<Card post={post} key={post.number} />))}
            </div>
        </div>
    );
}