import { Suspense } from "react";
import Listings from "@/components/listings";
export const metadata = { title: "Find a home | Nazim" };
export default function Page() {
  return (
    <Suspense fallback={<p className="section">Loading homes…</p>}>
      <Listings />
    </Suspense>
  );
}
