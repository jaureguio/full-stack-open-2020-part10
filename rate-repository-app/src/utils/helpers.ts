export function parseThousands(value: number): string {
  return value >= 1000 
   ? `${Math.round(value/100)/10}k`
   : String(value);
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return [date.getUTCDate(), date.getUTCMonth(), date.getUTCFullYear()].join('.');
}