
import { useSelector, useDispatch } from 'react-redux'


import { toggleView } from "../app/data/siteSlice"

/* Icons */
import { RiArticleLine, RiListUnordered } from "react-icons/ri"
import { FaAngleDoubleRight } from "react-icons/fa"

export default function SideBar() {
    const dispatch = useDispatch()
    const viewMode = useSelector(state => state.posts.view)

    return (
        <div className="sidebar w-3/12 bg-gray-100 flex items-center justify-start flex-col h-screen shadow-2xl py-5 px-3">
            <div className="sidebar-header w-full mb-8">
                <div className="shadow-lg bg-white p-3 rounded-lg">
                    <div className="w-full flex items-center">
                        <div className="w-auto">
                            <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" className="rounded-full h-20 w-20" alt="avatar" />
                        </div>
                        <div className="w-auto">
                            <div className="p-3">
                                <h1 className="font-bold text-xl">Hi, Reader!</h1>
                                <p className="text-gray-600 text-lg">Here's your News!</p></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="view-toggle w-full  mb-8">
                <div className="shadow-lg bg-white p-3 rounded-lg w-full text-center">
                    <h1 className="text-xl font-black py-3">View Toggle</h1>
                    <button className="bg-blue-600 px-6 py-2 text-gray-300 rounded w-11/12 capitalize"
                        onClick={() => dispatch(toggleView())}>
                        <div className="flex items-center w-full">
                            <span className="">{viewMode === "list" ? <RiListUnordered /> : <RiArticleLine />}</span>
                            <span className="ml-2 font-bold">{viewMode}</span>
                        </div>
                    </button>
                </div>
            </div>
            <div className="view-toggle w-full  mb-8">
                <div className="shadow-lg bg-white p-3 rounded-lg w-full text-center">
                    <h1 className="text-xl font-black py-3">Have a Feedback?</h1>
                    <button className="bg-blue-600 px-6 py-2 text-gray-300 rounded w-11/12 capitalize">
                        <div className="flex items-center w-full">
                            <span className="font-bold">We're Listening!</span>
                            <span className="ml-2 font-bold"><FaAngleDoubleRight /></span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}