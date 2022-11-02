import React from 'react'
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import Link from "../components/link"


function Nav({ href, title}) {
  return (
    <li className="relative group">
        <Link href={href} className="flex items-center py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:p-0" inactiveClassName="text-gray-500" activeClassName="lg:text-purple-700 dark:text-white" aria-current="page">
            <>
                {title}
                <ChevronDownIcon className="w-6 h-6"/>
            </>
        </Link>
        <div className="absolute bg-white group-hover:block hidden p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, tempora!
        </div>
    </li>
    
  )
}

export default Nav;