import { bool } from "prop-types";
import { ScaleLoader } from "react-spinners";

export default function Loading({ loading }) {
  return (
    <div className="bg-neutral-900 flex items-center justify-center min-h-screen">
      <ScaleLoader
        loading={loading}
        barCount={8}
        color="#ffffff"
        height={22}
        width={6}
      />
    </div>
  );
}

Loading.propTypes = {
  loading: bool.isRequired,
};
