import("mathjax/es5/tex-chtml.js").then(() => {
  window.MathJax = {
    tex: {
      inlineMath: [['$', '$'], ['\\(', '\\)']]
    }
  };
});

// Renderiza as equações ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  mathjax.document(document, {
    InputJax: new mathjax.input.TeX(),
    OutputJax: new mathjax.output.CommonHTML()
  }).render();
});
