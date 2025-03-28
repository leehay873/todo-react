import React, { useState } from "react";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleAddTodo = () => {
    if (input.trim() !== "") {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  const handleDelete = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleShiftUp = (index) => {
    if (index === 0) return;
    const newTodos = [...todos];
    [newTodos[index - 1], newTodos[index]] = [newTodos[index], newTodos[index - 1]];
    setTodos(newTodos);
  };

  const handleShiftDown = (index) => {
    if (index === todos.length - 1) return;
    const newTodos = [...todos];
    [newTodos[index], newTodos[index + 1]] = [newTodos[index + 1], newTodos[index]];
    setTodos(newTodos);
  };

  return (
    <div style={{
      padding: "1.5rem",
      maxWidth: "28rem",
      margin: "0 auto",
      backgroundColor: "white",
      borderRadius: "1.5rem",
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      marginTop: "3rem"
    }}>
      <h1 style={{
        fontSize: "1.875rem",
        fontWeight: "bold",
        marginBottom: "1.5rem",
        textAlign: "center",
        color: "#1f2937"
      }}>Todo List by leah</h1>

      <div style={{ display: "flex", marginBottom: "1.5rem" }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a task..."
          style={{
            flexGrow: 1,
            border: "1px solid #d1d5db",
            borderTopLeftRadius: "9999px",
            borderBottomLeftRadius: "9999px",
            padding: "0.5rem 1rem",
            outline: "none",
            boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.5)"
          }}
        />
        <button
          onClick={handleAddTodo}
          style={{
            backgroundColor: "#2563eb",
            color: "white",
            padding: "0.5rem 1.5rem",
            borderTopRightRadius: "9999px",
            borderBottomRightRadius: "9999px",
            cursor: "pointer",
            transition: "background-color 0.2s"
          }}

          >
          Add
        </button>
      </div>

      <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "#f9fafb",
              border: "1px solid #e5e7eb",
              borderRadius: "0.75rem",
              padding: "0.75rem 1rem",
              boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)"
            }}
          >
            <span style={{ color: "#1f2937", fontWeight: "500" }}>{todo}</span>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <button
                onClick={() => handleShiftUp(index)}
                style={{
                  padding: "0.25rem 0.75rem",
                  backgroundColor: "#dcfce7",
                  color: "#15803d",
                  borderRadius: "9999px",
                  fontSize: "0.875rem",
                  cursor: "pointer"
                }}

                >
                Shift Up
              </button>
              <button
                onClick={() => handleShiftDown(index)}
                style={{
                  padding: "0.25rem 0.75rem",
                  backgroundColor: "#fef9c3",
                  color: "#a16207",
                  borderRadius: "9999px",
                  fontSize: "0.875rem",
                  cursor: "pointer"
                }}

                >
                Shift Down
              </button>
              <button
                onClick={() => handleDelete(index)}
                style={{
                  padding: "0.25rem 0.75rem",
                  backgroundColor: "#fee2e2",
                  color: "#dc2626",
                  borderRadius: "9999px",
                  fontSize: "0.875rem",
                  cursor: "pointer"
                }}

                >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;