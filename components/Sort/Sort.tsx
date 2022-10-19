import { SortEnum, SortProps } from "./Sort.props";
import styles from "./Sort.module.css";
import cn from "classnames";

export const Sort = ({
  sort,
  setSort,
  className,
  ...props
}: SortProps): JSX.Element => {
  return (
    <div className={cn(styles.sort, className)} {...props}>
      <button
        onClick={() => setSort(SortEnum.Rating)}
        className={cn({
          [styles.active]: sort == SortEnum.Rating,
        })}
      >
        <img className={styles.sortIcon} src="/sort.svg" alt="sort" />
        По рейтингу
      </button>
      <button
        onClick={() => setSort(SortEnum.Price)}
        className={cn({
          [styles.active]: sort == SortEnum.Price,
        })}
      >
        <img className={styles.sortIcon} src="/sort.svg" alt="sort" />
        По цене
      </button>
    </div>
  );
};
