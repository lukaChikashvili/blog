import Form from 'next/form'
import SearchFormReset from './SearchFormReset';

const SearchForm = ({ query }: {query?: string}) => {

  
  
  return (
    
    <Form action = "/" scroll = {false} className='search-form '>
        <input name = "query"
               defaultValue=""
               className='input' 
               placeholder='Search posts...'
         />

         <div className='flex gap-2 relative'>

                {query && (
                    <SearchFormReset />
                )}

                <button type = "submit"  className="absolute text-xl right-3 top-1/2 transform -translate-y-1/2 text-gray-500 -mt-[18px] z-10"
>
                    S
                </button>
         </div>
    </Form>
   
  )
}

export default SearchForm
