export default function Form() {
  function handleFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    for (const pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }
  }

  return (
    <section className="flex flex-col items-center justify-center">
      <h2 className="text-center my-8 font-bricolage-grotesque text-[60px]">
        How&apos;s the sky looking today?
      </h2>
      <form
        className="flex flex-col md:flex-row gap-4 md:w-10/12 max-w-xl w-full"
        onSubmit={handleFormSubmit}
      >
        <div className="flex xs:gap-2 gap-4 items-center bg-neutral-800 p-3 rounded-xl flex-1">
          <label htmlFor="search">
            <span className="flex size-3.5">
              <img src="/images/icon-search.svg" alt="" />
            </span>
          </label>
          <input
            type="text"
            name="search"
            id="search"
            required
            placeholder="Search for a place..."
            className="border-none outline-none flex-1 bg-transparent user-invalid:border-b-2 user-invalid:border-neutral-300 autofill:bg-transparent autofill:text-neutral-0 min-w-0"
          />
        </div>
        <button
          type="submit"
          className="capitalize text-center text-neutral-0 bg-blue-500 py-3 px-5 md:py-2.5 md:px-6 rounded-xl font-bold cursor-pointer hover:bg-blue-700"
        >
          search
        </button>
      </form>
    </section>
  );
}
