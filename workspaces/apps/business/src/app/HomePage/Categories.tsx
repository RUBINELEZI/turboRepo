import { useRef } from 'react'
import { useForm } from 'strooks'
import useCategories from './useCategories'
import { Input, Button } from 'ui/form'

const Categories = () => {
  const formRef = useRef()
  const [state, update] = useForm(formRef)
  const { categories, createCategory, deleteCategory } = useCategories()

  const onSubmit = () => {
    createCategory(state)
    update({ name: null })
  }

  return (
    <div className="p-3">
      <h2 className="mb-3">Categories</h2>
      <ul>
        {categories?.map((cat) => (
          <li className="flex gap-20 border-b-2" key={cat.id}>
            <span>{cat.name}</span>
            <button
              onClick={() => deleteCategory(cat.id)}
              className="text-red-500 strong"
            >
              X
            </button>
          </li>
        ))}
      </ul>
      <form ref={formRef} onSubmit={onSubmit}>
        <div className="flex">
          <Input name="name" placeholder="new Category" />
          <Button>Add</Button>
        </div>
      </form>
    </div>
  )
}

export default Categories
