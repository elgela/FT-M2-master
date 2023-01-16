// Configuramos test
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import isReact from "is-react";
import { shallow, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
// Importamos variables/componentes
import Bienvenido, { alerts } from "../src/components/Bienvenido.jsx";
import Botones from "../src/components/Botones.jsx";

configure({ adapter: new Adapter() });

describe("02 | Componente 'Botones'", () => {
  const wrapperBotones = shallow(<Botones />);

  it("Renderiza el componente", () => {
    expect(wrapperBotones).toBeTruthy();
  });

  it("Debe utilizarse styled-components para el div, llamándose 'DivButtons' y además, debe renderizarse dentro del componente como tal", () => {
    expect(wrapperBotones.containsMatchingElement(DivButtons)).toBe(true);
  });

  it("'DivButtons' debe tener al menos estas propiedades CSS: 'display: flex, 'flex-direction: row', 'justify-content: space-around', 'align-items: center' ", () => {
    let newArray = [];
    DivButtons.componentStyle.rules.forEach((rule) => {
      rule.split(";").forEach((item) => {
        newArray.push(item.trim());
      });
    });
    const array = newArray.filter((item) => item !== "");
    expect(array).toContain("display: flex");
    expect(array).toContain("flex-direction: row");
    expect(array).toContain("justify-content: space-around");
    expect(array).toContain("align-items: center");
  });

  it("Debe utilizarse styled-components para los botones, llamándose 'Buttons' y además, debe renderizarse dentro del componente como tal", () => {
    expect(wrapperBotones.containsMatchingElement(Buttons)).toBe(true);
  });

  it("'Buttons' debe tener al menos estas propiedades CSS: 'border-radius: 5px', 'margin: 10px', 'padding: 5px'", () => {
    let newArray = [];
    Buttons.componentStyle.rules.forEach((rule) => {
      rule.split(";").forEach((item) => {
        newArray.push(item.trim());
      });
    });
    const array = newArray.filter((item) => item !== "");
    expect(array).toContain("border-radius: 5px");
    expect(array).toContain("margin: 10px");
    expect(array).toContain("padding: 5px");
  });
});
