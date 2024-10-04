import Link from "next/link";

export default function Country() {
    return (
        <div>
            <h1>Let's Explore Some Countries</h1>
            <p>Below are some listed countries.</p>

            <ul>
                <li><Link href="/country/pakistan">Pakistan</Link></li>
                <li><Link href="/country/china">China</Link></li>
                <li><Link href="/country/qatar">Qatar</Link></li>
                <li><Link href="/country/russia">Russia</Link></li>
                <li><Link href="/country/united-arab-emirates">United Arab Emirates</Link></li>
            </ul>
        </div>
    );
}