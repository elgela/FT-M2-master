// Configuramos test
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";
import { shallow, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import styles from "../src/components/Bienvenido/Bienvenido.module.css";
// Importamos variables/componentes
import Bienvenido from "../src/components/Bienvenido/Bienvenido.jsx";
import Botones, {
  DivButtons,
  Buttons,
} from "../src/components/Botones/Botones.jsx";

configure({ adapter: new Adapter() });

describe("01 | Componente 'Bienvenido'", () => {
  const wrapperBienvenido = shallow(<Bienvenido />);

  it("Renderiza el componente", () => {
    expect(wrapperBienvenido).toBeTruthy();
  });

  it("La etiqueta div debe contener una clase llamada 'divBienvenido'", () => {
    const divBienvenido = wrapperBienvenido.find("div");
    expect(divBienvenido.hasClass(styles.divBienvenido)).toBe(true);
  });

  it("La etiqueta h1 debe contener una clase llamada 'title'", () => {
    const h1 = wrapperBienvenido.find("h1");
    expect(h1.hasClass(styles.title)).toBe(true);
  });

  it("La etiqueta h3 debe contener una clase llamada 'subtitle'", () => {
    const h3 = wrapperBienvenido.find("h3");
    expect(h3.hasClass(styles.subtitle)).toBe(true);
  });

  it("La etiqueta ul debe contener una clase llamada 'unorderedList'", () => {
    const ul = wrapperBienvenido.find("ul");
    expect(ul.hasClass(styles.unorderedList)).toBe(true);
  });

  it("Las etiquetas li debe contener una clase llamada 'listItem'", () => {
    const ul = wrapperBienvenido.find("ul");
    const li = ul.find("li");
    expect(li.at(0).props().className).toBe("listItem");
    expect(li.at(1).props().className).toBe("listItem");
    expect(li.at(2).props().className).toBe("listItem");
    expect(li.at(3).props().className).toBe("listItem");
    expect(li.at(4).props().className).toBe("listItem");
  });
});
