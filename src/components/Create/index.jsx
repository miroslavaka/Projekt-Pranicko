import React from 'react';

const Create = () => {
  return (
    <>
      <main className="content">
        <div className="box">
          <div className="box__inside">
            <form className="configurator">
              {/* pozadí stránky	 */}
              <div className="field">
                <label className="field__label">Pozadí stránky</label>

                <div className="field__swatch-group field__swatch-group--round">
                  <div className="field__swatch">
                    <input
                      type="radio"
                      name="background"
                      id="background-red"
                      checked
                    />
                    <label
                      for="background-red"
                      class="swatch--red"
                      data-description="červená"
                    ></label>
                  </div>

                  <div className="field__swatch">
                    <input
                      type="radio"
                      name="background"
                      id="background-green"
                    />
                    <label
                      for="background-green"
                      class="swatch--green"
                      data-description="zelená"
                    ></label>
                  </div>

                  <div className="field__swatch">
                    <input
                      type="radio"
                      name="background"
                      id="background-blue"
                    />
                    <label
                      for="background-blue"
                      class="swatch--blue"
                      data-description="modrá"
                    ></label>
                  </div>

                  <div className="field__swatch">
                    <input
                      type="radio"
                      name="background"
                      id="background-gold"
                    />
                    <label
                      for="background-gold"
                      class="swatch--gold"
                      data-description="zlatá"
                    ></label>
                  </div>

                  <div className="field__swatch">
                    <input
                      type="radio"
                      name="background"
                      id="background-tree"
                    />
                    <label
                      for="background-tree"
                      class="swatch--tree"
                      data-description="stromeček"
                    ></label>
                  </div>

                  <div className="field__swatch">
                    <input
                      type="radio"
                      name="background"
                      id="background-decorations"
                    />
                    <label
                      for="background-decorations"
                      class="swatch--decorations"
                      data-description="ozdoby"
                    ></label>
                  </div>

                  <div className="field__swatch">
                    <input
                      type="radio"
                      name="background"
                      id="background-snow"
                    />
                    <label
                      for="background-snow"
                      class="swatch--snow"
                      data-description="sníh"
                    ></label>
                  </div>
                </div>
              </div>

              {/*  barva přáníčka	 */}
              <div className="field">
                <label className="field__label">Barva přáníčka</label>

                <div className="field__swatch-group field__swatch-group--round">
                  <div className="field__swatch">
                    <input type="radio" name="color" id="color-red" checked />
                    <label
                      for="color-red"
                      class="swatch--red"
                      data-description="červená"
                    ></label>
                  </div>

                  <div className="field__swatch">
                    <input type="radio" name="color" id="color-green" />
                    <label
                      for="color-green"
                      class="swatch--green"
                      data-description="zelená"
                    ></label>
                  </div>

                  <div className="field__swatch">
                    <input type="radio" name="color" id="color-blue" />
                    <label
                      for="color-blue"
                      class="swatch--blue"
                      data-description="modrá"
                    ></label>
                  </div>

                  <div className="field__swatch">
                    <input type="radio" name="color" id="color-gold" />
                    <label
                      for="color-gold"
                      class="swatch--gold"
                      data-description="zlatá"
                    ></label>
                  </div>
                </div>
              </div>

              {/* obrázek na obálce */}
              <div className="field">
                <label className="field__label">Obrázek na obálce</label>

                <div className="field__swatch-group field__swatch-group--big">
                  <div className="field__swatch">
                    <input type="radio" name="cover" id="cover-gifts" checked />
                    <label
                      for="cover-gifts"
                      class="swatch--cover-gifts"
                      data-description="dárečky"
                    ></label>
                  </div>

                  <div className="field__swatch">
                    <input type="radio" name="cover" id="cover-decorations" />
                    <label
                      for="cover-decorations"
                      class="swatch--cover-decorations"
                      data-description="ozdoby"
                    ></label>
                  </div>

                  <div className="field__swatch">
                    <input type="radio" name="cover" id="cover-snowflakes" />
                    <label
                      for="cover-snowflakes"
                      class="swatch--cover-snowflakes"
                      data-description="vločky"
                    ></label>
                  </div>

                  <div className="field__swatch">
                    <input type="radio" name="cover" id="cover-trees" />
                    <label
                      for="cover-trees"
                      class="swatch--cover-trees"
                      data-description="stromečky"
                    ></label>
                  </div>
                </div>
              </div>

              {/* intenzita sněžení na pozadí */}
              <div class="field">
                <label className="field__label ">Sníh na pozadí</label>

                <div className="field__radio-group">
                  <div className="field__radio">
                    <input type="radio" name="snow" id="snow-0" checked />
                    <label for="snow-0">bez sněhu</label>
                  </div>

                  <div className="field__radio">
                    <input type="radio" name="snow" id="snow-1" />
                    <label for="snow-1">málo</label>
                  </div>

                  <div className="field__radio">
                    <input type="radio" name="snow" id="snow-2" />
                    <label for="snow-2">hodně</label>
                  </div>
                </div>
              </div>

              {/* hudba	 */}
              <div class="field">
                <label className="field__label">Hudba</label>

                <div class="field__radio-group">
                  <div className="field__radio">
                    <input
                      type="radio"
                      name="music"
                      id="music-jingle-bells"
                      checked
                    />
                    <label for="music-jingle-bells">Rolničky, roličky</label>
                  </div>

                  <div className="field__radio">
                    <input type="radio" name="music" id="music-silent-night" />
                    <label for="music-silent-night">Tichá noc</label>
                  </div>

                  <div className="field__radio">
                    <input type="radio" name="music" id="music-god-rest" />
                    <label for="music-god-rest">Pokoj Vám</label>
                  </div>
                </div>
              </div>

              {/*  text */}
              <div class="field">
                <label className="field__label" for="text">
                  Text uvnitř přáníčka
                </label>
                <textarea
                  className="field__input"
                  name="text"
                  id="text"
                  rows="3"
                  maxlength="100"
                  autocomplete="off"
                ></textarea>
                <p className="field__description">
                  Zbývá <strong>37</strong>/100 znaků.
                </p>
              </div>

              {/* odesílatel */}
              <div class="field">
                <label className="field__label" for="sender">
                  Odesílatel (podpis)
                </label>
                <input
                  className="field__input"
                  type="text"
                  name="sender"
                  id="sender"
                  rows="3"
                  maxlength="20"
                  autocomplete="off"
                />
              </div>

              {/* tlačítko pro odeslání */}
              <button type="submit" className="button button--big mt-30">
                Uložit přáníčko
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Create;
