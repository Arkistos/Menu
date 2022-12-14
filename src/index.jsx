import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ToggleButton from "./ToggleButton";
import Menu from './Menu';

const container = document.getElementById("root");

const root = createRoot(container);

root.render(
  <StrictMode>
    <Menu direction='right'  links={[<a href='#'>section 1</a>,<a href='#'>section 2</a>]}/>
  </StrictMode>
);