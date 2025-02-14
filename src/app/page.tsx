"use client";

import { useEffect, useState, useRef } from "react";
import "./page.css";

type Mode = "add" | "remove";

const useRenderCounter = () => {
  const counter = useRef(0);
  counter.current++;

  return counter.current;
};

const RenderCountLabel = ({
  count,
  label,
}: {
  count: number;
  label: string;
}) => {
  return (
    <div>
      {label} renders: <span style={{ color: "red" }}>{count}</span>
    </div>
  );
};

const AddToEndButton = ({ onClick }: { onClick: () => void }) => {
  const counter = useRenderCounter();
  return (
    <div className="button">
      <button onClick={onClick}>Add to end</button>
      <RenderCountLabel label="Button" count={counter} />
    </div>
  );
};

const AddToStartButton = ({ onClick }: { onClick: () => void }) => {
  const counter = useRenderCounter();
  return (
    <div>
      <button onClick={onClick}>Add to start</button>
      <RenderCountLabel label="Button" count={counter} />
    </div>
  );
};

const ChangeModeButton = ({
  action,
  onClick,
}: {
  action: Mode;
  onClick: () => void;
}) => {
  const counter = useRenderCounter();
  return (
    <div>
      <button onClick={onClick}>change mode: {action}</button>
      <RenderCountLabel label="Button" count={counter} />
    </div>
  );
};

const ListItem = ({
  item,
  index,
  onRemove,
}: {
  item: string;
  index: number;
  onRemove: (index: number) => void;
}) => {
  const itemRef = useRef<HTMLLIElement | null>(null);

  const onClick = () => {
    if (itemRef.current) {
      itemRef.current.style.animation = "none";
      itemRef.current.offsetHeight;
      itemRef.current.style.animation = "pulse-animation 1.5s ease-in-out";
    }
  };
  return (
    <li ref={itemRef} onClick={onClick} className="li-item">
      {item}
      <button className="btn-remove" onClick={() => onRemove(index)}>
        x
      </button>
    </li>
  );
};

const List = () => {
  const counter = useRenderCounter();
  const index = useRef<number>(0);
  const [items, setItems] = useState<string[]>([]);
  const [action, setAction] = useState<Mode>("add");

  const handleChangeAction = () => {
    setAction((prev) => (prev === "add" ? "remove" : "add"));
  };

  const handlRemoveItems = () => {
    setItems((prev) => prev.slice(0, prev.length - 1));
  };

  const handleRemoveItem = (index: number) => {
    return setItems(items.filter((_, i) => i !== index));
  };

  const handleAddItem = () => {
    setItems((prev) => [...prev, `${index.current++}-item`]);
  };

  const handleAddToStart = () => {
    setItems((prev) => [`${index.current++}-item-handle`, ...prev]);
  };

  useEffect(() => {
    setTimeout(
      () => (action === "add" ? handleAddItem() : handlRemoveItems()),
      1000
    );
  });

  return (
    <ul className="list">
      <RenderCountLabel label="List" count={counter} />
      <br />
      <ChangeModeButton action={action} onClick={handleChangeAction} />
      <br />
      <div className="btn-actions">
        <AddToStartButton onClick={handleAddToStart} />
        <AddToEndButton onClick={handleAddItem} />
      </div>
      {items.map((item, index) => (
        <ListItem
          key={item}
          item={item}
          index={index}
          onRemove={handleRemoveItem}
        />
      ))}
    </ul>
  );
};

function App() {
  return (
    <div>
      <List />
    </div>
  );
}

export default App;
