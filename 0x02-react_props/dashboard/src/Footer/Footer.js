import { getFooterCopy, getFullYear } from "../utils";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="App-footer">
      <p>
        Copyright {getFullYear()} - {getFooterCopy()}
      </p>
    </div>
  );
};
