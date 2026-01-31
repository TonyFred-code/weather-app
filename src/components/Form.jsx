export default function Form() {
  function handleFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    for (const pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }
  }

  function showSearchHistory() {
    console.log("show search history (last 4)");
  }

  function hideSearchHistory() {
    console.log("hide search history drop down");
  }

  return (
    <section className="flex flex-col items-center justify-center">
      <h2 className="text-center my-8 font-bricolage-grotesque text-[60px]">
        How&apos;s the sky looking today?
      </h2>
      <form
        className="flex flex-col md:flex-row gap-4 md:w-10/12 max-w-xl"
        onSubmit={handleFormSubmit}
      >
        <div className="flex gap-4 items-center bg-neutral-800 py-3 px-5 rounded-xl flex-1">
          <label htmlFor="search">
            <span>
              <img src="/images/icon-search.svg" alt="" />
            </span>
          </label>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search for a place..."
            className="border-none outline-none flex-1 bg-transparent autofill:bg-transparent autofill:text-neutral-0"
            onFocus={showSearchHistory}
            onBlur={hideSearchHistory}
          />
        </div>
        <button
          type="submit"
          className="capitalize text-center text-neutral-0 bg-blue-500 py-2 px-5 md:py-2.5 md:px-6 rounded-xl font-bold cursor-pointer hover:bg-blue-700"
        >
          search
        </button>
      </form>
    </section>
  );
}
