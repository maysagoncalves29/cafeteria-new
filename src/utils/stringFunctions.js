export function translateType(type) {
    switch(type) {
        case 'cafe':
            return 'Cafés';
        case 'leite':
            return 'Leites';
        case 'bolo':
            return 'Bolos';
        default: 
            return type
    }
}