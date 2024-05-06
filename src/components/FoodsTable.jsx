import Table from "./common/Table/Table";

const FoodsTable = (props) => {
  const { foods, onLiked, onDelete } = props;

  return <Table foodBody={foods} onLiked={onLiked} onDelete={onDelete} />;
};

export default FoodsTable;
