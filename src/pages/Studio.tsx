import { Studio } from "sanity";
import config from "../../sanity.config";

const StudioPage = () => {
  return (
    <div style={{ height: "100vh", maxHeight: "100dvh", width: "100%" }}>
      <Studio config={config} />
    </div>
  );
};

export default StudioPage;
