export const timeGap = (start: Date | undefined, end: Date | undefined): string => {
    if(!start || !end)
        return ""
    
    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();

    if (months < 0) {
        years -= 1;
        months += 12;
    }

    return `${years > 0 ? `${years}yr` : ""}${months > 0 ? ` ${months}mos` : ""}`;
}