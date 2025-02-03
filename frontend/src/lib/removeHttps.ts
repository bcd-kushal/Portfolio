export const removeHttps = (link: string) =>
    link.replace(/^https?:\/\//, "")