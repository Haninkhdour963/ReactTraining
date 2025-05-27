const showCategories = true;

const tasks = [
  { id: 1, title: "doing my homeWork" },
  { id: 2, title: "rendering a book" },
  { id: 3, title: "studying" },
  { id: 4, title: "make a story" },
];

function RenderingListwithHigherOrders() {
  const myTaskList = tasks.map((task) => {
    return (
      <div style={{ backgroundColor: "yellowgreen", margin: "10px", padding: "10px" }} key={task.id}>
        <h1>{task.title}</h1>
      </div>
    );
  });

  return <div>{myTaskList}</div>;
}

export default RenderingListwithHigherOrders;
