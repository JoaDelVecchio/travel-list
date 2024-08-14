const Stats = ({ items }) => {
  const itemsPacked = items.filter((item) => item.packed).length;
  const totalItems = items.length;
  return (
    <footer className="stats">
      <em>
        🧳 You have {totalItems} items on your list and you already packed{" "}
        {itemsPacked} (
        {itemsPacked > 0 ? ((itemsPacked / totalItems) * 100).toFixed(2) : 0}%)
      </em>
    </footer>
  );
};

export default Stats;
