import { ConnectButton } from "web3uikit"
import Link from "next/link"
import Router from "next/router"
export default function Header() {
    return (
        <nav className="p-5 border-b-2 flex flex-row justify-between item-center">
            <h1 className="py-4 px-4 font-bold text-3xl">NFT Marketplace</h1>
            <div className="flex flex-row items-center">
                <span
                className="mr-4 p-6"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                        Router.push({
                            pathname: "/",
                            // query: { name: 'Someone' }
                        })
                    }}
                >
                    NFT marketplace
                </span>

                <span
                className="mr-4 p-6"

                    style={{ cursor: "pointer" }}
                    onClick={() => {
                        Router.push({
                            pathname: "/sell-nft",
                            // query: { name: 'Someone' }
                        })
                    }}
                    href="/sell-nft"
                >
                    Sell Nft
                </span>
                {// Here moralisAuth={false} means we dont connect with our moralis database
                //when we connect we connect with only wallet
                }
                <ConnectButton moralisAuth={false}/>
            </div>
        </nav>
    )
}
