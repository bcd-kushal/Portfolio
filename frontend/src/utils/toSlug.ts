export const toSlug = (str:string) => str.replace(/[^a-zA-Z0-9\s-]/g, '')
                                         .toLowerCase()
                                         .replace(/\s+/g, '-')
                                         .replace(/^-+|-+$/g, '')