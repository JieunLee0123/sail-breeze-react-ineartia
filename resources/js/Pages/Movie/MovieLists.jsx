import React, { useEffect, useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, useForm } from "@inertiajs/inertia-react";
import { usePage } from '@inertiajs/react'

const Create = () => {
  const { TMDB_ENDPOINT, TMDB_APP_KEY } = usePage().props;

  const [moviesArr, setMoviesArr] = useState([]);
  const [checkedIdArr, SetCheckedIdArr] = useState([]);

  const { data, setData, errors, post } = useForm({ movie_ids: [] });

  const onSubmit = (e) => {
    console.log('submit')
    e.preventDefault();
    // setData('movie_ids', [...checkedIdArr]);
    // console.log(data.movie_ids)
    post(route("movies.store"));
  }

  const onChangeInput = (isChecked, movieId) => {
    if (isChecked) {
      setData('movie_ids', [...data.movie_ids, movieId]);
    } else {
      data
      const newCheckedIdArr = data.movie_ids.filter(checkedId => checkedId !== movieId);
      setData('movie_ids', newCheckedIdArr);
    }
    console.log(data)
  }

  const params = {
    api_key: TMDB_APP_KEY,
    language: 'ko',
    page: 5,
    region: 'KR'	
  }

  const getMoviesArr = () => axios.get(TMDB_ENDPOINT+'movie/now_playing', {params})
    .then((res) => { 
      const data = res.data.results;
      setMoviesArr(data);
      console.log(data)
     })
    .catch((Error) => { console.log(Error) })

  useEffect(() => {
    getMoviesArr();
  }, [])

  return (
    <form name="createForm" className="max-w-5xl mx-auto" onSubmit={onSubmit}>
      {/* Card is full width. Use in 6 col grid for best view. */}
      {/* Card code block start */}
      <div className="bg-white rounded w-full pb-6">
        {/* title & save btn */}
        <div className="flex justify-between mx-4 sm:mx-8 mb-6">
          <h2 className="p-4 sm:p-8 text-lg font-bold text-gray-800">Your Subscriptions</h2>
          <button type="submit" className="self-center bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Save
          </button>
        </div>
        
        {/* lists */}
        {
          moviesArr.map((movie, i) => {
            return (
              <div key={movie.id} className="py-4 px-5 border-gray-200 border rounded mx-4 sm:mx-8 mb-6">
                <div className="flex items-enter mb-5 justify-between">
                  <div className="flex items-center">
                    <div className="mr-4 w-12 h-12 rounded shadow">
                      <img className="w-full h-full overflow-hidden object-cover object-center rounded" src={`https://image.tmdb.org/t/p/original`+movie.poster_path} alt="E" />
                    </div>
                    <div>
                      <h3 className="mb-2 sm:mb-1 text-gray-800 text-base font-normal leading-4">{movie.title}</h3>
                      <p className="text-gray-600 text-xs leading-3">개봉일 : {movie.release_date}</p>
                    </div>
                  </div>
                  
                  <div className="cursor-pointer rounded-full relative shadow-sm">
                    <input onChange={e => {onChangeInput(e.target.checked, movie.id)}} type="checkbox" name="toggle" id={movie.id} className="focus:outline-none checkbox w-4 h-4 rounded-full bg-white absolute m-1 shadow-sm appearance-none cursor-pointer" />
                    <label htmlFor={movie.id} className="toggle-label bg-gray-200 block w-12 h-6 overflow-hidden rounded-full cursor-pointer" />
                  </div>

                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center">
                  <p className="font-normal text-sm flex items-center">
                    평점 : <span className="text-indigo-700 ml-1">{movie.vote_average}</span>
                  </p>
                  <p className="my-1 sm:my-0 mx-0 sm:mx-8 font-normal text-sm flex items-center">
                    인기 : <span className="text-indigo-700 ml-1">{movie.popularity}</span>
                  </p>
                  <p className="font-normal text-sm flex items-center">
                    투표수 : <span className="text-indigo-700 ml-1">{movie.vote_count}</span>
                  </p>
                </div>
              </div>
            )
          })
        }
        <style>
          {`.checkbox:checked {
                /* Apply class right-0*/
                right: 0;
            }
            .checkbox:checked + .toggle-label {
                /* Apply class bg-indigo-700 */
                background-color: #4c51bf;
            }`}
        </style>
      </div>
      {/* Card code block end */}
    </form>
  );
};

export default Create;

