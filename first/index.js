(function ($) {
  const headings = $(".js-clippy");
  const sections = $(".mast");

  $(window).on("scroll resize load", function () {
    const scrollTop = $(window).scrollTop();
    const windowHeight = $(window).height();

    headings.each(function () {
      const $this = $(this);
      const height = $this.outerHeight();
      const offset = $this.offset().top - scrollTop;

      if (offset + height < 0 || offset > windowHeight) {
        $this.css({
          "clip-path": `inset(${height}px 0 0 0)`,
          opacity: 0,
          transform: `translateY(-30px)`,
        });
      } else {
        const visible = Math.max(0, Math.min(offset + height, windowHeight));
        const ratio = visible / height;
        const clipTop = height * (1 - ratio);

        $this.css({
          "clip-path": `inset(${clipTop}px 0 0 0)`,
          opacity: ratio,
          transform: `translateY(-${(1 - ratio) * 30}px)`,
        });
      }
    });

    sections.each(function () {
      const $section = $(this);
      const sectionTop = $section.offset().top;
      const sectionHeight = $section.outerHeight();
      const visibleStart = scrollTop;
      const visibleEnd = scrollTop + windowHeight;

      const visibleRatio =
        Math.max(
          0,
          Math.min(sectionTop + sectionHeight, visibleEnd) -
            Math.max(sectionTop, visibleStart)
        ) / sectionHeight;

      $section.css(
        "--shadow-opacity",
        Math.min(visibleRatio * 1.2, 0.6).toFixed(2)
      );
    });
  });
})(jQuery);
