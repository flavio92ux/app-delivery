import Input from '../components/Input'
import { useEffect } from 'react'
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api'

export default function Home() {
  useEffect(() => {
    async function fetchMyAPI() {
      const categories = await getCategories()

      const productsFromCategoryAndQuery = await getProductsFromCategoryAndQuery('MLB1055', 'Motorola')

      console.log(productsFromCategoryAndQuery)
    }

    fetchMyAPI()
  }, [])

  return (
    <div className="flex justify-center">
      <Input />
    </div>
  )
}
