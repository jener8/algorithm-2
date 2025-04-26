import { Upload, ImageIcon } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <section className="bg-gradient-to-r from-gray-100 to-gray-200 py-20 px-4 text-center relative">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-black">Turn Your Algorithm into Art</h1>
          <div className="mb-8 space-y-4">
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-black">
              Share your algorithm sketch and watch it transform through AI into a unique piece of art
            </p>
            <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
              We are interested in how people imagine the algorithms that control their social media, browsing, news, events and chats to look like in their lives
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-3xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-gray-200 shadow-sm">
              <h3 className="font-semibold mb-2 text-black">Sketch</h3>
              <p className="text-sm text-gray-700">Draw your algorithm visualization</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-gray-200 shadow-sm">
              <h3 className="font-semibold mb-2 text-black">Transform</h3>
              <p className="text-sm text-gray-700">AI artist will use AI to generate unique artwork</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-gray-200 shadow-sm">
              <h3 className="font-semibold mb-2 text-black">Share</h3>
              <p className="text-sm text-gray-700">Display in exhibitions or as merchandise</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-black px-8 py-3 rounded font-semibold hover:bg-primary/90 transition flex items-center justify-center">
              <Upload className="w-5 h-5 mr-2" />
              Upload Sketch
            </button>
            <button className="bg-white border-2 border-primary text-primary px-8 py-3 rounded font-semibold hover:bg-gray-50 transition flex items-center justify-center">
              <ImageIcon className="w-5 h-5 mr-2" />
              View Gallery
            </button>
          </div>
          <div className="mt-8 text-sm text-gray-700">
            <p>Join our community of algorithm artists</p>
            <p className="mt-2">Featured in exhibitions and available as merchandise</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">Featured Algorithms</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredAlgorithms.map((algorithm, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-square relative bg-gray-100">
                <div className="absolute inset-0 grid grid-cols-2">
                  <div className="border-r border-gray-200 p-2">
                    <div className="w-full h-full bg-gray-200 rounded" />
                  </div>
                  <div className="p-2">
                    <div className="w-full h-full bg-gray-300 rounded" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">{algorithm.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{algorithm.description}</p>
                <span className="text-xs text-gray-500">by {algorithm.author}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Wear Your Algorithm</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {merchandise.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-video relative bg-gray-200" />
                <div className="p-4">
                  <h3 className="font-bold text-lg">{item.name}</h3>
                  <p className="text-accent font-semibold">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary text-black py-16 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Share Your Algorithm</h2>
        <p className="mb-8 max-w-2xl mx-auto">
          Upload your algorithm sketch and join our growing collection of computational art. Your sketch will be
          transformed into a unique AI-generated artwork.
        </p>
        <button className="bg-accent text-black px-8 py-3 rounded font-semibold hover:bg-accent/90 transition">
          Start Creating
        </button>
      </section>

      <section className="max-w-7xl mx-auto px-4 mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Current Exhibitions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {exhibitions.map((exhibition, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-xl mb-2">{exhibition.title}</h3>
              <p className="text-gray-600 mb-4">{exhibition.description}</p>
              <div className="text-sm text-gray-500">
                <p>{exhibition.location}</p>
                <p>{exhibition.dates}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

const featuredAlgorithms = [
  {
    title: "Sorting Visualization",
    description: "A bubble sort algorithm visualized through organic shapes",
    author: "Jenny K.",
  },
  {
    title: "Neural Network Flow",
    description: "Mapping neural connections as flowing streams",
    author: "Mike R.",
  },
  {
    title: "Binary Tree Growth",
    description: "Binary tree operations represented as natural growth patterns",
    author: "Sarah L.",
  },
  {
    title: "Recursive Patterns",
    description: "Recursion visualized through geometric fractals",
    author: "Alex M.",
  },
]

const merchandise = [
  { name: "Mug", price: "£15" },
  { name: "T-Shirt", price: "£25" },
  { name: "Poster", price: "£20" },
]

const exhibitions = [
  {
    title: "Algorithms in Motion",
    description: "Interactive exhibition featuring algorithm sketches and their AI interpretations",
    location: "Digital Arts Gallery",
    dates: "May 15 - June 30, 2025",
  },
  {
    title: "Code as Art",
    description: "Exploring the intersection of computer science and artistic expression",
    location: "Tech Museum",
    dates: "July 10 - August 20, 2025",
  },
]
