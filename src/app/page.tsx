"use client";

import React, { useEffect, useState, useRef, useCallback, memo } from "react";
import "./page.css";

type Mode = "add" | "remove";

const useRenderCounter = () => {
  const counter = useRef(0);
  counter.current++;

  return counter.current;
};

const RenderCountLabel = memo(
  ({ count, label }: { count: number; label: string }) => {
    return (
      <div>
        {label} renders: <span style={{ color: "red" }}>{count}</span>
      </div>
    );
  }
);

const Button = memo(
  ({
    onClick,
    label,
    className,
    hideCounter,
  }: {
    onClick: () => void;
    label: string;
    className?: string;
    hideCounter?: boolean;
  }) => {
    const counter = useRenderCounter();
    return (
      <div>
        <button className={className || ""} onClick={onClick}>
          {label}
        </button>
        {!hideCounter && <RenderCountLabel label="Button" count={counter} />}
      </div>
    );
  }
);

const AddToEndButton = memo(({ onClick }: { onClick: () => void }) => {
  return <Button onClick={onClick} label="Add to end" className="button" />;
});

const AddToStartButton = memo(({ onClick }: { onClick: () => void }) => {
  return <Button onClick={onClick} label="Add to start" />;
});

const ChangeModeButton = memo(
  ({ action, onClick }: { action: Mode; onClick: () => void }) => {
    return <Button onClick={onClick} label={`change mode: ${action}`} />;
  }
);

const ListItem = memo(
  ({
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
        <Button
          className="btn-remove"
          onClick={() => onRemove(index)}
          label="x"
          hideCounter
        />
      </li>
    );
  }
);

const List = () => {
  const counter = useRenderCounter();
  const index = useRef<number>(0);
  const [items, setItems] = useState<string[]>([]);
  const [action, setAction] = useState<Mode>("add");

  const handleChangeAction = useCallback(() => {
    setAction((prev) => (prev === "add" ? "remove" : "add"));
  }, []);

  const handlRemoveItems = useCallback(() => {
    setItems((prev) => prev.slice(0, prev.length - 1));
  }, []);

  const handleRemoveItem = useCallback((index: number) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const handleAddItem = useCallback(() => {
    setItems((prev) => [...prev, `${index.current++}-item`]);
  }, []);

  const handleAddToStart = useCallback(() => {
    setItems((prev) => [`${index.current++}-item-handle`, ...prev]);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(
      () => (action === "add" ? handleAddItem() : handlRemoveItems()),
      1000
    );
    return () => clearTimeout(timeout);
  }, [items, action, handleAddItem, handlRemoveItems]);

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
