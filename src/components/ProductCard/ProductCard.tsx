// components/ProductCard.tsx
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./ProductCard.module.scss";
import Link from "next/link";

interface ProductCardProps {
  image: StaticImageData;
  name: string;
  price: number;
  description: string;
  colors: string[];
}

export const ProductCard: React.FC<ProductCardProps> = ({
  image,
  name,
  price,
  description,
  colors,
}) => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const handleColorClick = (color: string) => {
    setSelectedColor(color === selectedColor ? null : color);
  };
  return (
    <div className={styles["product-card"]}>
      <div className={styles["product-image-wrapper"]}>
        <Image
          src={image}
          alt={name}
          className={styles["product-image"]}
          layout="responsive"
          width={258}
          height={258}
        />
      </div>
      <div className={styles["product-info"]}>
        <p className={styles["product-price"]}>${price.toFixed(2)}</p>
        <h2 className={styles["product-name"]}>{name}</h2>
        <p className={styles["product-description"]}>{description}</p>
        <div className={styles["color-selector"]}>
          <p className={styles["color-selector__description"]}>
            Choose your color
          </p>
          <div className={styles["color-selector__items"]}>
            {colors.map((color, index) => (
              <div
                key={index}
                className={`${styles["color-option"]} ${
                  selectedColor === color ? styles["selected"] : ""
                }`}
                style={{ backgroundColor: color }}
                onClick={() => handleColorClick(color)}
              />
            ))}
          </div>
        </div>
        <div className={styles["button-container"]}>
          <button className={styles["add-to-cart-button"]}>Add to Cart</button>
          <button className={styles["buy-now-button"]}>Buy Now</button>
        </div>
        <Link href="/" className={styles["reviews-link"]}>
          Read reviews
        </Link>
      </div>
    </div>
  );
};
