// mathjax.js
import { MathJax } from "mathjax/es5/tex-chtml.js";

// Configuração do MathJax
window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
  },
};

// Iniciar o MathJax quando o DOM estiver carregado
document.addEventListener("DOMContentLoaded", () => {
  MathJax.typeset();
});