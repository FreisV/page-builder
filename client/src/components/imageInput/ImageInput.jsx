import React from "react";
import styles from "./styles.module.css";
import Button from "../button/Button";

const ImageInput = ({ handleChange, desc, filename, ...otherProps }) => {
  return (
    <div className={styles.wrapper}>
      <Button>
        <label className={styles.label}>
          <input
            className={styles.input}
            type="file"
            accept="image/*"
            onChange={handleChange}
            {...otherProps}
          />
          {desc}
        </label>
      </Button>
      <span>
        {filename.length > 20 ? filename.substring(0, 20) + "..." : filename}
      </span>
    </div>
  );
};

export default ImageInput;
