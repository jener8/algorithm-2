export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">About Seeing Your Algorithm</h1>

      <div className="prose max-w-none">
        <p className="text-lg mb-4">
          Seeing Your Algorithm is a research project exploring the intersection of computational thinking and artistic
          expression.
        </p>

        <p className="mb-4">
          Our platform allows computer scientists, developers, and algorithm enthusiasts to visualize their algorithms
          in a new way. By uploading a sketch of how you visualize your algorithm, our AI transforms it into unique
          artwork that captures the essence of computational processes.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>

        <p className="mb-4">
          We believe that algorithms are not just functional tools but can also be appreciated for their aesthetic
          qualities. Our mission is to bridge the gap between technical and artistic communities, creating a space where
          computational thinking is celebrated through visual art.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">The Process</h2>

        <ol className="list-decimal pl-6 mb-6 space-y-2">
          <li>
            <strong>Sketch:</strong> Draw how you visualize your algorithm working - whether it's a sorting algorithm,
            pathfinding, or any computational process.
          </li>
          <li>
            <strong>Transform:</strong> Our AI analyzes your sketch and transforms it into a unique piece of digital
            art.
          </li>
          <li>
            <strong>Share:</strong> Your algorithm art can be shared in our gallery, featured in exhibitions, or even
            printed on merchandise.
          </li>
        </ol>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>

        <p>
          For inquiries about exhibitions, collaborations, or any questions about the project, please reach out to us at
          <a href="mailto:contact@seeingyouralgorithm.com" className="text-primary ml-1">
            contact@seeingyouralgorithm.com
          </a>
        </p>
      </div>
    </div>
  )
}
