import { ProjectFace } from "@/ts/interfaces";
import { Metadata } from "next/types";
import Header from "@/components/Pages/Projects/Header";
import Error_v1 from "@/components/Error_v1";
import Loading from "@/components/Loading";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";

// Lazy load projectCard component
const ProjectCard = dynamic(() => import("@/components/Card/ProjectCard"), {
  suspense: true,
});

export const metadata: Metadata = {
  title: "Our Projects - 24x7 Rudra Creative Home Decor & Architects",
  description:
    "Discover our portfolio of stunning projects at 24x7 Rudra Creative Home Decor & Architects. Explore our innovative designs and home decor solutions tailored to clients in the Patna region.",
  keywords: [
    "projects",
    "portfolio",
    "home decor projects",
    "architectural designs",
    "interior design projects",
    "Patna projects",
    "24x7 Rudra Creative Home Decor & Architects",
    "renovation",
    "design inspiration",
  ],
};


export default async function Page() {
  let projects: ProjectFace[] = [];

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/projects`,
      { cache: "no-store" }
    );

    if (!res.ok) throw new Error("Failed to fetch Projects.");

    const apiResponse = await res.json();
    projects = apiResponse.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return (
      <Error_v1
        message={
          <p className="text-[3rem] sm:text-[4rem] xl:text-[5rem] leading-none font-[200]">
            Failed to fetch <br />
            <em className="font-[600]">Projects.</em>
          </p>
        }
      />
    );
  }

  return (
    <div className="space-y-8 sm:space-y-16 md:space-y-24 lg:space-y-32">
      <section className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        <Header projects={projects.length || 0} />
        <Suspense fallback={<Loading />}>
          {projects.map((item) => (
            <ProjectCard key={item._id} data={item} />
          ))}
        </Suspense>
      </section>
      <div />
    </div>
  );
}
