const hotels = [
    {
      "name": "Grand Hotel",
      "address": "123 Main Street, New York City, USA",
      "stars": 4,
      "rating": 8.2,
      "amenities": ["Free Wi-Fi", "Swimming pool", "Fitness center", "Restaurant", "Bar", "Room service"],
      "price_per_night": 150
    },
    {
      "name": "Central Park Hotel",
      "address": "456 Central Park West, New York City, USA",
      "stars": 5,
      "rating": 9.0,
      "amenities": ["Free Wi-Fi", "Spa", "Fitness center", "Restaurant", "Bar", "Room service"],
      "price_per_night": 250
    },
    {
      "name": "Times Square Hotel",
      "address": "789 Broadway, New York City, USA",
      "stars": 3,
      "rating": 7.5,
      "amenities": ["Free Wi-Fi", "Restaurant", "Bar"],
      "price_per_night": 120
    },
    {
      "name": "Empire Hotel",
      "address": "101 Empire State Building, New York City, USA",
      "stars": 4,
      "rating": 8.0,
      "amenities": ["Free Wi-Fi", "Fitness center", "Restaurant", "Bar", "Room service"],
      "price_per_night": 180
    },
    {
      "name": "Soho Boutique Hotel",
      "address": "202 Soho Street, New York City, USA",
      "stars": 4,
      "rating": 8.5,
      "amenities": ["Free Wi-Fi", "Rooftop Bar", "Restaurant", "Room service"],
      "price_per_night": 200
    },
    {
      "name": "Hollywood Inn",
      "address": "123 Sunset Blvd, Los Angeles, USA",
      "stars": 4,
      "rating": 8.0,
      "amenities": ["Free Wi-Fi", "Swimming pool", "Fitness center", "Restaurant", "Bar", "Room service"],
      "price_per_night": 160
    },
    {
      "name": "Beverly Hills Hotel",
      "address": "456 Beverly Hills, Los Angeles, USA",
      "stars": 5,
      "rating": 9.3,
      "amenities": ["Free Wi-Fi", "Spa", "Fitness center", "Restaurant", "Bar", "Room service"],
      "price_per_night": 300
    },
    {
      "name": "Santa Monica Beach Hotel",
      "address": "789 Ocean Ave, Los Angeles, USA",
      "stars": 4,
      "rating": 8.7,
      "amenities": ["Free Wi-Fi", "Swimming pool", "Beachfront", "Restaurant", "Bar", "Room service"],
      "price_per_night": 220
    },
    {
      "name": "Downtown LA Hotel",
      "address": "101 Downtown Street, Los Angeles, USA",
      "stars": 3,
      "rating": 7.8,
      "amenities": ["Free Wi-Fi", "Restaurant", "Bar", "Room service"],
      "price_per_night": 140
    },
    {
      "name": "Hollywood Boulevard Hotel",
      "address": "202 Hollywood Blvd, Los Angeles, USA",
      "stars": 4,
      "rating": 8.4,
      "amenities": ["Free Wi-Fi", "Swimming pool", "Fitness center", "Restaurant", "Bar", "Room service"],
      "price_per_night": 190
    },
    {
      "name": "London Bridge Hotel",
      "address": "123 London Bridge, London, UK",
      "stars": 4,
      "rating": 8.5,
      "amenities": ["Free Wi-Fi", "Fitness center", "Restaurant", "Bar", "Room service"],
      "price_per_night": 180
    },
    {
      "name": "Westminster Abbey Hotel",
      "address": "456 Westminster Street, London, UK",
      "stars": 5,
      "rating": 9.1,
      "amenities": ["Free Wi-Fi", "Spa", "Fitness center", "Restaurant", "Bar", "Room service"],
      "price_per_night": 320
    },
    {
      "name": "Covent Garden Hotel",
      "address": "789 Covent Garden, London, UK",
      "stars": 4,
      "rating": 8.8,
      "amenities": ["Free Wi-Fi", "Restaurant", "Bar", "Room service"],
      "price_per_night": 210
    },
    {
      "name": "Hyde Park Hotel",
      "address": "101 Hyde Park, London, UK",
      "stars": 3,
      "rating": 7.9,
      "amenities": ["Free Wi-Fi", "Restaurant", "Bar", "Room service"],
      "price_per_night": 150
    },
    {
      "name": "Piccadilly Circus Hotel",
      "address": "202 Piccadilly Circus, London, UK",
      "stars": 4,
      "rating": 8.3,
      "amenities": ["Free Wi-Fi", "Fitness center", "Restaurant", "Bar", "Room service"],
      "price_per_night": 200
    },
    {
      "name": "Shibuya Hotel",
      "address": "123 Shibuya Crossing, Tokyo, Japan",
      "stars": 4,
      "rating": 8.6,
      "amenities": ["Free Wi-Fi", "Swimming pool", "Fitness center", "Restaurant", "Bar", "Room service"],
      "price_per_night": 170
    },
    {
      "name": "Tokyo Tower Hotel",
      "address": "456 Tokyo Tower, Tokyo, Japan",
      "stars": 5,
      "rating": 9.2,
      "amenities": ["Free Wi-Fi", "Spa", "Fitness center", "Restaurant", "Bar", "Room service"],
      "price_per_night": 350
    },
    {
      "name": "Ginza Boutique Hotel",
      "address": "789 Ginza, Tokyo, Japan",
      "stars": 4,
      "rating": 8.7,
      "amenities": ["Free Wi-Fi", "Restaurant", "Bar", "Room service"],
      "price_per_night": 230
    },
    {
      "name": "Asakusa Riverside Hotel",
      "address": "101 Asakusa, Tokyo, Japan",
      "stars": 3,
      "rating": 8.0,
      "amenities": ["Free Wi-Fi", "Restaurant", "Bar"],
      "price_per_night": 140
    },
    {
      "name": "Shinjuku Central Hotel",
      "address": "202 Shinjuku, Tokyo, Japan",
      "stars": 4,
      "rating": 8.4,
      "amenities": ["Free Wi-Fi", "Swimming pool", "Fitness center", "Restaurant", "Bar", "Room service"],
      "price_per_night": 190
    },
    {
      "name": "Sydney Opera House Hotel",
      "address": "123 Opera House Street, Sydney, Australia",
      "stars": 4,
      "rating": 8.5,
      "amenities": ["Free Wi-Fi", "Swimming pool", "Fitness center", "Restaurant", "Bar", "Room service"],
      "price_per_night": 180
    },
    {
      "name": "Bondi Beach Hotel",
      "address": "456 Bondi Beach, Sydney, Australia",
      "stars": 5,
      "rating": 9.0,
      "amenities": ["Free Wi-Fi", "Spa", "Fitness center", "Beachfront", "Restaurant", "Bar", "Room service"],
      "price_per_night": 300
    },
    {
      "name": "Darling Harbour Hotel",
      "address": "789 Darling Harbour, Sydney, Australia",
      "stars": 4,
      "rating": 8.7,
      "amenities": ["Free Wi-Fi", "Swimming pool", "Fitness center", "Restaurant", "Bar", "Room service"],
      "price_per_night": 220
    },
    {
      "name": "The Rocks Hotel",
      "address": "101 The Rocks, Sydney, Australia",
      "stars": 3,
      "rating": 7.8,
      "amenities": ["Free Wi-Fi", "Restaurant", "Bar"],
      "price_per_night": 140
    },
    {
      "name": "Circular Quay Hotel",
      "address": "202 Circular Quay, Sydney, Australia",
      "stars": 4,
      "rating": 8.4,
      "amenities": ["Free Wi-Fi", "Swimming pool", "Fitness center", "Restaurant", "Bar", "Room service"],
      "price_per_night": 190
    }
  ]
  

  export default hotels;