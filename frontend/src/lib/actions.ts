'use server'

import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

export const revalidateUsersTag = async (currPath?: string) => {
    revalidateTag("users")
    redirect(currPath || "/")
}