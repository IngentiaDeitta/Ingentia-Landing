'use client'
import Link from 'next/link'
import { Equal, X, Phone } from 'lucide-react'
import React from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { KaizenButton } from '@/components/ui/conversational-agent'
import { motion, AnimatePresence } from 'framer-motion'

const menuItems = [
    { name: 'Problema', href: '#problema' },
    { name: 'Soluciones', href: '#valor' },
    { name: 'Productos', href: '#productos' },
    { name: 'Método', href: '#metodo' },
]

export const Header = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToTop = (e: React.MouseEvent) => {
        e.preventDefault()
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="fixed left-0 w-full z-20 px-2">
                <div className={cn('mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12', isScrolled && 'bg-black/80 max-w-4xl rounded-2xl border border-white/10 backdrop-blur-lg lg:px-5')}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 lg:gap-0 py-2">
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link
                                href="#hero"
                                onClick={scrollToTop}
                                aria-label="home"
                                className="flex gap-2 items-center">
                                <div className="relative h-10 w-44">
                                    <Image
                                        src="/logo-white.svg"
                                        alt="Ingentia Logo"
                                        fill
                                        className="object-contain object-left"
                                        priority
                                        onError={(e) => { (e.target as HTMLImageElement).src = '/logo-light.png'; }}
                                    />
                                </div>
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Equal className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>
                        </div>

                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-8 text-sm">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={item.href}
                                            className="text-white hover:text-white/80 block duration-150">
                                            <span>{item.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-black/95 backdrop-blur-xl in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border border-white/10 p-8 shadow-2xl md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:lg:bg-transparent">
                            <div className="lg:hidden w-full">
                                <ul className="space-y-6 text-lg">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                onClick={() => setMenuState(false)}
                                                className="text-white/90 hover:text-white block duration-150 font-light">
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-2 sm:space-y-0 md:w-fit items-center">
                                <AnimatePresence mode="wait">
                                    {!isScrolled ? (
                                        <motion.div
                                            key="full-cta"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <KaizenButton
                                                className="flex items-center justify-center gap-2 text-white bg-accent-blue hover:bg-blue-600 text-sm font-black px-6 py-3 rounded-full transition-colors shadow-lg shadow-blue-900/30 whitespace-nowrap cursor-pointer"
                                            />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="phone-cta"
                                            initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                            exit={{ opacity: 0, scale: 0.5, rotate: 45 }}
                                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        >
                                            <KaizenButton
                                                className="flex items-center justify-center size-10 text-white bg-accent-blue hover:bg-blue-600 rounded-full transition-colors shadow-lg shadow-blue-900/30 cursor-pointer"
                                            >
                                                <Phone className="size-5 fill-white" />
                                            </KaizenButton>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
