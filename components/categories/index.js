import React from "react";
import Link from "next/link";
import style from "./styles.module.css";

const Categories = ({ categories }) => {
  return (
    <div className={style.categories}>
      {categories.map((category) => (
        <Link
          key={category.id}
          className={style.category}
          href={`{/${category.id}}`}
        >
          <div className={style.name}>{category.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
