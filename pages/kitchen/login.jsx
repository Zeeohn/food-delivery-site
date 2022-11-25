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
      await axios.post("https://crownshawarma.vercel.app/api/login", {
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
        <form onSubmit={handleClick}>
        <input
          placeholder="username"
          type="text"
          className={styles.input}
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="password"
          type="password"
          required
          className={styles.input}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Enter!" className={styles.button} />
        {error && (
          <span className={styles.error}>
            Uh-oh! Wrong key to the kitchen door, try another one!
          </span>
        )}
        </form>
      </div>
    </div>
  );
};

export default login;
