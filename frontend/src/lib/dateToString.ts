export const dateToString = (date: Date, options: "no-day" | "with-day", longFormat?: boolean) =>
    options === "no-day"
        ? date.toLocaleDateString("en-GB", { year: "numeric", month: longFormat ? "long" : "short" })
        : date.toLocaleDateString("en-GB", { year: "numeric", month: longFormat ? "long" : "short", day: "2-digit" })