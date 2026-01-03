import en from "../data/blog/en.json";
import zh from "../data/blog/zh.json";
import fr from "../data/blog/fr.json";
import de from "../data/blog/de.json";
import it from "../data/blog/it.json";
import pt from "../data/blog/pt.json";
import es from "../data/blog/es.json";
import ar from "../data/blog/ar.json";
import ru from "../data/blog/ru.json";
import ro from "../data/blog/ro.json";
import sq from "../data/blog/sq.json";
import el from "../data/blog/el.json";
import bg from "../data/blog/bg.json";
import mk from "../data/blog/mk.json";
import sr from "../data/blog/sr.json";
import hr from "../data/blog/hr.json";
import bs from "../data/blog/bs.json";

const BLOGS = {
  en,
  zh,
  fr,
  de,
  it,
  pt,
  es,
  ar,
  ru,
  ro,
  sq,
  el,
  bg,
  mk,
  sr,
  hr,
  bs
};

export function getBlogs(lang = "en") {
  return BLOGS[lang] || BLOGS.en;
}
