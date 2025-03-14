import Form from 'next/form'
import Link from 'next/link';
import SearchFormReset from './SearchFormReset';

const SearchForm = () => {

    const query = 'test';

  
  return (
    
    <Form action = "/" scroll = {false} classID='search-form'>
        <input name = "query"
               defaultValue=""
               className='search-input' 
               placeholder='Search posts...'
         />

         <div className='flex gap-2'>

                {query && (
                    <SearchFormReset />
                )}

                <button type = "submit" className='text-white'>
                    S
                </button>
         </div>
    </Form>
   
  )
}

export default SearchForm
