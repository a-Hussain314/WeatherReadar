export const formattedDatetime = (timestamp = Date.now()) => {
    return {
        timestamp,
        // to format data => "dd.mm.yyyy"
        date: new Date(timestamp).toISOString().split("T")[0].split("-").reverse().join("."),
        // to format time => "hh:mm"
        time: new Date(timestamp).toISOString().split("T")[1].slice(0, 5)
    }
}