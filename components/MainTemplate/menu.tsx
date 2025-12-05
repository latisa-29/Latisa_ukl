import { ReactNode } from "react"

type menuType = {
    label: string,
    destination: string
}
export const menuItem: menuType[] = [
{
    label: 'Home',
    destination: '/home',
},
{
    label: 'Reading Book',
    destination: '/ReadingBook',
},
{
    label: 'Writer',
    destination: '/writer',
}
]