"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function BugoWebsite() {
  const [currentSection, setCurrentSection] = useState("choice")

  const contractAddress = "Coming Soon"

  const galleryImages = [
    {
      src: "/images/gallery/bugo-yacht.jpeg",
      alt: "BUGO on yacht with laptop and money",
      title: "Yacht Life",
    },
    {
      src: "/images/gallery/bugo-knight.jpeg",
      alt: "BUGO as medieval knight",
      title: "Knight BUGO",
    },
    {
      src: "/images/gallery/bugo-king.jpeg",
      alt: "BUGO as crypto king with crown",
      title: "Crypto King",
    },
    {
      src: "/images/gallery/bugo-poker.jpeg",
      alt: "BUGO playing poker",
      title: "High Stakes",
    },
    {
      src: "/images/gallery/bugo-throne.jpeg",
      alt: "BUGO on green throne",
      title: "Throne Room",
    },
    {
      src: "/images/gallery/bugo-candles.jpeg",
      alt: "BUGO with green trading candles",
      title: "Bull Market",
    },
    {
      src: "/images/gallery/bugo-celebration.jpeg",
      alt: "BUGO bears celebrating",
      title: "Victory Celebration",
    },
    {
      src: "/images/gallery/bugo-climbing.jpeg",
      alt: "BUGO climbing green candles",
      title: "To The Moon",
    },
    {
      src: "/images/gallery/bugo-driving.jpeg",
      alt: "BUGO driving with money",
      title: "Money Drive",
    },
    {
      src: "/images/gallery/bugo-gym.jpeg",
      alt: "BUGO doing push-ups",
      title: "Strong Bear",
    },
    {
      src: "/images/gallery/bugo-shoulder-ride.jpeg",
      alt: "BUGO bears with crowns - one carrying the other on shoulders",
      title: "Royal Ride",
    },
    {
      src: "/images/gallery/bugo-ferris-wheel.jpeg",
      alt: "BUGO bear with glasses sitting in ferris wheel",
      title: "Fun Fair",
    },
  ]

  const renderGallery = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-600 relative overflow-hidden">
      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-6">
        <div
          className="flex items-center space-x-2 cursor-pointer hover:scale-105 transition-transform"
          onClick={() => setCurrentSection("home")}
        >
          <div className="w-12 h-12 flex items-center justify-center">
            <img src="/images/bugo-logo.png" alt="BUGO Logo" className="w-12 h-12 object-contain" />
          </div>
          <span className="text-white font-bold-caps text-xl">BUGO</span>
        </div>

        <div className="flex items-center space-x-6 bg-blue-500 rounded-full px-8 py-4">
          <button
            onClick={() => setCurrentSection("home")}
            className="text-white hover:text-yellow-300 font-menu text-sm transition-colors text-shadow"
          >
            HOME
          </button>
          <button
            onClick={() => setCurrentSection("about")}
            className="text-white hover:text-yellow-300 font-menu text-sm transition-colors text-shadow"
          >
            ABOUT
          </button>
          <button
            onClick={() => setCurrentSection("buy")}
            className="text-white hover:text-yellow-300 font-menu text-sm transition-colors text-shadow"
          >
            HOW TO BUY
          </button>
          <button
            onClick={() => setCurrentSection("gallery")}
            className="text-white font-menu text-sm transition-colors text-shadow bg-white/20 px-4 py-2 rounded-full"
          >
            GALLERY
          </button>
          <button
            onClick={() => setCurrentSection("tokenomics")}
            className="text-white hover:text-yellow-300 font-menu text-sm transition-colors text-shadow"
          >
            TOKENOMICS
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold-caps px-6 py-3 rounded-full text-shadow">
            BUY BUGO
          </Button>
        </div>
      </nav>

      {/* Gallery Content */}
      <div className="relative z-10 container mx-auto px-6 py-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-8xl font-handwriting text-white mb-6 transform -rotate-1 text-shadow-strong">
            MEME GALLERY
          </h1>
          <p className="text-2xl text-white/90 font-handwriting text-shadow">
            The many faces of BUGO - from yacht life to moon missions!
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 hover:bg-white/20"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-white font-handwriting text-lg text-center">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-2xl text-white font-handwriting mb-8 text-shadow">Ready to join the BUGO revolution?</p>
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold-caps px-8 py-4 rounded-full text-xl">
            BUY $BUGO NOW
          </Button>
        </div>
      </div>
    </div>
  )

  const renderBuy = () => (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: "url(/images/classroom-background.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-6 bg-black/80">
        <div
          className="flex items-center space-x-2 cursor-pointer hover:scale-105 transition-transform"
          onClick={() => setCurrentSection("home")}
        >
          <div className="w-12 h-12 flex items-center justify-center">
            <img src="/images/bugo-logo.png" alt="BUGO Logo" className="w-12 h-12 object-contain" />
          </div>
          <span className="text-white font-bold-caps text-xl">BUGO</span>
        </div>

        <div className="flex items-center space-x-6 bg-blue-500 rounded-full px-8 py-4">
          <button
            onClick={() => setCurrentSection("home")}
            className="text-white hover:text-yellow-300 font-menu text-sm transition-colors text-shadow"
          >
            HOME
          </button>
          <button
            onClick={() => setCurrentSection("about")}
            className="text-white hover:text-yellow-300 font-menu text-sm transition-colors text-shadow"
          >
            ABOUT
          </button>
          <button
            onClick={() => setCurrentSection("buy")}
            className="text-white font-menu text-sm transition-colors text-shadow bg-white/20 px-4 py-2 rounded-full"
          >
            HOW TO BUY
          </button>
          <button
            onClick={() => setCurrentSection("gallery")}
            className="text-white hover:text-yellow-300 font-menu text-sm transition-colors text-shadow"
          >
            GALLERY
          </button>
          <button
            onClick={() => setCurrentSection("tokenomics")}
            className="text-white hover:text-yellow-300 font-menu text-sm transition-colors text-shadow"
          >
            TOKENOMICS
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold-caps px-6 py-3 rounded-full text-shadow">
            BUY BUGO
          </Button>
        </div>
      </nav>

      {/* Main Content - Positioned over the trading scene */}
      <div className="relative z-10 container mx-auto px-6 py-8">
        <div className="flex justify-center">
          <div className="max-w-4xl w-full">
            {/* Content positioned to appear on the chalkboard */}
            <div className="ml-8 mr-96 mt-8 space-y-6">
              {/* Title */}
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-5xl font-handwriting text-white mb-4 transform -rotate-1">
                  HOW TO BUY
                </h1>
                <p className="text-lg text-yellow-200 font-handwriting">
                  Follow these easy steps to become a $BUGO holder.
                </p>
              </div>

              {/* Steps written like chalk on blackboard */}
              <div className="space-y-6 text-white font-handwriting">
                {/* Step 1 */}
                <div className="space-y-2">
                  <h3 className="text-xl text-yellow-300 font-bold">1. Get a Base-compatible wallet</h3>
                  <p className="text-lg leading-relaxed pl-4">
                    Use <span className="text-yellow-200 underline">Coinbase Wallet</span> or{" "}
                    <span className="text-yellow-200 underline">Metamask</span>
                    <br />
                    and connect to the Base network.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="space-y-2">
                  <h3 className="text-xl text-yellow-300 font-bold">2. Go to APE STORE</h3>
                  <p className="text-lg leading-relaxed pl-4">
                    Visit: <span className="text-blue-200 underline">https://ape.store/</span>
                  </p>
                </div>

                {/* Step 3 */}
                <div className="space-y-2">
                  <h3 className="text-xl text-yellow-300 font-bold">3. Connect & Trade</h3>
                  <p className="text-lg leading-relaxed pl-4">
                    Connect your wallet to APE STORE
                    <br />
                    Select Tokens → Choose ETH/WETH → Paste:
                  </p>
                  <div className="pl-4 mt-2">
                    <div className="bg-black/20 rounded p-2 border border-white/30">
                      <code className="text-yellow-200 font-mono text-sm break-all">Coming Soon</code>
                    </div>
                  </div>
                  <p className="text-lg pl-4 mt-2">Click Import if prompted.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderTokenomics = () => (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-6">
        <div
          className="flex items-center space-x-2 cursor-pointer hover:scale-105 transition-transform"
          onClick={() => setCurrentSection("home")}
        >
          <div className="w-12 h-12 flex items-center justify-center">
            <img src="/images/bugo-logo.png" alt="BUGO Logo" className="w-12 h-12 object-contain" />
          </div>
          <span className="text-white font-bold-caps text-xl">BUGO</span>
        </div>

        <div className="flex items-center space-x-6 bg-blue-500 rounded-full px-8 py-4">
          <button
            onClick={() => setCurrentSection("home")}
            className="text-white hover:text-yellow-300 font-menu text-sm transition-colors text-shadow"
          >
            HOME
          </button>
          <button
            onClick={() => setCurrentSection("about")}
            className="text-white hover:text-yellow-300 font-menu text-sm transition-colors text-shadow"
          >
            ABOUT
          </button>
          <button
            onClick={() => setCurrentSection("buy")}
            className="text-white hover:text-yellow-300 font-menu text-sm transition-colors text-shadow"
          >
            HOW TO BUY
          </button>
          <button
            onClick={() => setCurrentSection("gallery")}
            className="text-white hover:text-yellow-300 font-menu text-sm transition-colors text-shadow"
          >
            GALLERY
          </button>
          <button
            onClick={() => setCurrentSection("tokenomics")}
            className="text-white font-menu text-sm transition-colors text-shadow bg-white/20 px-4 py-2 rounded-full"
          >
            TOKENOMICS
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold-caps px-6 py-3 rounded-full text-shadow flex items-center">
            BUY BUGO
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* BUGO Trading King Character */}
          <div className="lg:w-1/2 flex flex-col items-center space-y-8">
            <div className="relative w-full max-w-lg">
              <img
                src="/images/bugo-trading-king.jpeg"
                alt="BUGO Bear as crypto trading king with crown, sunglasses, and money"
                className="w-full h-auto object-contain rounded-2xl"
              />
            </div>

            {/* Buy Button */}
            <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold-caps px-8 py-4 rounded-full text-shadow flex items-center text-xl">
              BUY BUGO
            </Button>
          </div>

          {/* Tokenomics Info */}
          <div className="lg:w-1/2 space-y-8">
            <div className="text-center lg:text-left">
              <h1 className="text-6xl md:text-7xl font-handwriting text-white mb-6 transform rotate-1 text-shadow-strong">
                TOKENOMICS
              </h1>
              <p className="text-2xl text-white/90 font-handwriting text-shadow mb-8">
                We dropped a billion $BUGO because
                <br />
                math is fake and memes are forever.
              </p>
            </div>

            <div className="space-y-6">
              {/* Total Supply Card */}
              <div className="bg-blue-500 rounded-lg p-6 relative overflow-hidden">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-bold-caps text-xl mb-2">TOTAL SUPPLY</h3>
                    <p className="text-white font-bold-caps text-2xl">1,000,000,000 $BUGO</p>
                  </div>
                </div>
              </div>

              {/* Token Address Card */}
              <div className="bg-blue-500 rounded-lg p-6">
                <h3 className="text-white font-bold-caps text-xl mb-4">TOKEN ADDRESS</h3>
                <div className="bg-black/20 rounded p-3">
                  <code className="text-white font-mono text-sm break-all">Coming Soon</code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderAbout = () => (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: "url(/images/space-background.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-6">
        <div
          className="flex items-center space-x-2 cursor-pointer hover:scale-105 transition-transform"
          onClick={() => setCurrentSection("home")}
        >
          <div className="w-12 h-12 flex items-center justify-center">
            <img src="/images/bugo-logo.png" alt="BUGO Logo" className="w-12 h-12 object-contain" />
          </div>
          <span className="text-white font-bold-caps text-xl">BUGO</span>
        </div>

        <div className="flex items-center space-x-6 bg-blue-500 rounded-full px-8 py-4">
          <button
            onClick={() => setCurrentSection("home")}
            className="text-white hover:text-yellow-300 font-menu text-sm transition-colors text-shadow"
          >
            HOME
          </button>
          <button
            onClick={() => setCurrentSection("about")}
            className="text-white font-menu text-sm transition-colors text-shadow bg-white/20 px-4 py-2 rounded-full"
          >
            ABOUT
          </button>
          <button
            onClick={() => setCurrentSection("buy")}
            className="text-white hover:text-yellow-300 font-menu text-sm transition-colors text-shadow"
          >
            HOW TO BUY
          </button>
          <button
            onClick={() => setCurrentSection("gallery")}
            className="text-white hover:text-yellow-300 font-menu text-sm transition-colors text-shadow"
          >
            GALLERY
          </button>
          <button
            onClick={() => setCurrentSection("tokenomics")}
            className="text-white hover:text-yellow-300 font-menu text-sm transition-colors text-shadow"
          >
            TOKENOMICS
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold-caps px-6 py-3 rounded-full text-shadow">
            BUY BUGO
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Story Content */}
          <div className="lg:w-1/2 space-y-8">
            <div className="flex items-center space-x-4 mb-8">
              <span className="text-4xl">🚀</span>
              <h1 className="text-5xl md:text-6xl font-handwriting text-white transform -rotate-1 text-shadow-strong">
                Who is BUGO?
              </h1>
            </div>

            <div className="space-y-6 text-white font-handwriting text-xl leading-relaxed">
              <p className="text-shadow">
                BUGO is sweet but determined,
                <br />
                the cutest rebel in the galaxy.
              </p>

              <p className="text-shadow">
                One day, while wandering through
                <br />
                the Base fields, he found himself
                <br />
                aboard the <span className="text-blue-400 font-bold">APE STORE</span> rocket.
              </p>

              <p className="text-shadow">
                Now he's on an intergalactic
                <br />
                mission: to spread fun, rewards,
                <br />
                and a little bit of chaos!
              </p>

              <p className="text-2xl font-bold text-shadow">
                BUGO is here. In space.
                <br />
                And on <span className="text-blue-400">APE STORE</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderHome = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-blue-600 relative overflow-hidden">
      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-6">
        <div className="flex items-center space-x-2">
          <div className="w-12 h-12 flex items-center justify-center">
            <img src="/images/bugo-logo.png" alt="BUGO Logo" className="w-12 h-12 object-contain" />
          </div>
          <span className="text-white font-bold-caps text-xl">BUGO</span>
        </div>

        <div className="hidden md:flex items-center space-x-6 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
          <button
            onClick={() => setCurrentSection("about")}
            className="text-white hover:text-yellow-300 font-menu text-sm transition-colors text-shadow"
          >
            ABOUT
          </button>
          <button
            onClick={() => setCurrentSection("buy")}
            className="text-white hover:text-yellow-300 font-menu text-sm transition-colors text-shadow"
          >
            HOW TO BUY
          </button>
          <button
            onClick={() => setCurrentSection("gallery")}
            className="text-white hover:text-yellow-300 font-menu text-sm transition-colors text-shadow"
          >
            GALLERY
          </button>
          <button
            onClick={() => setCurrentSection("tokenomics")}
            className="text-white hover:text-yellow-300 font-menu text-sm transition-colors text-shadow"
          >
            TOKENOMICS
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold-caps px-6 py-3 rounded-full text-shadow">
            BUY BUGO
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-6 py-8">
        {/* Main BUGO Character - Much Larger */}
        <div className="flex justify-center mb-8">
          <div className="relative w-full max-w-6xl">
            <img
              src="/images/bugo-hero.png"
              alt="BUGO Bear Character with food and money"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Exchanges Section */}
      <div className="relative z-10 bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Large BUGO Character - Taking up more space */}
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative w-full max-w-lg">
                <img
                  src="/images/bugo-exchanges.png"
                  alt="BUGO Bear throwing money for exchanges"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-5xl md:text-7xl font-handwriting text-black mb-6 transform rotate-1">EXCHANGES</h2>
              <p className="text-2xl text-black/90 mb-8 font-handwriting">
                $BUGO is available for trading
                <br />
                on major exchanges.
              </p>

              <div className="flex justify-center lg:justify-start">
                {/* APE STORE Card */}
                <div className="bg-black rounded-lg p-6 border border-gray-700 hover:border-gray-500 transition-colors max-w-md w-full">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                      <img src="/images/banana-logo.png" alt="Banana" className="w-8 h-8 object-contain" />
                    </div>
                    <span className="text-white font-bold-caps text-2xl tracking-wider">APE STORE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Section */}
      <div className="relative z-10 py-16">
        <div className="container mx-auto px-6 text-center">
          {/* Much Larger Social Character */}
          <div className="flex justify-center mb-8">
            <div className="relative w-full max-w-lg">
              <img
                src="/images/bugo-social.png"
                alt="BUGO Bear in business suit with bearish grin"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          <h3 className="text-4xl md:text-5xl font-handwriting text-white mb-8 transform -rotate-1">
            $BUGO Maxi with a bearish grin.
          </h3>

          {/* Social Media Buttons */}
          <div className="flex justify-center space-x-8 mb-8">
            <a
              href="https://dexscreener.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 flex items-center justify-center hover:scale-110 transition-transform"
            >
              <img src="/images/owl-logo.png" alt="DexScreener" className="w-12 h-12 object-contain" />
            </a>
            <a
              href="https://x.com/Bugo_onBase"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 flex items-center justify-center hover:scale-110 transition-transform"
            >
              <img src="/images/twitter-x-logo-clean.png" alt="Twitter X" className="w-12 h-12 object-contain" />
            </a>
            <a
              href="https://t.me/bugoonbase"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 flex items-center justify-center hover:scale-110 transition-transform"
            >
              <img src="/images/telegram-logo-clean.png" alt="Telegram" className="w-12 h-12 object-contain" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )

  const renderDeviceChoice = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="grid md:grid-cols-2 gap-20 max-w-6xl mx-auto">
          {/* Desktop Option - Much Larger */}
          <div
            className="p-8 hover:scale-105 transition-all cursor-pointer group"
            onClick={() => setCurrentSection("home")}
          >
            <div className="flex justify-center">
              <div className="group-hover:scale-110 transition-transform w-full max-w-md">
                <img
                  src="/images/desktop-bear.png"
                  alt="Desktop Bear with Laptop"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* Mobile Option - Much Larger */}
          <div
            className="p-8 hover:scale-105 transition-all cursor-pointer group"
            onClick={() => setCurrentSection("home")}
          >
            <div className="flex justify-center">
              <div className="group-hover:scale-110 transition-transform w-full max-w-md">
                <img
                  src="/images/mobile-bear.png"
                  alt="Mobile Bear with Phone"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-2xl mx-auto">
          <p className="text-3xl text-white font-handwriting leading-relaxed text-shadow">
            Are you on your phone or at your mom's computer?
            <br />
            Choose the right version to enter the Bugo zone.
          </p>
        </div>
      </div>
    </div>
  )

  if (currentSection === "about") {
    return renderAbout()
  }
  if (currentSection === "buy") {
    return renderBuy()
  }
  if (currentSection === "gallery") {
    return renderGallery()
  }
  if (currentSection === "tokenomics") {
    return renderTokenomics()
  }
  if (currentSection === "home") {
    return renderHome()
  }

  return renderDeviceChoice()
}
