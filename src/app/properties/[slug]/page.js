import { properties } from "@/lib/properties";
import { notFound } from "next/navigation";
import PropertyDetail from "@/components/property-detail";
export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.id }));
}
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = properties.find((p) => p.id === slug);
  return { title: p ? `${p.title} | Nazim` : "Home not found | Nazim" };
}
export default async function Page({ params }) {
  const { slug } = await params;
  const property = properties.find((p) => p.id === slug);
  if (!property) notFound();
  return <PropertyDetail property={property} />;
}
