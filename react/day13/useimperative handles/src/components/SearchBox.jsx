import {
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";

const SearchBox = forwardRef(({ onSearch, placeholder }, ref) => {
  // Ref for input
  const inputRef = useRef();

  // Expose custom methods to parent
  useImperativeHandle(ref, () => ({
    focusInput() {
      inputRef.current.focus();
    },

    clearInput() {
      inputRef.current.value = "";
      inputRef.current.focus();
    },

    getValue() {
      return inputRef.current.value;
    },
  }));

  // Read value using ref
  const handleSearch = () => {
    onSearch(inputRef.current.value);
  };

  return (
    <div className="search-box">

      <input
        type="text"
        ref={inputRef}
        placeholder={placeholder}
      />

      <button onClick={handleSearch}>
        Search
      </button>

      <button onClick={() => inputRef.current.focus()}>
        Focus
      </button>

      <button
        onClick={() => {
          inputRef.current.value = "";
          inputRef.current.focus();
        }}
      >
        Clear
      </button>

    </div>
  );
});

export default SearchBox;