
export function formatDate(data: Date): string {
    return data.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}
