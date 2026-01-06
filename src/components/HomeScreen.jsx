import Image from 'next/image'

export default function HomeScreen() {
  // Placeholder App Store link - update with actual link when app is released
  const APP_STORE_LINK = "https://apps.apple.com/app/nocap" // TODO: Update with actual App Store URL

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="relative max-w-4xl w-full">
        {/* Main yellow template image with App Store button inside */}
        <div className="relative w-full aspect-[9/16]">
          <Image
            src="/images/homescreen/nocapweb_mainscreen.png"
            alt="NoCap - Real opinions from real friends"
            fill
            className="object-contain"
            priority
          />

          {/* App Store Download Button - positioned inside yellow template */}
          <div className="absolute bottom-[13%] left-1/2 transform -translate-x-1/2 z-10">
            <a
              href={APP_STORE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-transform hover:scale-105 active:scale-95"
            >
              <Image
                src="/images/homescreen/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                alt="Download on the App Store"
                width={220}
                height={66}
                className="object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
