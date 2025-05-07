// document.addEventListener("DOMContentLoaded", () => {
//   const video = document.querySelector(".autoplay-video");

//   // Пытаемся запустить видео (на случай если autoplay не сработал)
//   const playVideo = () => {
//     video.play().catch((e) => {
//       console.log("Автовоспроизведение заблокировано:", e);
//       // Можно показать кнопку для ручного запуска, если нужно
//     });
//   };

//   // Первая попытка
//   playVideo();

//   // Повторная попытка при клике (если autoplay заблокирован)
//   document.body.addEventListener("click", playVideo);
// });
