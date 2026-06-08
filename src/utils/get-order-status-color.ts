export const getOrderStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
        case 'pending':
            return 'bg-yellow-100 text-yellow-800';
        case 'completed':
        case 'delivered':
            return 'bg-green-100 text-green-800';
        case 'cancelled':
            return 'bg-red-100 text-red-800';
        case 'processing':
            return 'bg-blue-100 text-blue-800';
        default:
            return 'bg-gray-100 text-gray-800';
    }
}

export const getBorderColor = (status: string) => {
    switch (status.toLowerCase()) {
        case 'pending':
            return 'border-yellow-100';
        case 'completed':
        case 'delivered':
            return 'border-green-100';
        case 'cancelled':
            return 'border-red-100';
        case 'processing':
            return 'border-blue-100';
        default:
            return 'border-gray-100';
    }
}