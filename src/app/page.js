export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 p-4">
      <div className="bg-white p-8 rounded-3xl shadow-2xl text-center max-w-md w-full">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">NoCap</h1>
        <p className="text-gray-600 mb-6">
          Anonymous messaging and feedback platform
        </p>
        <p className="text-sm text-gray-500">
          To send someone an anonymous message, visit their personal link:
        </p>
        <div className="mt-4 bg-gray-100 rounded-lg p-3">
          <code className="text-sm text-purple-600">nocap.bio/username</code>
        </div>
      </div>
    </div>
  )
}
