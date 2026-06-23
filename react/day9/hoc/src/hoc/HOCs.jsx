import { useState, useEffect } from "react";

export const withBackgroundColor = (WrappedComponent) => {
  return (props) => {
    const [color, setColor] = useState("");

    return (
      <>
        <input
          type="text"
          placeholder="Enter Color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />

        <div style={{ backgroundColor: color, padding: "20px" }}>
          <WrappedComponent {...props} />
        </div>
      </>
    );
  };
};

export const withUpperCase = (WrappedComponent) => {
  return () => {
    const [text, setText] = useState("");

    return (
      <>
        <input
          type="text"
          placeholder="Enter Text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <WrappedComponent text={text.toUpperCase()} />
      </>
    );
  };
};

export const withCounter = (WrappedComponent) => {
  return () => {
    const [count, setCount] = useState(0);

    return (
      <WrappedComponent
        count={count}
        increment={() => setCount(count + 1)}
        decrement={() => setCount(count - 1)}
      />
    );
  };
};

export const withAuth = (WrappedComponent) => {
  return ({ isLogin }) =>
    isLogin ? (
      <WrappedComponent />
    ) : (
      <h3>Please Login First</h3>
    );
};

export const withIteration = (WrappedComponent) => {
  return () => {
    const [num, setNum] = useState("");
    const [color, setColor] = useState("");

    const numbers = Array.from(
      { length: Number(num) || 0 },
      (_, i) => i + 1
    );

    return (
      <>
        <input
          type="number"
          placeholder="Enter Number"
          value={num}
          onChange={(e) => setNum(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />

        <WrappedComponent numbers={numbers} color={color} />
      </>
    );
  };
};

export const withLoading = (WrappedComponent) => {
  return () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 3000);

      return () => clearTimeout(timer);
    }, []);

    return loading ? <h3>Loading...</h3> : <WrappedComponent />;
  };
};