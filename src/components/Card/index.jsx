import React, { useState } from 'react';
import Snowfall from 'react-snowfall';
import { useAudio } from '../../hooks/useAudio';

const Card = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, play, pause] = useAudio('assets/audio/jingle-bells.mp3');

  const openCard = () => {
    console.log('card was clicked');
    setIsOpen(!isOpen);
  };

  const handlePlayClick = () => {
    play();
  };

  const handlePauseClick = () => {
    pause();
  };

  return (
    /* Tenhle div představuje pozadí celé stránky za přáníčkem.
			Můžeš na něj přidat jednu z následujících tříd pro varianty pozadí:
			.background--red, .background--green, .background--blue, .background--gold
			.background--tree, .background--decorations, .background--snow
			Takže třeba zlaté pozadí bude: <div class="background background--gold"> */

    <div className="background">
      <div className="buttons">
        <button className="button1" onClick={handlePlayClick}>
          Spustit hudbu
        </button>
        <button className="button2" onClick={handlePauseClick}>
          Zastavit hudbu
        </button>
      </div>

      <div className="snow">
        <Snowfall snowflakeCount={200} />
        {/* Pokud chceš, tak sem vložíš sníh, který bude padat na pozadí.
					Nainstaluj si do projektu tuhle knihovnu: https://www.npmjs.com/package/react-snowfall
					A pak vlož a nastav komponentu podle dokumentace.
					Pravděpodobně to bude vypadat nějak takhle: <Snowfall snowflakeCount={200} /> */}
      </div>

      {/*Na tenhle div půjde kliknout, což by mělo otevřít/zavřít přáníčko.
				Stačí na něj po kliknutí přidat třídu .card--open a přáníčko se otevře. Když ji odebereš, tak se zase zavře.
        Přidáním jedné z následujících tříd nastavíš barvu pozadí obálky a také levé strany uvnitř přáníčka. .card--red, .card--green, .card--blue, .card--gold
        Třeba otevřená modrá kartička bude: <div class="card card--blue card--open"> */}
      <div
        className="card"
        onClick={openCard}
        className={isOpen ? 'card card--open' : 'card'}
      >
        {/* Vnější obálka. Nastav do src obrázku správné SVG tvojí vybrané obálky. */}
        <div className="cover">
          <img className="cover__image" src="./assets/covers/gifts.svg" />
        </div>

        {/* Levá vnitřní strana. Sem doplníš text přáníčka a podpis. */}
        <div className="inside-left">
          <div className="inside-left__content">
            <div className="inside-left__text">Šťastné a veselé Vánoce!</div>
            <div className="inside-left__sender">Mirka</div>
          </div>
          <img
            className="inside-left__logo"
            src="./assets/czechitas.svg"
            alt="Czechitas"
          />
        </div>

        {/* Pravá vnitřní strana. Fotky jsou v projektu zadané napevno. Klidně si je vyměň za svoje, ale zachovej jejich velikost a poměr stran. CSS není na jinou variantu
					připravené a přání by mohlo vypadat divně. */}
        <div className="inside-right">
          <div className="photo photo1">
            <img src="./assets/photos/photo1.jpg" />
          </div>
          <div className="photo photo2">
            <img src="./assets/photos/photo2.jpg" />
          </div>
          <div className="photo photo3">
            <img src="./assets/photos/photo3.jpg" />
          </div>
          <div className="photo photo4">
            <img src="./assets/photos/photo4.jpg" />
          </div>
        </div>
      </div>
      <p className="instructions">Kliknutím mě otevři</p>
    </div>
  );
};

export default Card;
