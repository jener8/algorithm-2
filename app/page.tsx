import { Upload, ImageIcon } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <section className="py-20 px-4 text-center relative">
        {/* Use Next.js Image component directly instead of background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/uploads/algorithm-sketch.png"
            alt="Algorithm sketch background"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Semi-transparent overlay to ensure content readability */}
        <div className="absolute inset-0 bg-white opacity-30 z-0"></div>

        <div className="relative z-10 max-w-4xl mx-auto p-8 rounded-xl bg-white/90 shadow-lg">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-black">Turn Your Algorithm into Art</h1>
          <div className="mb-8 space-y-4">
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-black">
              Share your algorithm sketch and watch it transform through AI into a unique piece of art
            </p>
            <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
              We concerned that algorithms are very addictive and are interested in how people imagine their algorithms
              of social media, browsing, news, events and chats to look like in their lives
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
            <button className="bg-primary text-white px-8 py-3 rounded font-semibold hover:bg-primary/90 transition flex items-center justify-center">
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
                <Image
                  src={
                    index === 0
                      ? "/algorithm-surveillance.png"
                      : index === 2
                        ? "/algorithm-mirror.png"
                        : index === 3
                          ? "/algorithm-thoughts.png"
                          : "/algorithm-bubble.png"
                  }
                  alt={algorithm.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
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

      <section className="py-16 px-4 relative">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/uploads/algorithm-sketch.png"
            alt="Algorithm sketch background"
            fill
            className="object-cover opacity-15"
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center text-white">Wear Your Algorithm</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {merchandise.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-video relative bg-gray-200">
                  <Image
                    src={
                      index === 0
                        ? "/algorithm-vision-mug.png"
                        : index === 1
                          ? "/algorithm-vision-tshirt.png"
                          : index === 2
                            ? "/algorithm-vision-poster.png"
                            : item.image || "/placeholder.svg"
                    }
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                  />
                </div>
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
                <p>coming soon</p>
                <p>date coming soon</p>
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
    image: "/abstract-sort-flow.png",
  },
  {
    title: "Neural Network Flow",
    description: "Mapping neural connections as flowing streams",
    author: "Mike R.",
    image: "/abstract-neural-network.png",
  },
  {
    title: "Binary Tree Growth",
    description: "Binary tree operations represented as natural growth patterns",
    author: "Sarah L.",
    image: "/binary-tree-fractal.png",
  },
  {
    title: "Recursive Patterns",
    description: "Recursion visualized through geometric fractals",
    author: "Alex M.",
    image: "/infinite-triangles.png",
  },
]

const merchandise = [
  { name: "Mug", price: "£15", image: "/algorithmic-abstract-mug.png" },
  { name: "T-Shirt", price: "£25", image: "/algorithmic-flow.png" },
  { name: "Poster", price: "£20", image: "/algorithmic-flow.png" },
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
