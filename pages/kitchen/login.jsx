import styles from "../../styles/Login.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const login = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleClick = async () => {
    try {
      await axios.post("http://localhost:3000/api/login", {
        username,
        password,
      });
      router.push("/kitchen");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Kitchen Entrance</h1>
        <input
          placeholder="username"
          type="text"
          className={styles.input}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="password"
          type="password"
          className={styles.input}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleClick} className={styles.button}>
          Enter!
        </button>
        {error && (
          <span className={styles.error}>
            Uh-oh! Wrong key to the kitchen door, try another one!
          </span>
        )}
      </div>
    </div>
  );
};

export default login;
