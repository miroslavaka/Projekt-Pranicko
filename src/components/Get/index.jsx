import React from 'react';

const Get = () => {
  return (
    <>
      <form className="pickup" autocomplete="off">
        <label for="pickup-code" class="pickup__label">
          Zadej šestimístný kód přáníčka
        </label>

        <div className="box shadow mb-30">
          <div className="box__inside pt-0 pb-0">
            <input
              id="pickup-code"
              class="pickup__code"
              type="text"
              maxlength="6"
              autocomplete="off"
            />
          </div>
        </div>

        <button className="button button--big">Vyzvednout přáníčko</button>
      </form>
    </>
  );
};

export default Get;
