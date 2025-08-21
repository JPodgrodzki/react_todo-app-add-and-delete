import React, { Dispatch, SetStateAction } from 'react';

type Props = {
  handleSubmit: (event: React.FormEvent) => {};
  setNewTodoTitle: Dispatch<SetStateAction<string>>;
  newTodoTitle: string;
  disabled: boolean;
  inputRef: React.RefObject<HTMLInputElement>;
};

export const Header: React.FC<Props> = ({
  handleSubmit,
  setNewTodoTitle,
  newTodoTitle,
  disabled,
  inputRef,
}) => {
  return (
    <header className="todoapp__header">
      {/* this button should have `active` class only if all todos are completed */}
      <button
        type="button"
        className="todoapp__toggle-all active"
        data-cy="ToggleAllButton"
      />

      {/* Add a todo on form submit */}
      <form onSubmit={handleSubmit}>
        <input
          data-cy="NewTodoField"
          type="text"
          className="todoapp__new-todo"
          placeholder="What needs to be done?"
          value={newTodoTitle}
          onChange={event => setNewTodoTitle(event.target.value)}
          disabled={disabled}
          autoFocus
          ref={inputRef}
        />
      </form>
    </header>
  );
};
