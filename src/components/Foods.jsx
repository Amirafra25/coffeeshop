import { useEffect, useState } from "react";
import Pagination from "./common/Pagination";
import { getFoods } from "../services/fakeFoods";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/ListGroup";
import { getCategories } from "../services/fakeCategories";
import FoodsTable from "./FoodsTable";
import { Link } from "react-router-dom";

const Foods = () => {
  const [foods, setFoods] = useState([]);
  const [pageSize, setPageSize] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();

  useEffect(() => {
    setFoods(getFoods);

    const allCategories = [{ name: "hame daste bandi ha" }, ...getCategories()];
    setCategories(allCategories);
  }, []);

  const handleDelete = (food) => {
    const newFoods = foods.filter((f) => f._id !== food._id);
    setFoods(newFoods);
  };

  const handleLike = (food) => {
    const newFoods = [...foods];
    const index = newFoods.indexOf(food);
    newFoods[index] = { ...newFoods[index] };
    newFoods[index].liked = !newFoods[index].liked;
    setFoods(newFoods);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleItemSelect = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  if (foods.length === 0) {
    return (
      <>
        <h2>There is no foods in Database!</h2>
      </>
    );
  }

  const filtered =
    selectedCategory && selectedCategory._id
      ? foods.filter((f) => f.category._id === selectedCategory._id)
      : foods;

  const pageFoods = paginate(filtered, currentPage, pageSize);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={categories}
            selectedCategory={selectedCategory}
            onItemSelect={handleItemSelect}
          />
        </div>
        <div className="col-9">
          <h2>there is {foods.length} foods in coffeeshop</h2>
          <FoodsTable
            foods={pageFoods}
            onLiked={handleLike}
            onDelete={handleDelete}
          />
          <Pagination
            itemsCount={filtered.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Foods;
