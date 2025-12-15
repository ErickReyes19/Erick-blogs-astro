
export class Formatter {
    static FormatDate(value: string): string {
        const date = new Date(value);
        return Intl.DateTimeFormat("es-ES", {
            year: "numeric",
            month: "long",
            day: "numeric",
        }).format(date);

    }
}