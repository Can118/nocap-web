export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 p-4">
      <div className="bg-white p-8 rounded-3xl shadow-2xl text-center max-w-md w-full">
        <div className="text-6xl mb-4">✅</div>
        <h1 className="text-3xl font-bold mb-2 text-gray-800">Sent!</h1>
        <p className="text-gray-600 mb-6">
          Your anonymous feedback and message have been delivered.
        </p>
        <p className="text-sm text-gray-500">
          They'll see your feedback in their app, but they'll never know it was you!
        </p>
      </div>
    </div>
  )
}
