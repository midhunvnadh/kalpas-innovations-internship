
import { useSelector, useDispatch } from 'react-redux'


import { toggleView, toggleFeedbackModal } from "../app/data/siteSlice"

/* Icons */
import { RiArticleLine, RiListUnordered } from "react-icons/ri"
import { FaAngleDoubleRight } from "react-icons/fa"
import Feedbackform from './Feedbackform'

export default function SideBar() {
    const dispatch = useDispatch()
    const viewMode = useSelector(state => state.posts.view)
    const feedbackModal = useSelector(state => state.posts.feedbackModal)

    return (
        <div className={`sidebar h-screen ${feedbackModal ? 'w-full absolute z-50 backdrop-filter backdrop-blur-sm' : 'w-3/12'}`}>
            <div className={`${feedbackModal ? 'w-11/12' : 'w-full'} h-full flex`}>
                <div className={`bg-gray-100 flex items-center justify-start flex-col h-full py-5 px-3 rounded-r-3xl shadow-2xl ${feedbackModal ? 'w-4/5' : 'w-full'}`}>
                    <div className="flex w-full h-full">
                        <div className={`flex flex-col h-full ${feedbackModal ? 'w-1/2' : 'w-full'}`}>
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
                            {!feedbackModal &&
                                <div className="view-toggle w-full  mb-8">
                                    <div className="shadow-lg bg-white p-3 rounded-lg w-full text-center">
                                        <h1 className="text-xl font-black py-3">View Toggle</h1>
                                        <div className="flex items-center justify-center">
                                            <button className={`px-6 py-2 text-gray-300 rounded-l capitalize w-1/2 hover:bg-blue-700 ${viewMode === 'list' ? 'bg-blue-700 text-white' : 'bg-white shadow-inner text-blue-600 hover:text-white'}`}
                                                onClick={() => dispatch(toggleView('list'))}>
                                                <div className="flex items-center justify-center w-full text-3xl">
                                                    <span className=""><RiListUnordered /></span>
                                                </div>
                                            </button>
                                            <button className={`px-6 py-2 text-gray-300 rounded-r capitalize w-1/2 hover:bg-blue-700 ${viewMode === 'compact' ? 'bg-blue-700 text-white' : 'bg-white shadow-inner text-blue-600 hover:text-white'}`}
                                                onClick={() => dispatch(toggleView('compact'))}>
                                                <div className="flex items-center justify-center w-full text-3xl">
                                                    <span className=""><RiArticleLine /></span>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            }
                            <div className="view-toggle w-full  mb-8">
                                <div className="shadow-lg bg-white p-3 rounded-lg w-full text-center">
                                    <h1 className="text-xl font-black py-3">Have a Feedback?</h1>
                                    <button className="bg-blue-600 px-6 py-2 text-gray-50 rounded w-11/12 capitalize"
                                        onClick={() => dispatch(toggleFeedbackModal())}>
                                        <div className="flex items-center w-full">
                                            <span className="font-bold">We're Listening!</span>
                                            <span className="ml-2 font-bold"><FaAngleDoubleRight /></span>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div >
                        {feedbackModal && <div>
                            <Feedbackform status={feedbackModal} />
                        </div>}
                    </div >
                </div >
            </div >
        </div >
    )
}