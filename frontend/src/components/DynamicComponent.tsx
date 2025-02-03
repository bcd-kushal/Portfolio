// import { cookies, headers } from "next/headers"

type UserType = { createdAt: Date, name: string, avatar: string, id: number }

async function fetchUsers() {
  try {
    const url = "https://6771032e2ffbd37a63cdfba3.mockapi.io/api/mock/users"
    const res = await fetch(url, { next: { tags: ["users"] }, cache: "force-cache" })
    const data = await res.json()

    return { data: data as unknown as UserType[], error: null }
  } catch (err) {
    return { data: null, error: "failed to fetch: " + err }
  }
}

export default async function DynamicComponent() {
  const users = await fetchUsers()
  if (users.error || !users.data)
    return <div>Failed to fetch</div>

  return (
    <div className="grid grid-cols-2 gap-4">
      {users.data.length > 0 ? users.data.map(({ name, id }, index) => (
        <div key={index} className="border border-white/20 p-4 rounded-md">
          {id}: {name}
        </div>
      )) : JSON.stringify(users)}
    </div>
  )
}

export const DynamicFallback = () => {
  return (
    <div className="opacity-50">
      Loading dynamic...
    </div>
  )
}