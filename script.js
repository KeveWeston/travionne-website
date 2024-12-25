document.getElementById("planner-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page reload
  
    // Get the user input
    const tripDetails = document.getElementById("trip-details").value;
  
    // Use regular expressions to extract keywords from the sentence
    const destinationMatch = tripDetails.match(/to\s([\w\s]+)/i); // Extracts destination after 'to'
    const daysMatch = tripDetails.match(/(\d+)\s?(day|days)/i); // Extracts number of days
    const budgetMatch = tripDetails.match(/\$?(\d+)\s?(budget)?/i); // Extracts budget
  
    // Extracted values (default to 'Not specified' if no match)
    const destination = destinationMatch ? destinationMatch[1].trim() : "Not specified";
    const days = daysMatch ? daysMatch[1] : "Not specified";
    const budget = budgetMatch ? `$${budgetMatch[1]}` : "Not specified";
  
    // Generate itinerary based on extracted information
    const itinerary = `
      <h3>Your Trip Plan:</h3>
      <p><strong>Destination:</strong> ${destination}</p>
      <p><strong>Duration:</strong> ${days} days</p>
      <p><strong>Budget:</strong> ${budget}</p>
    `;
  
    // Display the itinerary
    document.getElementById("itinerary").innerHTML = itinerary;
  });
  