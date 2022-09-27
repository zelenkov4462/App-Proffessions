import Head from "next/head";
import Image from "next/image";
import { Button, Htag, P, Rating, Tag } from "../components";
import { useEffect, useState } from "react";
import { func } from "prop-types";
import Star from "../public/star.svg";
import { withLayout } from "../Layout/Layout";
import { GetStaticProps } from "next";
import axios from "axios";
import { MenuItem } from "../interfaces/menu.interface";

function Home({ menu }: HomeProps): JSX.Element {
  const [counter, setCounter] = useState<number>(4);

  useEffect(() => {
    console.log("mounted ");
  }, []);

  return (
    <>
      <Htag tag="h1">{counter}</Htag>
      <Button
        onClick={() => setCounter((prev) => prev + 1)}
        appearance="primary"
        arrow="right"
      >
        Кнопка
      </Button>
      <Button appearance="ghost" arrow="down">
        Кнопка
      </Button>
      <P size="l">Большой</P>
      <P size="m">Средний</P>
      <P size="s">Малый</P>
      <Tag size="s">Ghost</Tag>
      <Tag color="red" size="m">
        Red
      </Tag>
      <Tag color="green" size="s">
        Green
      </Tag>
      <Tag color="primary">Primary</Tag>
      <Rating rating={counter} isEditable={true} setRating={setCounter} />
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    { firstCategory }
  );
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
