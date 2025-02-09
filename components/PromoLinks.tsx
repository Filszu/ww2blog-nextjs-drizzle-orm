import React from 'react'

const PromoLinks = () => {
  return (
    <section className="py-12">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Useful Links</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
      {/* <!-- LeadLoom Games Link --> */}
      <a href="https://www.leadloom.games/?promocode=ww2" target="_blank" rel="noopener noreferrer" className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">LeadLoom Games</h3>
        <p className="text-gray-600"><strong>Earn Money</strong> by playing games Discover exciting games and use promo code <strong>WW2</strong> for 5$ BONUS!</p>
      </a>

      {/* <!-- PartyVote Link --> */}
      <a href="https://partyvote.ciac.me/" target="_blank" rel="noopener noreferrer" className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">PartyVote</h3>
        <p className="text-gray-600">A platform for creating and participating in fun polls and votes. Perfect for events and parties!</p>
      </a>

      {/* <!-- CIAC.me Link --> */}
      <a href="https://ciac.me/" target="_blank" rel="noopener noreferrer" className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">CIAC.me</h3>
        <p className="text-gray-600">Explore a collection of creative tools and resources for developers, designers, and creators.</p>
      </a>


      {/* <!-- Lessons by CIAC Link --> */}
      <a href="https://lessons.ciac.me/" target="_blank" rel="noopener noreferrer" className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Lessons by Filszu</h3>
        <p className="text-gray-600">Learn new skills with free and premium lessons on coding, design, and more.</p>
      </a>
    </div>
  </div>
</section>
  )
}

export default PromoLinks