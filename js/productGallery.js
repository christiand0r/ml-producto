const d = document;

const changeImage = () => {
  d.addEventListener("mouseover", (e) => {
    const fullImg = document.getElementById("full-img");

    if (e.target.matches(".small-img")) {
      fullImg.src = e.target.src;
      // console.log(e.target.src);
    }
  });
};

export default changeImage;
