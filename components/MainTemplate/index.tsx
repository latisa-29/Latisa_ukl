"use client" //define that this component is "client component"//
//   "client component" is component that has interaction with user like "OnClick, onSubmit, onChange".//
    import { ReactNode, useState, } from "react"
import { menuItem } from "./menu"
import Link from "next/link"
import { usePathname } from "next/navigation"

type Props = {
    children: ReactNode
}

const profilItem: { label: string; destination: string }[] = [
  { label: "Home", destination: "/home" },
  { label: "Reading Book", destination: "/ReadingBook" },
  { label: "Writer", destination: "/writer" },
];

const MainTemplate = (props: Props) => {
    const [isShow, setIsShow] =
        useState<boolean>(false)
    const currentAddress = usePathname()
    return (
        <div>
            {/*sidebar + header*/}
            <div className={`min-h-dvh w-1/2 md:w-1/3 lg:w-1/4 bg-amber-200 shadow fixed top-0 right-full transform transition-transform ease-in-out ${isShow ? `left-0` : `-translate-x-full`}  `}>  {/*$ untuk menggabungkan string dengan variabel yang ada di classname*/}

                {/*toggle header*/}
                <div className="w-full p-4 flex justify-between items-start">
                    <button
                        type="button"
                        onClick={() => setIsShow(false)}
                        className="font-bold">
                        &times;
                    </button>
                </div>

                {/*display menu item*/}
                <div className="w-full p-3 flex flex-col gap-2">
                    {
                        menuItem.map((profile, index) => (
                            <Link href={profile.destination} key={`menu-${index}`}>
                                <button type="button" className={`w-full rounded text-start py-2 px-3 font-semibold  ${currentAddress === profile.destination ? `bg-white `: `text-black hover:bg-white`}`}>
                                    {profile.label}
                                </button>
                            </Link>

                        ))
                    }
                </div>
            </div>



            {/*header section*/}
            <div className="w-full bg-amber-200 p-3 ">
                <button
                    type="button"
                    onClick={() => setIsShow(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M3 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 5.25Zm0 4.5A.75.75 0 0 1 3.75 9h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                    </svg>

                </button>
            </div>


            {/*main content*/}
            {props.children}
            {/*footer*/}
        </div>
    )
}
export default MainTemplate