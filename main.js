const links = document.querySelectorAll("header .links a");

links.forEach((link) => {
  link.addEventListener("mouseover", function (e) {
    e.preventDefault();
    links.forEach((li) => {
      if (li.classList.contains("active")) {
        li.classList.remove("active");
      }
    });
    if (!link.classList.contains("active")) {
      link.classList.add("active");
    }
  });
});

const navBtn = document.querySelector("article .nav button");
const headerParagraph = document.querySelectorAll("header p");
const body = document.querySelector("body");
const header = document.querySelector("header");
let counter = 0;
let width = innerWidth;
console.log(width);
console.log(navBtn);
navBtn.addEventListener("click", function () {
  if (width >= 1040) {
    if (counter === 0) {
      headerParagraph.forEach((p) => {
        p.style.display = "none";
      });
      body.style.gridTemplateColumns = "80px 100fr";
      header.style.width = "80px";
      counter++;
    } else {
      headerParagraph.forEach((p) => {
        p.style.display = "block";
      });
      header.style.width = "280px";
      body.style.gridTemplateColumns = "280px 100fr";
      counter--;
    }
  } else {
    if (counter === 0) {
      headerParagraph.forEach((p) => {
        p.style.display = "block";
      });
      header.style.width = "100%";
      body.style.gridTemplateColumns = "260px 1fr";
      body.style.overflow = "hidden";
      headerI.forEach((i) => {
        i.style.display = "block";
      });
      counter++;
    } else {
      body.style.overflow = "";
      headerResizeLess();
      counter--;
    }
  }
});

const headerI = header.querySelectorAll("i");
let headerResizeLess = () => {
  headerParagraph.forEach((p) => {
    p.style.display = "none";
  });
  body.style.gridTemplateColumns = "0px 100fr";
  header.style.width = "00px";
  headerI.forEach((i) => {
    i.style.display = "none";
  });
};

let headerResizeMore = () => {
  headerParagraph.forEach((p) => {
    p.style.display = "block";
  });
  header.style.width = "280px";
  body.style.gridTemplateColumns = "280px 100fr";
  headerI.forEach((i) => {
    i.style.display = "block";
  });
};

if (width <= 1040) {
  headerResizeLess();
} else {
  headerResizeMore();
}

window.addEventListener("resize", function () {
  width = this.innerWidth;
  if (width <= 1040) {
    headerResizeLess();
  } else {
    headerResizeMore();
  }
});


