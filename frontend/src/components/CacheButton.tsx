'use client'

import { revalidateUsersTag } from "@/lib/actions"

export default function CacheButton() {
  return (
    <form action={() => revalidateUsersTag("/")}>
      <button className="py-2 px-4 bg-amber-900 text-white cursor-pointer w-fit rounded-md">
        Clear Cache
      </button>
    </form>
  )
}