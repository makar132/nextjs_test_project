'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useAuth } from '@/context/AuthContext'


const menu = [
    { label: 'Home', href: '/dashboard' },
    { label: 'Reports', href: '/dashboard/reports' },
    { label: 'Settings', href: '/dashboard/settings' },
]

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState(true)

    const { logout } = useAuth()

    return (
        <div className="flex min-h-screen bg-gray-900">
            {/* Sidebar */}
            <aside className={`bg-gray-700 text-white flex flex-col transition-all duration-200 ${open ? 'w-64' : 'w-16'}`}>
                <div className="relative p-4 h-16 flex items-center justify-between">
                    {!open && (
                        <button className="p-1" onClick={() => setOpen(true)} aria-label="Open sidebar">
                            <Bars3Icon className="h-6 w-6 text-white" />
                        </button>
                    )}
                    {open && (
                        <button
                            className="p-1 absolute right-4 top-4"
                            onClick={() => setOpen(false)}
                            aria-label="Close sidebar"
                        >
                            <XMarkIcon className="h-6 w-6 text-red-600" />
                        </button>
                    )}
                </div>
                <nav className="flex-1 space-y-2">
                    {menu.map(item => (
                        <Link key={item.href} href={item.href} className="block px-4 py-2 hover:bg-gray-500 rounded">
                            {open ? item.label : item.label.charAt(0)}
                        </Link>
                    ))}
                </nav>
                {open && <button
                    onClick={logout}
                    className="m-4 bg-blue-700 hover:bg-blue-900 rounded px-4 py-2"
                >
                    Logout
                </button>
                }
            </aside>
            {/* Main Content */}
            <main className="flex-1 p-8">{children}</main>
        </div>
    )
}
