"use client";

import PodcastCard from "@/components/PodcastCard";
import { podcastData } from "@/constants";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import React from "react";

const Home = () => {
  const tasks = useQuery(api.tasks.get);
  return (
    <div className="mt-9 flex flex-col gap-9">
      <section className="flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1">Trending Podcasts</h1>
        <div className="podcast_grid">
          {podcastData.map(({ imgURL, id, title, description }) => (
            <PodcastCard
              key={id}
              podcastId={id}
              title={title}
              imgURL={imgURL}
              description={description}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
