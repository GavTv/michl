document.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;

  const num = scrollTop / 500;
  const num2 = scrollTop * 0.0004 + 1;
  const num3 = scrollTop * 0.2 + 1;

  const shade = document.querySelector(".shade");
  const bg = document.querySelector(".bg");
  const text = document.querySelector(".text");

  if (shade) shade.style.opacity = num;
  if (bg) bg.style.transform = `scale(${num2})`;
  if (text) text.style.marginTop = `-${num3}px`;
  
});

