import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiThumbsUp } from "react-icons/fi";

function Card({ res }) {
  return (
    <div className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg border border-slate-400 m-2">
      <Link href={`/movie/${res.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            res.backdrop_path || res.poster_path
          }`}
          width={500}
          height={300}
          className="rounded-t-lg group-hover:opacity-75 transition-opacity duration-300 max-h-40"
        ></Image>
        <div className="p-2">
          <p className="line-clamp-2 text-md">{res.overview}</p>
          <h2 className="text-lg font-bold truncate">
            {res.title || res.name}
          </h2>
          <p className="flex items-center">
            {res.release_date || res.first_air_date}
            <FiThumbsUp className="h-5 mr-1 ml-3" />
            {res.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Card;
