import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAlltodos } from "../action/TodosAction";

const Todos = () => {
  const todosData = useSelector((state) => state);
  const { isLoading, todos, error } = todosData;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAlltodos());
  }, []);

  return (
    <div>
      <section>
        <h1>Todos App uning data fetch</h1>
        {isLoading && <h4>Loading ...</h4>}
        {error && <h4>{error}</h4>}

        <section>
          {todos &&
            todos.map((todo) => {
              return (
                <article key={todo.id}>
                  <h4>{todo.id}</h4>
                  <h4>{todo.title}</h4>
                </article>
              );
            })}
        </section>
      </section>
    </div>
  );
};

export default Todos;
