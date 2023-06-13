import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import useExtendaGo from 'hooks/useExtendaGo'

const useProducts = () => {
  const { ready, refresh, client } = useExtendaGo()
  const queryClient = useQueryClient()

  const { data: products } = useQuery(['products'], {
    queryFn: () => client.GET('products'),
    enabled: ready,
  })

  // const createCategoryMutation = useMutation({
  //   mutationFn: (payload) => client.POST('product_categories', payload),
  //   onSuccess: (res) => {
  //     console.log('success', res)
  //     queryClient.invalidateQueries(['categories'])
  //   },
  // })

  // const deleteCategoryMutation = useMutation({
  //   mutationFn: (id) => client.DELETE(`product_categories/${id}`),
  //   onSuccess: (res) => {
  //     console.log('success delete', res)
  //     queryClient.invalidateQueries(['categories'])
  //   },
  // })

  // const createCategory = (payload) => {
  //   console.log('creating category', payload)
  //   createCategoryMutation.mutate(payload)
  // }

  // const deleteCategory = (id) => {
  //   deleteCategoryMutation.mutate(id)
  // }

  return { products }
}

export default useProducts
