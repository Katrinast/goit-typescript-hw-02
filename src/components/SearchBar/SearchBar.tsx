import { ReactElement, useState, FormEvent, ChangeEvent } from "react"
import toast, { Toaster } from 'react-hot-toast';
import css from "./SearchBar.module.css"

interface Props{
  onSubmit: (query: string) => void;
}
export default function SearchBar({onSubmit}: Props) :ReactElement {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      return toast.error('Field cannot be empty');
    }
    onSubmit(searchQuery);
    setSearchQuery('');
  }
  return (
    <>

      <form className={css.form} onSubmit={handleSubmit}>
        
    <input className={css.input}
          name="search"
          autoFocus
          placeholder="Search images and photos"
          value={searchQuery}
          onChange={handleChange}
    />
    <button className={css.btn} type="submit">Search</button>
      </form>
      <Toaster/>
      </>


  )
}


