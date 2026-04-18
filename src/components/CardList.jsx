import { useState, useEffect } from "react";
import { secrets } from "../config/secrets.js";

function CardList() {
  const [images, setImages] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    async function fetchImages() {
      try {
        // Images are in a supabase bucket, which requires POST for the "list" endpoint.
        const response = await fetch(
          `${secrets.SB_URL}/storage/v1/object/list/${secrets.SB_BUCKET_NAME}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              apikey: secrets.SB_API_KEY,
            },
            body: JSON.stringify({
              prefix: "",
              limit: 100,
              offset: 0,
              sortBy: { column: "name", order: "asc" },
            }),
          },
        );

        if (!response.ok) {
          const errorBody = await response.json();
          throw new Error(`${response.status}: ${errorBody.message}`);
        }

        const files = await response.json();

        const imageList = files.map((file) => ({
          name: file.name.slice(0, -5), // Removes ".webp"
          url: `${secrets.SB_URL}/storage/v1/object/public/${secrets.SB_BUCKET_NAME}/${file.name}`,
        }));

        setImages(imageList);
      } catch (err) {
        console.error(err);
      }
    }

    fetchImages();
  }, []);

  // Shuffle the array every time the score changes.
  useEffect(() => {
    const shuffledImages = shuffle(images);
    setImages(shuffledImages);
  }, [score]);

  return (
    <>
      {images.map((img) => {
        return (
          <div key={img.name}>
            <img src={img.url} alt={img.name} width={"100px"} />
          </div>
        );
      })}
    </>
  );
}

// Uses the Fisher-Yates shuffle algorithm.
function shuffle(arr) {
  const shuffledArr = [...arr];
  let currentIndex = shuffledArr.length;

  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [shuffledArr[currentIndex], shuffledArr[randomIndex]] = [
      shuffledArr[randomIndex],
      shuffledArr[currentIndex],
    ];
  }
  return shuffledArr;
}

export default CardList;
