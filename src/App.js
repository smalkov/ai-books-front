import { useState } from "react";
import "./App.css";

const Books = () => {
  const [ids, setIds] = useState(null);
  const getUser = async () => {
    try {
      const tg_user = window.Telegram?.WebApp?.initDataUnsafe?.user;
      console.log("initDataUnsafe", window.Telegram?.WebApp?.initDataUnsafe);
      console.log("tg_user", tg_user);

      const res = await fetch(`https://humble-yodel-9j6xj4jpjv9cpwj5-8000.app.github.dev/api/profile/${tg_user?.id}`);
      console.log("res", res);

      const data = await res.json();
      if (tg_user?.id) {
        setIds(tg_user?.id);
      }
    } catch (e) {
      console.error("We catch error: ", e);
    }
  };

  getUser();
  return <div>Books3 {ids};</div>;
};

function App() {
  return (
    <div className="App">
      <Books />
    </div>
  );
}

export default App;
