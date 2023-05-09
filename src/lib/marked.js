import { marked } from "marked";
import { markedHighlight } from "marked-highlight";
import Prism from "prismjs";

marked.use(
  markedHighlight({
    langPrefix: "language-",
    highlight: (code, lang) => {
      return Prism.highlight(code, Prism.languages[lang], lang);
    },
  })
);

export { marked };
