
export function formatPrice(number) {
  return (parseInt(number)).toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,') + ' vnd';
}