import { useState } from "react";

import { Input } from "./Input";
import { Checkbox } from "./Checkbox";
import { Select } from "./Select";
import { Button } from "./Button";

export const Onboarding = () => {
  const [checkPrivacity, setCheckPrivacity] = useState(false);
  const [checkComunication, setCheckComunication] = useState(false);

  return (
    <section className="onboarding">
      <div className="onboarding__image">
        <img src="/family.png" alt="Familia" className="onboarding_image img" />
      </div>
      <div className="onboarding__info info">
        <div className="info__group group">
          <div className="group__title">
            <span className="group__title--tag">Seguro Salud Flexible</span>
            <h1 className="group__title--text">Creado para ti y tu familia</h1>
          </div>

          <div className="group__image">
            <img src="/family.png" alt="Familia" />
          </div>
        </div>

        <div className="info__separator" />

        <p className="info__p">
          Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
          asesoría. 100% online.
        </p>
        <div className="info__controls">
          <div className="info__controls--group">
            <Select hideBorderRadius={["tr", "br"]} />
            <Input
              label="Nro. de documento"
              name="nro_document"
              hideBorderRadius={["tl", "bl"]}
              hideBorder="left"
            />
          </div>
          <Input label="Celular" name="phone" />
        </div>

        <div className="info__terms">
          <Checkbox
            label="Acepto la Política de Privacidad"
            checked={checkPrivacity}
            setChecked={setCheckPrivacity}
          />
          <Checkbox
            label="Acepto la Política Comunicaciones Comerciales"
            checked={checkComunication}
            setChecked={setCheckComunication}
          />

          <a
            href="https://assets.contentstack.io/v3/assets/bltc73a8adddb2104d0/blt446954286ce4e6ec/61bb4b60aac9397f423166be/TERMINOS-Y-CONDICIONES.pdf"
            className="info__terms--a"
            target="_blank"
          >
            Aplican Términos y Condiciones.
          </a>
        </div>

        <Button title="Cotiza aquí" onClick={() => null} />
      </div>
    </section>
  );
};
