type IListProducts = {
  id: string
  name: string
}

export async function getCategories(): Promise<IListProducts[] | null> {
  const res = await fetch("https://api.mercadolibre.com/sites/MLB/categories")

  if (res.ok) {
    const data = await res.json()
    return data
  }

  return null
}

export async function getProductsFromCategoryAndQuery(categoryId: string, query: string): Promise<IListProducts[] | null> {
  const params = new URLSearchParams({
    category: categoryId,
    q: query,
  })

  const res = await fetch('https://api.mercadolibre.com/sites/MLB/search?' + params)

  if (res.ok) {
    const data = await res.json()
    return data
  }

  return null
}