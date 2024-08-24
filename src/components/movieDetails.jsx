import { useSelector } from "react-redux";

export default function MovieDetails() {
  const select = useSelector((state) => state);
  return (
    <div>
      <h3 className="text-3xl mt-20 mb-14">Movie</h3>

      { select.id > 0 ? <div className="flex flex-col items-start text-lg">
        <p>name: {select.name}</p>
        <p>Date: {select.date}</p>
        <p>reting: {select.rating}</p>
      </div> : <h2 className="text-xl">Select Movie</h2>}
    </div>
  );
}
