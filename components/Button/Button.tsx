import styles from "./Button.module.css";
import { ButtonProps } from "./Button.props";
import cn from "classnames";
import { motion, useMotionValue } from "framer-motion";

export const Button = ({
  children,
  appearance,
  arrow = "none",
  className,
  ...props
}: ButtonProps): JSX.Element => {
  const scale = useMotionValue(1);
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      className={cn(styles.button, className, {
        [styles.primary]: appearance == "primary",
        [styles.ghost]: appearance == "ghost",
      })}
      style={{ scale }}
      {...props}
    >
      {children}
      {arrow != "none" && (
        <span
          className={cn(styles.arrow, {
            [styles.down]: arrow == "down",
          })}
        >
          <img src="/arrow.svg" alt="arr" />
        </span>
      )}
    </motion.button>
  );
};
