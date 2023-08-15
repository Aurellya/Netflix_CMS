import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaXmark, FaPlay, FaStar } from "react-icons/fa6";
import { BsPersonBadge } from "react-icons/bs";
import { BiHide } from "react-icons/bi";
import { fetchMovieDetails } from "../stores/actions/actionCreator";
import formatEmbedURL from "../utils/formatEmbedURL";
import PreLoader from "../components/PreLoader";

export default function ViewDetailsModal() {
  const [showTrailer, setShowTrailer] = useState(false);
  const { movie, movieLoading } = useSelector((state) => state.movie);
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovieDetails(+id));
  }, [dispatch, id]);

  if (movieLoading) {
    return <PreLoader />;
  }

  return (
    <>
      <div className="fixed top-0 left-0 z-50 flex min-h-screen overflow-y-hidden w-screen flex-col bg-tertiary-color backdrop-blur bg-opacity-90 p-6">
        <div className="relative space-y-8 rounded bg-primary-color text-white pt-10 pb-14 px-6 md:px-10 w-full">
          {/* Header */}
          <div className="flex justify-end">
            <Link to="/" className="flex items-center justify-center">
              <FaXmark className="text-[24px]" />
            </Link>
          </div>

          {/* Content */}
          <div className="grid grid-cols-3 gap-4">
            <div className="w-[320px] mx-auto">
              <img src={movie.imgUrl} alt="" className="w-full" />
            </div>

            <div className="col-span-2 px-6 font-semibold">
              <div className="flex items-start gap-12">
                <h1 className="text-4xl">{movie.title}</h1>
                <button
                  className="flex items-center gap-4 bg-secondary-color px-4 py-2 rounded mt-0.5"
                  onClick={() => setShowTrailer(!showTrailer)}
                >
                  {showTrailer ? <BiHide /> : <FaPlay />}
                  <span>{showTrailer ? "Hide" : "Watch"}&nbsp;Trailer</span>
                </button>
              </div>

              {/* GENRE + RATING */}
              <div className="flex items-center gap-[30px] mt-3 mb-[40px]">
                <div className="flex gap-2">
                  <span>Genre:</span>
                  <span className="font-normal">
                    {movie.Genre?.name || "Unknown"}
                  </span>
                </div>

                <div className="flex gap-2">
                  <span>Rating:</span>
                  <span className="font-normal">{movie.rating}</span>
                  <div className="flex items-center justify-center">
                    <FaStar className="text-yellow-300" />
                  </div>
                </div>
              </div>

              {/* TRAILER*/}
              {showTrailer ? (
                <div className="mt-3 mb-[40px]">
                  <div className="w-fit mb-[20px]">
                    <h3 className="text-2xl font-semibold">Trailer</h3>
                    <hr className="pb-1 my-2 border-1 border-secondary-color  bg-secondary-color" />
                  </div>

                  <div className="w-[500px] h-[300px]">
                    <iframe
                      className="w-full h-full"
                      src={formatEmbedURL(movie.trailerUrl)}
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              ) : (
                <>
                  {/* OVERVIEW / SYNOPSIS */}
                  <div className="my-6">
                    <div className="w-fit">
                      <h3 className="text-2xl">Overview</h3>
                      <hr className="pb-1 my-2 border-1 border-secondary-color  bg-secondary-color" />
                    </div>

                    <p className="font-normal">{movie.synopsis}</p>
                  </div>

                  {/* CASTS  */}
                  <div className="mb-6 mt-8">
                    <div className="w-fit mb-[30px]">
                      <h3 className="text-2xl">Casts</h3>
                      <hr className="pb-1 my-2 border-1 border-secondary-color  bg-secondary-color" />
                    </div>

                    <div className=" text-center flex gap-2 items-start">
                      {movie?.Casts?.map((cast) => (
                        <div
                          className="flex flex-col gap-[12px] items-center justify-center w-[80px]"
                          key={cast.id}
                        >
                          <div className="w-[80px] h-[80px] flex items-center justify-center">
                            {cast.profilePict ? (
                              <img
                                src={cast.profilePict}
                                alt={`${cast.name} profile picture`}
                                className="max-w-full max-h-full rounded-xl"
                              />
                            ) : (
                              <div className="w-[60px] h-[60px] flex items-center justify-center rounded-xl bg-gray-300">
                                <BsPersonBadge className="h-6 w-6 text-gray-600" />
                              </div>
                            )}
                          </div>

                          <span>{cast.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="absolute right-0 bottom-0 px-6 py-4 bg-secondary-color bg-opacity-20 text-gray-400">
            Created By:&nbsp;{movie?.User?.username}
          </div>
        </div>
      </div>
    </>
  );
}
