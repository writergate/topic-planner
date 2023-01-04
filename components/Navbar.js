import Link from "next/Link"

function Navbar(){
    return (
        <nav>
            <div className="layout-Navbar">
                <h1 className="logo">Logo</h1>

                <h2 className="text-Dashboard"><Link href="/Dashboard">Dashboard</Link></h2>
                <h2 className="text-Templates"> <Link href="/Templates">Templates</Link></h2>
                
                <h2 className="text-ArticleTypes"><Link href="/ArticleTypes">Articl Types</Link></h2>
                <h2 className="text-TopicDomains"><Link href="/TopicDomains">Topic Domains</Link></h2>
                <h2 className="text-flaggedTopics"> <Link href="/flaggedTopics">Flagged Topics</Link></h2>
            </div>
        </nav>
    )
}
export default Navbar

