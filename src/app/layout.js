import './globals.css'

export const metadata = {
  title: 'NoCap - Share Anonymous Opinions',
  description: 'Share anonymous opinions with your friends',
  themeColor: '#FFFECE',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    viewportFit: 'cover',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#FFFECE" />
      </head>
      <body style={{ backgroundColor: '#FFFECE' }}>{children}</body>
    </html>
  )
}
