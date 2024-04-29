export function generateCouponCode(title="", expiry="") {
    // Convert the title to uppercase and remove all spaces
    const formattedTitle = title.toUpperCase().replace(/\s/g, '');
  
    // Format the expiry date from "YYYY-MM-DD" to "DDMMYYYY"
    const date = new Date(expiry);
    const formattedDate = [
      date.getDate().toString().padStart(2, '0'), // Get the day and pad with zero if necessary
      (date.getMonth() + 1).toString().padStart(2, '0'), // Get the month, increment by one (since months are zero-indexed), and pad if necessary
      date.getFullYear() // Get the full year
    ].join('');
  
    // Combine title and date with a dash
    return `${formattedTitle}-${formattedDate}`;
  }
  
  // Example usage:
//   const couponCode = generateCouponCode("Big Bazar", "2023-04-15");
//   console.log(couponCode);