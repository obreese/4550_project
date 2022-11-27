export function timeConverter(epoch) {
    let elapsed = Math.floor(Date.now() / 1000) - epoch
    let minutes = Math.floor(elapsed / 60)
    let hours = Math.floor(elapsed / 3600)
    let days = Math.floor(elapsed / 86400)
    let weeks = Math.floor(elapsed / 604800)

    if (weeks > 0) {
        if (weeks > 8) {
            return '8+w'
        } else {
            return weeks + 'w'
        }
    } else if (days > 0) {
        return days + 'd'
    } else if (hours > 0) {
        return hours + 'h'
    } else if (minutes > 0) {
        return minutes + 'm'
    } else {
        return 'now'
    }
}