"use client";
import { ProjectFace } from "@/ts/interfaces";
import { useState, useEffect } from "react";
import ProjectCard from "@/components/Card/ProjectCard";
import Footer from "../../Projects/Footer";
import Loading from "@/components/Loading";
import Header from "../Projects/Header";

function Projects() {
  const [projectData, setProjectData] = useState<ProjectFace[]>([]);
  const [totalProjects, setTotalProjects] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Fetch the total number of projects
    const fetchTotalProjects = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/projects`);
        if (!res.ok) throw new Error("Failed to fetch total projects.");

        const data = await res.json();
        setTotalProjects(data.data.length); // Assuming `data.data` contains all the projects
      } catch (error) {
        console.error("Error fetching total projects:", error);
        setError(true);
      }
    };

    // Fetch the limited number of projects
    const fetchLimitedProjects = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/projects?limit=4`);
        if (!res.ok) throw new Error("Failed to fetch limited projects.");

        const data = await res.json();
        setProjectData(data.data); // Assuming `data.data` contains the limited projects
        setLoading(false);
      } catch (error) {
        console.error("Error fetching limited projects:", error);
        setError(true);
        setLoading(false);
      }
    };

    fetchTotalProjects();
    fetchLimitedProjects();
  }, []);

  if (loading) return <Loading />;
  if (error) return <p>Failed to load projects.</p>;

  return (
    <section className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      <Header projects={totalProjects} />
      {projectData.map((item) => (
        <ProjectCard key={item._id} data={item} />
      ))}
      <Footer />
    </section>
  );
}

export default Projects;
