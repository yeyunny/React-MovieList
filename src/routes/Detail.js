import { useState, useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import Movie from "../components/Movie";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState({});

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    setDetails(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading ~~</h1>
      ) : (
        <div>
          {details && (
            <Movie
              key={details.id}
              id={details.id}
              coverImg={details.medium_cover_image}
              title={details.title}
              genres={details.genres}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default Detail;
