import Form from 'next/form'
import SearchFormReset from './SearchFormReset';
import { Search } from 'lucide-react';

const SearchForm = ({ query }: { query?: string }) => {
  return (
    <Form action="/" scroll={false} className="w-full max-w-md px-4 sm:px-6 md:px-8 flex items-center">
      <div className="relative w-full">
        <input
          name="query"
          defaultValue={query || ""}
          className="w-full input pr-10"
          placeholder="Search posts..."
        />

        {query && <SearchFormReset />}

        <button
          type="submit"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
        >
          <Search />
        </button>
      </div>
    </Form>
  );
};

export default SearchForm;
