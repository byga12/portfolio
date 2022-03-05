import { useEffect } from "react";

//este hook recibe un array de referencias a elementos html y les aplica un observer. En la primera intersección de c/u
//de esos elementos se estila de acuerdo al parámetro finalStyle
export default function useObserver(refs, finalStyle) {
  useEffect(() => {
    const callbackFunction = (entries, observer, element) => {
      const entry = entries[0];
      // console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add(finalStyle);
        observer.unobserve(element);
      }
      //para que el efecto se pueda hacer más de una vez
      // else {
      //   entry.target.classList.remove(s.fadeIn);
      // }
    };
    refs.forEach((element) => {
      const observer = new IntersectionObserver(
        (entry) => callbackFunction(entry, observer, element),
        { root: null, rootMargin: "0px 100px", threshold: 1.0 }
      );
      if (element) observer.observe(element);
      // return () => {
      //   if(refs.current) observer.unobserve(refs.current)
      // }
    });
  }, [refs, finalStyle]);
}
