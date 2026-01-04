export default function ErrorPage({ searchParams }) {
  const reason = searchParams?.reason || 'unknown'

  const getErrorMessage = () => {
    switch (reason) {
      case 'user_not_found':
        return {
          title: 'User Not Found',
          description: 'This user doesn\'t exist or the link is invalid.',
        }
      case 'question_not_found':
        return {
          title: 'Question Not Found',
          description: 'This question doesn\'t exist or has been deleted.',
        }
      default:
        return {
          title: 'Oops!',
          description: 'Something went wrong. Please try again later.',
        }
    }
  }

  const { title, description } = getErrorMessage()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-400 via-pink-500 to-purple-600 p-4">
      <div className="bg-white p-8 rounded-3xl shadow-2xl text-center max-w-md w-full">
        <div className="text-6xl mb-4">🤷</div>
        <h1 className="text-3xl font-bold mb-2 text-gray-800">{title}</h1>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}
