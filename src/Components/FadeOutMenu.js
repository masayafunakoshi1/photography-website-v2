import React, { useState } from "react";

const FadeOutMenu = (props) => {
  const [menuScroll, setMenuScroll] = useState(0);
  const domRef = React.useRef();

  ////////////////Attempts to use Intersection Observer/////////////

  // useEffect(() => {
  //     const observer = new IntersectionObserver(entries => {
  //         entries.forEach(entry => setMenuScroll(entry.isIntersecting))
  //         console.log(entries)
  //     });
  //     observer.observe(domRef.current)
  // }, []);

  // const io_options = {
  // root: document.body,
  // rootMargin: '0px 0px -100% 0px',
  // threshold: 0
  // };
  // const io_observer = new IntersectionObserver(io_callback, io_options);

  // domRef.forEach(element => {
  // io_observer.observe(element);
  // });

  // function io_callback (entries, observer) {
  // entries.forEach(entry => {
  //     entry.target.classList.toggle(entry.isIntersecting);
  // });
  // }

  ////////Scroll Listener////////////

  return (
    <div className={`menu ${menuScroll ? "active" : ""}`} ref={domRef}>
      {props.children}
    </div>
  );
};

export default FadeOutMenu;
