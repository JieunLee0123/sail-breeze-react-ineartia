import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import { usePage } from '@inertiajs/react'

const Index = () => {
  const { movies } = usePage().props;

  console.log(movies.movie_ids)

  return (
    <div>
      movie/index
    </div>
  );
};

export default Index;