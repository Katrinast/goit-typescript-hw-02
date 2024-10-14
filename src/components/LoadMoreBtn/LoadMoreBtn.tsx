import { ReactElement } from "react";
import css from "./LoadMoreBtn.module.css"

interface Props {
  onClick: () => void;
}
export default function LoadMoreBtn({ onClick } : Props): ReactElement {
  return <button className={css.btn} onClick={onClick}>Load more</button>
}