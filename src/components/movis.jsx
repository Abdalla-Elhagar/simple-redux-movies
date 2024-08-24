import { useDispatch } from "react-redux";

const moviesData = [
  {
    id: 1,
    name: "Spider Man",
    date: "2022",
    rating: 7.5,
  },
  {
    id: 2,
    name: "bat Man",
    date: "2020",
    rating: 8.5,
  },
  {
    id: 3,
    name: "Super Man",
    date: "2021",
    rating: 8,
  },
];

export default function Movies() {
    const setAction = useDispatch()
function handleClick(id) {
    const newArr=moviesData.filter((e)=> e.id === id)
    setAction({type:"UPDATE_DETAILS" , element:newArr[0]})
}


  return (
    <div className="w-[50%] mt-20">
      <h3 className="text-3xl mb-14">Movie List</h3>

      {moviesData.map((ele) => (
        <div key={ele.id} className="movie flex justify-between w-full">
          <div className="name">{ele.name}</div>
          <button onClick={()=>handleClick(ele.id)}>Details</button>
        </div>
      ))}
    </div>
  );
}
