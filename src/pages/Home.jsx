import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Portfolio</h1>
        <p className="text-gray-600 mb-8">作品集首页 - 占位页面</p>
        <Link
          to="/case-studies/cl-interior"
          className="inline-block px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          查看 CL Interior 案例研究
        </Link>
      </div>
    </div>
  )
}

export default Home
