import { useState, useEffect } from "react";
import { secrets } from "../config/secrets.js";

function CardList() {
  const [images, setImages] = useState([]);

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

        // Shuffle the array.
        shuffle(imageList);

        // Update state with shuffled list.
        setImages(imageList);
      } catch (err) {
        console.error(err);
      }
    }

    fetchImages();
  }, []);

  return (
    <>
      {images.map((img) => {
        return (
          <div key={img.name}>
            <img src={img.url} alt={img.name} />
          </div>
        );
      })}
    </>
  );
}

// Using the Fisher-Yates Shuffle.
function shuffle(arr) {
  let currentIndex = arr.length;

  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [arr[currentIndex], arr[randomIndex]] = [
      arr[randomIndex],
      arr[currentIndex],
    ];
  }
}

export default CardList;
