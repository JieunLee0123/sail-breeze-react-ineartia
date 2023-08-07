import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import { usePage } from '@inertiajs/react'

const Index = () => {
  const { movie_ids } = usePage().props;

  console.log(movie_ids)

  return (
    <div>
      movie/index
    </div>
  );
};

export default Index;