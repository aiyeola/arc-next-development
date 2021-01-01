import FontFaceObserver from 'fontfaceobserver';

import 'fontsource-pacifico';
import 'fontsource-raleway';
import 'fontsource-roboto';

export default function Fonts() {
  const roboto = new FontFaceObserver('Roboto');

  roboto.load().then(() => {
    document.documentElement.classList.add('roboto');
  });

  const pacifico = new FontFaceObserver('Pacifico');

  pacifico.load().then(() => {
    document.documentElement.classList.add('Pacifico');
  });

  const raleway = new FontFaceObserver('Raleway');

  raleway.load().then(() => {
    document.documentElement.classList.add('Raleway');
  });
}
