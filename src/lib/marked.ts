import { marked } from "marked";
import Prism from "prismjs";

marked.setOptions({
  langPrefix: "language-",
  highlight: (code, lang) => {
    return Prism.highlight(code, Prism.languages[lang], lang);
  },
});

export { marked };
