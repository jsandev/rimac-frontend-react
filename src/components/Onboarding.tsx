import { useState } from "react";

import { Input } from "./Input";
import { Checkbox } from "./Checkbox";
import { Select } from "./Select";
import { Button } from "./Button";

import { useDispatch } from "../store";
import { navigationActions } from "../store/navigation";
import { IUser } from "../lib/types";

export const Onboarding = () => {
  const dispatch = useDispatch();

  const [nroDocument, setNroDocument] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [checkPrivacity, setCheckPrivacity] = useState(false);
  const [checkComunication, setCheckComunication] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (nroDocument.length < 8) {
      alert("Ingrese correctamente el número de documento");
      return;
    }

    if (phone.length < 9) {
      alert("Ingrese correctamente el número de celular");
      return;
    }

    if (!checkPrivacity) {
      alert("Acepte la Política de Privacidad");
      return;
    }

    if (!checkComunication) {
      alert("Acepte la Política Comunicaciones Comerciales");
      return;
    }

    try {
      setIsLoading(true);
      const url = "https://rimac-front-end-challenge.netlify.app/api/user.json";
      const res = await fetch(url);
      const data = await res.json();

      const yearUser = new Date(data.birthDay).getFullYear();
      const yearNow = new Date().getFullYear();
      const age = yearNow - yearUser;
      const user: IUser = {
        ...data,
        age,
        nroDocument: nroDocument,
        phone,
      };

      dispatch(navigationActions.setUser(user));

      dispatch(navigationActions.nextStep());
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="onboarding">
      <div className="onboarding__image">
        <img src="/family.png" alt="Familia" className="onboarding_image img" />
      </div>
      <form className="onboarding__info info" onSubmit={handleSubmit}>
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
              type="number"
              label="Nro. de documento"
              name="nro_document"
              hideBorderRadius={["tl", "bl"]}
              hideBorder="left"
              value={nroDocument}
              onChange={(v) => v.length <= 8 && setNroDocument(v)}
              required
              maxLength={8}
            />
          </div>
          <Input
            type="number"
            label="Celular"
            name="phone"
            value={phone}
            onChange={(v) => v.length <= 9 && setPhone(v)}
            required
            maxLength={9}
          />
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

        <Button title="Cotiza aquí" isLoading={isLoading} />
      </form>
    </section>
  );
};
