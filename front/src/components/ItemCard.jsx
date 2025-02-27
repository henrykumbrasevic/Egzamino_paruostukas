import Button from "./Button";
import { Link } from "react-router";
import { useAuth } from "../context/AuthContext";
import { firstLetterCapitalizer } from "../helpers/firstLetterCapitalizer";
import { deleteItemById } from "../helpers/delete"

function Card({ item }) {


  const { user } = useAuth();


  const deleteItemHandler = () => {
    try {
      deleteItemById(entry.id);
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <>
      <div
        key={item.id}
        className="m-3 p-2 rounded flex flex-col justify-center items-center bg-[#DEB887] shadow-2xs "
      >
        <img
          src={item.image}
          alt="destination picture"
          className="w-100 h-50 rounded object-cover m-2 shadow-sm"
        />
        <p className="font-bold">Destination: {item.name}</p>
        <p>Price: {`€${item.price}`}</p>
        <p className="italic">
          Category: {firstLetterCapitalizer(item.category)}
        </p>
        {item.rating === 0 ? (
          <p>The trip has no ratings yet.</p>
        ) : (
          <p>Rating: {item.rating}</p>
        )}

        {item.available ? (
          <Link to={`/items/${item.id}`}>
            <Button buttonType={"registration"}>See available dates</Button>
          </Link>
        ) : (
          <p className="italic">Currently no dates</p>
        )}
        {user
          ? user.roles?.includes("ROLE_ADMIN") && (
              <div className="flex">
                  <Button buttonType={"registration"}>Edit</Button>
                  <Button buttonType={"registration"} onClick={deleteItemHandler}>Delete</Button>
              </div>
            )
          : ""}
      </div>
    </>
  );
}

export default Card;