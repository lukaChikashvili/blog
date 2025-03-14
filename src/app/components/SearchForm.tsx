import Form from 'next/form'
import SearchFormReset from './SearchFormReset';

const SearchForm = () => {

    const query = 'test';

  
  return (
    
    <Form action = "/" scroll = {false} className='search-form m-auto'>
        <input name = "query"
               defaultValue=""
               className='input' 
               placeholder='Search posts...'
         />

         <div className='flex gap-2'>

                {query && (
                    <SearchFormReset />
                )}

                <button type = "submit" className='text-white '>
                    S
                </button>
         </div>
    </Form>
   
  )
}

export default SearchForm
