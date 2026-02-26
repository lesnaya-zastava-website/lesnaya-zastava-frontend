import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function processCkeditorHtml(html: string): string {
  if (!html) return '';
  return html
    .replace(/<p>&nbsp;<\/p>/g, '<p></p>')
    .trim();
}
