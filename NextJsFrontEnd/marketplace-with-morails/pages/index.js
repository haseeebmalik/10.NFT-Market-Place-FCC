import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // How do we show the recently listed NFTs?

  // we will index the events off-chain and then read from our database.
  // setup a server to listen for those events to be fired, and we will add them
  // to a database to query.

  // The Graph does it in a decentralized way.
  // Morails does it in a centralized way and comes with a ton of other features.
  
  // All our logic is still 100% on chain.
  // Speed and Development time.
  // Its really hard to start a prod blockchain project 100% decentralized.
  // They are working on open sourcing their code.
  // Feature richness
  // We can create more features with a centralized backend to start.
  
  return (
    <main >
     <div>
      
     </div>
    </main>
  )
}
