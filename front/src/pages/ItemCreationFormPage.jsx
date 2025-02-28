import { useForm } from "react-hook-form";
import { post } from "../helpers/post";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useItemContext } from "../context/ItemContext";
import { getAllData } from "../helpers/get"

const ItemCreationForm = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  // const [categories, setCategories] = useState([]);

  const { items } = useItemContext();

  const categories = [
    ...new Set(items.map((item) => item.category).toSorted()),
  ];

  // const categories = [
  //   ...new Set(items.map((item) => item.category).toSorted()),
  // ];

  // useEffect(() => {
  //   const getCategories = async () => {
  //     try {
  //       const data = await getAllData("/ads_platform/categories");
  //       setCategories(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   getCategories();
  // }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formSubmitHandler = async (data) => {
    try {
      console.log(data);
      await post(data);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <form
        className="pt-5 place-items-center "
        onSubmit={handleSubmit(formSubmitHandler)}
      >
        {/* <label>Category</label>
      <select {...register("category", { required: "Category is required." })}>
        <option value="">Select a category</option>
        {categories.map((category) => (
          <option key={category.id} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
      <p className="text-red-500">{errors.category?.message}</p> */}
        <label
          htmlFor="title"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Title
        </label>
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 max-w-[50vw] "
          placeholder="Car for sale.."
          {...register("title", {
            required: "Please enter the title",
            minLength: {
              value: 2,
              message: "Title must contain at least 3 characters.",
            },
            maxLength: {
              value: 100,
              message: "Title can contain a maximum of 100 characters.",
            },
          })}
        />
        <p className="text-red-500">{errors.title?.message}</p>
        {/* <label
          htmlFor="first_name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Category
        </label>
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 max-w-[50vw]"
          id="category"
          {...register("category", {
            required: "Category is required.",
          })}
        >
          <option label=" "></option>
          {categories.map((category) => {
            return (
              <>
                <option value={category}>{category}</option>
              </>
            );
          })}
        </select> */}
        {/* <p className="text-red-500">{errors.category?.message}</p> */}
        <label
          htmlFor="description"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Description
        </label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 max-w-[50vw]"
          type="text"
          placeholder="A very nice car for sale.."
          {...register("description", {
            required: "Please enter the description.",
          })}
        />
        <p className="text-red-500">{errors.description?.message}</p>
        <label
          htmlFor="city"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          City
        </label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 max-w-[50vw]"
          type="text"
          placeholder="Vilnius.."
          {...register("city", {
            required: "Please enter the city name.",
          })}
        />
        <p className="text-red-500">{errors.city?.message}</p>
        <label
          htmlFor="price"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Price
        </label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 max-w-[50vw]"
          type="text"
          placeholder="100.00"
          {...register("price", {
            required: "Please enter the price.",
            min: {
              value: 0.01,
              message: "Price cannot be set to a negative number or 0",
            },
            pattern: {
              value: /^[0-9]*\.[0-9][0-9]$/,
              message:
                "Price must be a number (if decimal - max 2 digits after comma).",
            },
          })}
        />
        <p className="text-red-500">{errors.price?.message}</p>
        <label
          htmlFor="category"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Category
        </label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 max-w-[50vw]"
          type="text"
          placeholder="Vehicles.."
          {...register("dates", {
            required: "Please enter the category",
          })}
        />
        <p>{errors.category?.message}</p>
        <p className="text-xs text-red-500 pt-1">*all fields are mandatory</p>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5"
        >
          Submit
        </button>
      </form>
      {error && <p>{error}</p>}
    </>
  );
};

export default ItemCreationForm;
