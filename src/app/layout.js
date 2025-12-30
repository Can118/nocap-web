import './globals.css'

export const metadata = {
  title: 'NoCap - Send Anonymous Messages',
  description: 'Send anonymous messages and feedback to your friends',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
