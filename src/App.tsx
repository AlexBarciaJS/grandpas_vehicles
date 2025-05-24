import Card from "./components/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import sturmgeschuetzImg from "./assets/img/sturmgeschuetz-iii-ausf-a-1-grau.webp";
import { sturmgeschuetzDescription } from "./constants";

const App: React.FC = () => {
  return (
    <>
      <Card image={sturmgeschuetzImg} description={sturmgeschuetzDescription} />
    </>
  );
};

export default App;
