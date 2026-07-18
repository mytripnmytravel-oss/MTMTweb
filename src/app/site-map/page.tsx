import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SITE_URL } from "@/lib/site";
import { regions, destinations } from "@/data/destinations";
import { packages, packageSlug } from "@/data/tours";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
    title: "Sitemap | MyTripMyTravel",
    description: "Browse every section of MyTripMyTravel: tours, destinations, wellness, fleet, services, weddings, corporate travel and the journal.",
    alternates: { canonical: `${SITE_URL}/site-map` },
};

const MAIN = [
    { label: "Home", href: "/" },
    { label: "Tours", href: "/tours" },
    { label: "All tour variations", href: "/tours/golden-triangle-all" },
    { label: "Destinations", href: "/destinations" },
    { label: "Elite Fleet", href: "/fleet" },
    { label: "Ground Services", href: "/services" },
    { label: "Chauffeured Car Rental", href: "/services/car-rental" },
    { label: "Inter-City Transfers", href: "/services/inter-city" },
    { label: "Wellness & Sanctuary", href: "/wellness" },
    { label: "Heritage Dining", href: "/heritage-dining" },
    { label: "Expert Guides", href: "/expert-guides" },
    { label: "Weddings", href: "/weddings" },
    { label: "Corporate Travel", href: "/corporate" },
    { label: "Journal", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "About Us", href: "/about" },
    { label: "The Methodology", href: "/methodology" },
    { label: "Careers", href: "/careers" },
    { label: "Plan Your Trip", href: "/booking" },
];

const WELLNESS = [
    { label: "Yoga & Soul", href: "/wellness/yoga-soul" },
    { label: "Ayurvedic Care", href: "/wellness/ayurvedic" },
    { label: "Orthopedic Restoration", href: "/wellness/orthopedic" },
    { label: "Therapeutic Massage", href: "/wellness/massage" },
];

const LEGAL = [
    { label: "Privacy Policy", href: "/legal/privacy" },
    { label: "Terms", href: "/legal/terms" },
    { label: "Cookies", href: "/legal/cookies" },
];

function Group({ title, links }: { title: string; links: { label: string; href: string }[] }) {
    return (
        <div>
            <h2 className="text-lg font-bold text-ink">{title}</h2>
            <ul className="mt-4 grid gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
                {links.map((l) => (
                    <li key={l.href}>
                        <Link href={l.href} className="text-[15px] text-ink-soft transition-colors hover:text-clay">
                            {l.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default function SiteMapPage() {
    const tourLinks = packages.map((p) => ({ label: p.title, href: `/tours/${packageSlug(p)}` }));

    return (
        <main className="min-h-screen bg-paper">
            <Navbar />

            <section className="border-b border-line pb-12 pt-36 sm:pt-40">
                <div className="container-x">
                    <p className="eyebrow eyebrow-accent">Site index</p>
                    <h1 className="display-1 mt-4 font-bold text-ink">Sitemap</h1>
                    <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
                        Every section of MyTripMyTravel in one place. Looking for the XML sitemap for search engines? It lives at{" "}
                        <a href="/sitemap.xml" className="font-semibold text-clay underline underline-offset-2">/sitemap.xml</a>.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container-x space-y-14">
                    <Group title="Main pages" links={MAIN} />

                    <Group title="Regions" links={regions.map((r) => ({ label: r.name, href: `/destinations/region/${r.slug}` }))} />

                    {regions.map((r) => {
                        const cities = destinations.filter((d) => d.regionSlug === r.slug);
                        if (cities.length === 0) return null;
                        return (
                            <Group
                                key={r.slug}
                                title={`Destinations, ${r.name}`}
                                links={cities.map((c) => ({ label: c.name, href: `/destinations/${c.slug}` }))}
                            />
                        );
                    })}

                    <Group title="Tours & itineraries" links={tourLinks} />
                    <Group title="Wellness" links={WELLNESS} />
                    <Group title="Journal" links={blogPosts.map((b) => ({ label: b.title, href: `/blog/${b.slug}` }))} />
                    <Group title="Legal" links={LEGAL} />
                </div>
            </section>

            <Footer />
        </main>
    );
}
