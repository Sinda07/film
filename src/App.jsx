import React, { useState } from "react";
import NavBar from "./components/Navbar/Navbar";
import MovieList from "./components/MovieList/MovieList";
import Filter from "./components/Filter/Filter";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { MovieDetails } from "./components/MovieDetails/MovieDetails";

function App() {
  const [ratingChange, setRatingChange] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [newMovie, setNewMovie] = useState({});
  const [movieData, setMovieData] = useState([
    {
      id: 1,
      title: "Conjuring 3",
      posterUrl:
        "https://www.mediacritik.com/wp-content/uploads/2020/07/the-con-696x431.jpg",
      rating: 5,
      description:
        "A chilling story of terror, murder and unknown evil that shocked even experienced real-life paranormal investigators Ed and Lorraine Warren.",
      trailer: "https://www.youtube.com/embed/KnkTLf_Zrbo?si=aqUQ6oj_czUl8KM7",
    },

    {
      id: Math.random(),
      title: "Interstellar",
      posterUrl:
        "https://fr.web.img6.acsta.net/pictures/14/09/24/12/08/158828.jpg",
      rating: 4,
      description:
        "Earth's future has been riddled by disasters, famines, and droughts. There is only one way to ensure mankind's survival: Interstellar travel.",
      trailer: "https://www.youtube.com/embed/2LqzF5WauAw?si=5pN_-rcbPgYAn661",
    },

    {
      id: Math.random(),
      title: "No Time To Die",
      posterUrl:
        "https://i.dailymail.co.uk/1s/2020/10/01/01/33837226-8792377-image-a-45_1601513129403.jpg",
      rating: 4,
      description:
        "Bond has left active service and is enjoying a tranquil life in Jamaica. His peace is short-lived when his old friend Felix Leiter from the CIA turns up asking for help.",
      trailer: "https://www.youtube.com/embed/BIhNsAtPbPI?si=wY7lnptlmxN8xbsH",
    },
    {
      id: Math.random(),
      title: "The Purge Election Year",
      posterUrl:
        "http://gonewiththetwins.com/new/wp-content/uploads/2016/07/purgeelectionyear.jpg",
      rating: 3,
      description:
        "It's been two years since Leo Barnes (Frank Grillo) stopped himself from a regrettable act of revenge on Purge Night.",
      trailer: "https://www.youtube.com/embed/9rqIJcY9hMc?si=vGSk4DepYPwWTR7q",
    },
    {
      id: Math.random(),
      title: "The Curse of la llorona",
      posterUrl:
        "https://dci832c741skk.cloudfront.net/assets/files/10206/curse-of-la-llorona-movie-review.800x600.jpg",
      rating: 5,
      description:
        "Ignoring the eerie warning of a troubled mother suspected of child endangerment",
      trailer: "https://www.youtube.com/embed/ojuqj8_wWo8?si=5M_RwveX2MQqo7J6",
    },
    {
      id: Math.random(),
      title: "To All the Boys",
      posterUrl:
        "https://upload.wikimedia.org/wikipedia/en/d/d0/To_all_the_boys_always_and_forever.jpg",
      rating: 6,
      description:
        "Lara Jean Covey writes letters to all of her past loves, the letters are meant for her eyes only.",
      trailer: "https://www.youtube.com/embed/555oiY9RWM4?si=uhd2APirntUWLOlm",
    },
    {
      id: Math.random(),
      title: "spiderman No way Home",
      posterUrl:
        "https://static3.cbrimages.com/wordpress/wp-content/uploads/2021/10/Andrew-Gardfield-in-Spider-Man-No-Way-Home.confirmed.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5",
      rating: 5,
      description:
        "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong",
      trailer: "https://www.youtube.com/embed/JfVOs4VSpmA?si=5M8jrXyGaGk2_wXg",
    },
    {
      id: Math.random(),
      title: "A Quiet Place Part II",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BMTE2ODU4NDEtNmRjNS00OTk1LTg4NmMtNTAzYzVlNzJmYjgzXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
      rating: 4,
      description:
        "With the newly acquired knowledge of the seemingly invulnerable creatures' weakness, grief-stricken Evelyn Abbott finds herself on her own, with two young teens,",
      trailer: "https://www.youtube.com/embed/3iXeAwsGhV0?si=lHkK2o6t2iBg1CRB",
    },
    {
      id: Math.random(),
      title: "Gravity",
      posterUrl:
        "https://fr.web.img6.acsta.net/pictures/210/232/21023233_20130729173134181.jpg",
      rating: 4,
      description:
        "Dr. Ryan Stone (Sandra Bullock) is a brilliant medical engineer on her first shuttle mission, with veteran astronaut Matt Kowalski (George Clooney) in command of his last flight before retiring.",
      trailer: "https://www.youtube.com/embed/ufsrgE0BYf0?si=c0-V2YVZxjtFQO-P",
    },
    {
      id: Math.random(),
      title: "Get Out",
      posterUrl:
        "https://upload.wikimedia.org/wikipedia/en/a/a3/Get_Out_poster.png",
      rating: 7,
      description:
        "Chris and his girlfriend Rose go upstate to visit her parents for the weekend.",
      trailer: "https://www.youtube.com/embed/XzmeT5rEPDg?si=_i3lBhGaI8rhT2Dx",
    },
    {
      id: Math.random(),
      title: "X-MEN",
      posterUrl:
        "https://fr.web.img6.acsta.net/pictures/16/04/13/17/27/399447.jpg",
      rating: 5,
      description:
        "Since the dawn of civilization, he was worshiped as a god. Apocalypse, the first and most powerful mutant from Marvel's X-Men universe,",
      trailer: "https://www.youtube.com/embed/pK2zYHWDZKo?si=rKt9i_-K6BR67usp",
    },
    {
      id: Math.random(),
      title: "Black Widow",
      posterUrl:
        "https://lumiere-a.akamaihd.net/v1/images/image_b97b56f3.jpeg?region=0%2C0%2C540%2C810",
      rating: 4,
      description:
        "In Marvel Studios' action-packed spy thriller Black Widow, Natasha Romanoff aka Black Wido",
      trailer: "https://www.youtube.com/embed/RxAtuMu_ph4?si=BEX__gmEm9-gc-G3",
    },
    {
      id: Math.random(),
      title: "La Ligne verte",
      posterUrl:
        "https://fr.web.img2.acsta.net/c_310_420/medias/nmedia/18/66/15/78/19254683.jpg",
      rating: 3,
      description:
        "Paul Edgecomb, Gardien-chef du pénitencier de Cold Mountain en 1935, était chargé de veiller au bon déroulement des exécutions capitales.",
      trailer: "https://www.youtube.com/embed/Ki4haFrqSrw?si=S7C-vR4YYLnJmtiQ",
    },
    {
      id: Math.random(),
      title: "12 hommes en colère",
      posterUrl:
        "https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/18/35/24/09/18784292.jpg",
      rating: 5,
      description:
        "Lors d'un procès, un juré émet l'hypothèse que l'homme qu'il doit juger n'est peut-être pas coupable. Il va tenter de convaincre les onze autres jurés.",
      trailer: "https://www.youtube.com/embed/fyzdvalO0FY?si=3zUJ7rvMVYQuzA6t",
    },
    {
      id: Math.random(),
      title: "Les Evadés",
      posterUrl:
        "https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/18/63/30/68/18686447.jpg",
      rating: 3,
      description:
        "Condamné à perpétuité pour le meurtre de sa femme et de son amant, un banquier s'accroche à l'espoir et se lie d'amitié avec un autre détenu pour survivre en prison.",
      trailer: "https://www.youtube.com/embed/wux4Vwy3_x8?si=Xf94gpJEKdj7YtS7",
    },
  ]);

  const handleSave = () => {
    setMovieData([...movieData, newMovie]);
  };

  return (
    <>
      <NavBar
        ratingChange={ratingChange}
        setRatingChange={setRatingChange}
        setSearchInput={setSearchInput}
        newMovie={newMovie}
        setNewMovie={setNewMovie}
        handleSave={handleSave}
      />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Filter
                ratingChange={ratingChange}
                searchInput={searchInput}
                movieData={movieData}
              />
            </>
          }
        />
        <Route
          path="/movie-details/:movieId"
          element={<MovieDetails movieData={movieData} />}
        />
      </Routes>
    </>
  );
}

export default App;
