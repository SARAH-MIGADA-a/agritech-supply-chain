// src/formatters/formatters.ts

/**
 * Format a price to a currency string.
 * @param price - The price to format.
 * @returns Formatted price string.
 */
export const formatPrice = (price: number): string => {
    return `$${price.toFixed(2)}`;
};

/**
 * Format a product name for display.
 * @param name - The name of the product.
 * @returns Formatted product name.
 */
export const formatProductName = (name: string): string => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

/**
 * Format a date to a readable string.
 * @param date - The date to format.
 * @returns Formatted date string.
 */
export const formatDate = (date: string | Date): string => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
};
