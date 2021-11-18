
import { useSelector, useDispatch } from 'react-redux'

import { useEffect, useState } from 'react';

import { ImCross } from 'react-icons/im';
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from "react-icons/ai"


export default function Main() {

    const dispatch = useDispatch();
    const viewMode = useSelector(state => state.posts.view)
    const [posts, setPosts] = useState([])
    const [page, setPage] = useState(0)

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            setPosts(data)
        }
        fetchData();
    }, [])

    const deletePost = (page, index) => {
        var newPosts = [...posts]
        newPosts.splice(index, 1)
        setPosts(newPosts)
    }

    return (
        <div className="w-4/5 bg-gray-200">
            <div className="flex flex-col justify-center items-center h-screen relative">
                <div className="posts px-12 py-12 overflow-y-auto flex items-center justify-center flex-wrap w-full h-9/12">
                    {posts.length > 0 && posts.filter((post, i) => {
                        return i >= page * 6 && i < (page + 1) * 6
                    }).map(({ title, body, id }, i) => {
                        return viewMode === "list" ?
                            <PostList title={title} body={body} deletePost={deletePost} page={page} postnoIndex={i} key={"post-" + id} />
                            :
                            <PostCompact title={title} body={body} deletePost={deletePost} page={page} postnoIndex={i} key={"post-" + id} />
                    })}
                    {posts.length > 0 && posts[page].length === 0 && <h1>Page {page} is empty.</h1>}
                </div>
                <div className="absolute bottom-0 bg-gray-200 w-full pagination h-3/12 flex items-center justify-center p-3">
                    {posts.length > 0 &&
                        <>
                            <div>
                                <button className="cursor-pointer mx-2 rounded-full h-8 w-8 flex items-center justify-center"
                                    onClick={() => {
                                        if (page !== 0) setPage(page - 1)
                                    }}>
                                    <AiOutlineDoubleLeft />
                                </button>
                            </div>
                            {
                                [...Array(Math.round(posts.length / 6))].filter(
                                    (post, i) => {
                                        const min = page;
                                        const max = page + 2;
                                        return i >= min && i <= max
                                    }).map((post, i) => {
                                        return (
                                            <div key={"pagination-" + i + page}>
                                                <button
                                                    className={`cursor-pointer mx-2 rounded-full h-8 w-8 ${page === i + page ? "bg-white shadow-lg" : "text-white bg-gray-400"}`} onClick={() => {
                                                        setPage(i + page)
                                                    }}>
                                                    {page + i + 1}
                                                </button>
                                            </div>
                                        )

                                    })
                            }
                            <div><button className="cursor-pointer mx-2 rounded-full h-8 w-8 flex items-center justify-center"
                                onClick={() => {
                                    if (posts[page + 1])
                                        setPage(page + 1)
                                }}
                            >
                                <AiOutlineDoubleRight />
                            </button></div>
                        </>

                    }
                </div>
            </div>
        </div >
    )
}

function PostCompact({ title, body, page, deletePost, postnoIndex }) {
    return (
        <div className="post w-1/3 p-3">
            <div className="w-full flex items-center justify-center">
                <div className="bg-white shadow-lg rounded-lg mb-2 w-full overflow-hidden">
                    <div className="w-full flex items-center justify-start flex-col">
                        <div className="w-full flex justify-end items-end">
                            <button className="text-gray-500 h-12 w-12 hover:bg-gray-50 flex items-center justify-center rounded-full"
                                onClick={() => {
                                    deletePost(page, postnoIndex)
                                }}><ImCross />
                            </button>
                        </div>
                        <div className="w-full">
                            <div className="px-3">
                                <div className="post-title font-bold text-xl capitalize" style={{ height: 56 }}>{title.substring(0, 30)}...</div>
                                <div className="post-body text-gray-700 mt-1 capitalize">{body.substring(0, 30)}...</div>
                                <div className="mt-1 text-gray-500">
                                    <span className="font-semibold">Mon, 21 Dec 2020 14:57 GMT</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="h-full w-full flex items-center justify-center p-3">
                                <img alt="article-thumb" src={`https://picsum.photos/200?t=${title}`} className="w-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
function PostList({ title, body, page, deletePost, postnoIndex }) {
    return (
        <div className="post w-full">
            <div className="w-full flex items-center justify-center">
                <div className="bg-white shadow-lg rounded-lg mb-2 w-11/12">
                    <div className="w-full flex items-center justify-start">
                        <div className="w-auto">
                            <div className="h-full w-full flex items-center justify-center p-3">
                                <img alt="article-thumb" src={`https://picsum.photos/200?t=${title}`} className="rounded-full" height="72" width="72" />
                            </div>
                        </div>
                        <div className="w-11/12">
                            <div className="py-3">
                                <div className="post-title font-bold text-xl capitalize">{title}</div>
                                <div className="post-body text-gray-700 mt-1 capitalize">{body}</div>
                                <div className="mt-1 text-gray-500">
                                    <span className="font-semibold">Mon, 21 Dec 2020 14:57 GMT</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center w-1/12">
                    <button className="text-gray-500 bg-white h-12 w-12 shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50"
                        onClick={() => {
                            deletePost(page, postnoIndex)
                        }}
                    ><ImCross /></button>
                </div>
            </div>
        </div>
    )
}