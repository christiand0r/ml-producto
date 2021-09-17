const d = document,
  favorite = d.getElementById("product-favorite");

const addFavorite = () => {
  d.addEventListener("click", (e) => {
    if (e.target === favorite) {
      favorite.classList.contains("far")
        ? favorite.classList.replace("far", "fa")
        : favorite.classList.replace("fa", "far");
    }
  });
};

export default addFavorite;
