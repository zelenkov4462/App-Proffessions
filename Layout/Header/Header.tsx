import { HeaderProps } from "./Header.props";
import styles from "./Header.module.css";
import cn from "classnames";
import { motion } from "framer-motion";
import { Sidebar } from "../Sidebar/Sidebar";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    setIsOpened(false);
  }, [router]);

  const variants = {
    opened: {
      opacity: 1,
      x: 0,
      transition: {
        stiffness: 20,
      },
    },
    closed: {
      opacity: 0,
      x: "100%",
    },
  };

  return (
    <header className={cn(className, styles.header)} {...props}>
      <img src="/logo.svg" alt="logo" />
      <button className={styles.menu} onClick={() => setIsOpened(true)}>
        <img src="/menu.svg" alt="menu" />
      </button>
      <motion.div
        variants={variants}
        initial={"closed"}
        animate={isOpened ? "opened" : "closed"}
        className={styles.mobileMenu}
      >
        <Sidebar />
        <button className={styles.cross} onClick={() => setIsOpened(false)}>
          <img className={styles.menuClose} src="/cross.svg" alt="cross" />
        </button>
      </motion.div>
    </header>
  );
};
