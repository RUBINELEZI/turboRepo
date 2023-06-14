export default function OpeningHours() {
    const hours = {
      Monday: '09:00 AM - 05:00 PM',
      Tuesday: '09:00 AM - 05:00 PM',
      Wednesday: '12:00 AM - 12:00 AM',
      Thursday: '09:00 AM - 05:00 PM',
      Friday: '09:00 AM - 05:00 PM',
      Saturday: 'Closed',
      Sunday: 'Closed',
    };
  
    return (
      <div className="mx-auto p-4 bg-gray-50">
        <h2 className="text-xl font-semibold mb-2 text-gray-700">Opening Hours</h2>
        {Object.entries(hours).map(([day, time], index) => (
          <div key={index} className="flex justify-between mb-1">
            <p className="font-medium text-gray-700">{day}</p>
            <p className="text-gray-700">{time}</p>
          </div>
        ))}
      </div>
    );
  }
  