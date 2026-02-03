"use client"

import { useState, useEffect, useCallback, FormEvent } from "react"
import Image from "next/image"

export default function HeroContent() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")

  useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => setIsVisible(true))
    }
  }, [isOpen])

  const close = useCallback(() => {
    setIsVisible(false)
    setTimeout(() => setIsOpen(false), 300)
  }, [])

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    close()
    // TODO: email integration
  }

  return (
    <>
      {/* Logo + button */}
      <div
        className={`flex flex-col items-center gap-5 transition-opacity duration-300
          ${isVisible
            ? "opacity-0 pointer-events-none"
            : "opacity-10 has-[:hover]:opacity-100"}`}
      >
        <Image
          src="/stratis-logo.svg"
          alt="STRATIS"
          width={353}
          height={48}
          priority
          className="invert w-[140px] sm:w-[180px] md:w-[220px] h-auto"
        />
        <div className="pointer-events-auto">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="hvr-ripple-out relative px-10 py-4 rounded-full
              bg-white/10 backdrop-blur-xl border border-white/20
              text-white/90 font-[var(--font-quicksand)] font-light text-lg tracking-widest
              cursor-pointer transition-all duration-300
              hover:bg-white/15 hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]
              active:scale-95"
          >
            Apply For The Waitlist
          </button>
        </div>
      </div>

      {/* Form modal */}
      {isOpen && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center pointer-events-auto
            transition-opacity duration-300
            ${isVisible ? "opacity-100" : "opacity-0"}`}
          onClick={close}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`relative w-[360px] bg-white/10 backdrop-blur-2xl border border-white/20
              rounded-3xl p-8 pt-10 shadow-[0_0_60px_rgba(0,0,0,0.3)]
              transition-all duration-300
              ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          >
            <button
              type="button"
              onClick={close}
              className="absolute top-4 right-5 text-white/50 hover:text-white/90
                transition-colors cursor-pointer text-lg leading-none"
            >
              ✕
            </button>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3
                  text-white/90 placeholder-white/40 font-[var(--font-quicksand)] font-light text-sm
                  outline-none focus:border-white/40 transition-colors"
              />
              <input
                type="text"
                placeholder="Company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3
                  text-white/90 placeholder-white/40 font-[var(--font-quicksand)] font-light text-sm
                  outline-none focus:border-white/40 transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3
                  text-white/90 placeholder-white/40 font-[var(--font-quicksand)] font-light text-sm
                  outline-none focus:border-white/40 transition-colors"
              />
              <button
                type="submit"
                className="mt-2 w-full py-3 rounded-full bg-white/10 border border-white/20
                  text-white/90 font-[var(--font-quicksand)] font-light text-sm tracking-widest
                  cursor-pointer transition-all duration-300
                  hover:bg-white/15 hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]
                  active:scale-95"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
