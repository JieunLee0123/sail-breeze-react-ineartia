import React, { useEffect, useState } from "react";

const Create = () => {
  // const [moviesArr, setMoviesArr] = useState([]);

  // const params = {
  //   api_key: '7d064d13b05e8a10b58486ad211c506d',
  //   language: 'ko',
  //   page: 5,
  //   region: 'KR'	
  // }

  // const getMoviesArr = () => axios.get('https://api.themoviedb.org/3/movie/now_playing', {params})
  //   .then((res) => { 
  //     const data = res.data.results;
  //     setMoviesArr(data);
  //     console.log(data)
  //    })
  //   .catch((Error) => { console.log(Error) })
  
  // useEffect(() => {
  //   getMoviesArr();
  // }, [])

  return (
    <div className="mt-20">
        <div class="w-full py-10">
            <div class="container mx-auto px-6 flex items-start justify-center">
                <div class="w-full lg:w-1/2">
                    {/* <dh-component> */}
                        {/* Card is full width. Use in 6 col grid for best view.  */}
                        {/* Card code block start */}
                        <div class="bg-white dark:bg-gray-800 shadow rounded w-full pb-6">
                            <h1 tabindex="0" class="focus:outline-none p-4 sm:p-8 text-lg font-bold text-gray-800 dark:text-gray-100">Your Subscriptions</h1>
                            {/* {
                              moviesArr.map((movie, i) => {
                                return (
                                  <div key={movie.id}>
                                    
                                  </div>
                                )
                              })
                } */}
                <div class="py-4 px-5 border-gray-200 border rounded mx-4 sm:mx-8 mb-6">
                  <div class="flex items-enter mb-5 justify-between">
                    <div class="flex items-center">
                      <div class="mr-4 w-12 h-12 rounded shadow">
                        <img tabindex="0" class="focus:outline-none w-full h-full overflow-hidden object-cover object-center rounded" src="https://tuk-cdn.s3.amazonaws.com/assets/components/grid_cards/gc_3.png" alt="logo 1" />
                      </div>
                      <div>
                        <h3 tabindex="0" class="focus:outline-none text-gray-800 dark:text-gray-100 mb-2 sm:mb-1  text-base font-normal leading-4">New York Times</h3>
                        <p tabindex="0" class="focus:outline-none text-gray-600 dark:text-gray-400 text-xs leading-3">Since: 27 February, 2020</p>
                      </div>
                    </div>
                    <div class="cursor-pointer rounded-full relative shadow-sm">
                      <input checked aria-label="subscribe" type="checkbox" name="toggle" id="toggle1" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-700 checkbox w-4 h-4 rounded-full bg-white absolute m-1 shadow-sm appearance-none cursor-pointer" />
                      <label for="toggle1" class="toggle-label bg-gray-200 dark:bg-gray-700 block w-12 h-6 overflow-hidden rounded-full cursor-pointer"></label>
                    </div>
                  </div>
                  <div class="flex flex-col sm:flex-row items-start sm:items-center">
                    <p tabindex="0" class="focus:outline-none font-normal text-sm flex dark:text-gray-400 items-center">Status: <span tabindex="0" class="focus:outline-none text-indigo-700 dark:text-indigo-600 ml-1">Active</span></p>
                    <p tabindex="0" class="focus:outline-none my-1 sm:my-0 mx-0 sm:mx-8 font-normal text-sm flex dark:text-gray-400 items-center">Articles Read: <span tabindex="0" class="focus:outline-none text-indigo-700 dark:text-indigo-600 ml-1">25</span></p>
                    <p tabindex="0" class="focus:outline-none font-normal text-sm flex dark:text-gray-400 items-center">Articles Saved: <span tabindex="0" class="focus:outline-none text-indigo-700 dark:text-indigo-600 ml-1">08</span></p>
                  </div>
                </div>
                            {/* <style>
                                .checkbox:checked {
                                    right: 0;
                                }
                                .checkbox:checked + .toggle-label {
                                    background-color: #4c51bf;
                                }
                            </style> */}
                        </div>
                        {/* Card code block end */}
                    {/* </dh-component> */}
                </div>
            </div>
        </div>
    </div>
  );
};

export default Create;

