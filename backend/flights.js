const flights = [
    {
        "from": "JFK",
        "to": "LAX",
        "stops": ["ORD"],
        "price": 400,
        "departure_time": "08:00",
        "arrival_time": "13:00"
      },
      {
        "from": "JFK",
        "to": "LAX",
        "stops": ["DFW"],
        "price": 200,
        "departure_time": "06:00",
        "arrival_time": "10:00"
      },
      {
        "from": "JFK",
        "to": "LAX",
        "stops": ["CVG"],
        "price": 550,
        "departure_time": "13:00",
        "arrival_time": "18:00"
      },
      {
        "from": "JFK",
        "to": "LAX",
        "stops": ["DEN"],
        "price": 600,
        "departure_time": "15:00",
        "arrival_time": "20:00"
      },
      {
        "from": "JFK",
        "to": "LAX",
        "stops": ["DET"],
        "price": 330,
        "departure_time": "08:00",
        "arrival_time": "14:00"
      },
      {
        "from": "JFK",
        "to": "LHR",
        "stops": ["BOS"],
        "price": 700,
        "departure_time": "08:00",
        "arrival_time": "20:00"
    },
    {
        "from": "JFK",
        "to": "LHR",
        "stops": [],
        "price": 750,
        "departure_time": "10:00",
        "arrival_time": "22:00"
    },
    {
        "from": "JFK",
        "to": "LHR",
        "stops": ["ORD"],
        "price": 680,
        "departure_time": "14:00",
        "arrival_time": "02:00"
    },
    {
        "from": "JFK",
        "to": "LHR",
        "stops": ["BOS", "DUB"],
        "price": 620,
        "departure_time": "17:00",
        "arrival_time": "07:00"
    },
    {
        "from": "JFK",
        "to": "LHR",
        "stops": ["BOS"],
        "price": 670,
        "departure_time": "20:00",
        "arrival_time": "10:00"
    },
    {
        "from": "JFK",
        "to": "NRT",
        "stops": ["SFO"],
        "price": 900,
        "departure_time": "08:00",
        "arrival_time": "18:00"
    },
    {
        "from": "JFK",
        "to": "NRT",
        "stops": [],
        "price": 950,
        "departure_time": "10:00",
        "arrival_time": "20:00"
    },
    {
        "from": "JFK",
        "to": "NRT",
        "stops": ["LAX"],
        "price": 870,
        "departure_time": "14:00",
        "arrival_time": "00:00"
    },
    {
        "from": "JFK",
        "to": "NRT",
        "stops": ["SFO", "SEA"],
        "price": 820,
        "departure_time": "17:00",
        "arrival_time": "03:00"
    },
    {
        "from": "JFK",
        "to": "NRT",
        "stops": ["SEA"],
        "price": 860,
        "departure_time": "20:00",
        "arrival_time": "06:00"
    },
    {
        "from": "JFK",
        "to": "SYD",
        "stops": ["LAX"],
        "price": 1200,
        "departure_time": "08:00",
        "arrival_time": "20:00"
    },
    {
        "from": "JFK",
        "to": "SYD",
        "stops": [],
        "price": 5,
        "departure_time": "10:00",
        "arrival_time": "22:00"
    },
    {
        "from": "JFK",
        "to": "SYD",
        "stops": ["SFO"],
        "price": 1170,
        "departure_time": "14:00",
        "arrival_time": "02:00"
    },
    {
        "from": "JFK",
        "to": "SYD",
        "stops": ["LAX", "HNL"],
        "price": 1120,
        "departure_time": "17:00",
        "arrival_time": "07:00"
    },
    {
        "from": "JFK",
        "to": "SYD",
        "stops": ["LAX"],
        "price": 1160,
        "departure_time": "20:00",
        "arrival_time": "10:00"
    },
    {
        "from": "LAX",
        "to": "JFK",
        "stops": ["ORD"],
        "price": 370,
        "departure_time": "08:00",
        "arrival_time": "16:00"
    },
    {
        "from": "LAX",
        "to": "JFK",
        "stops": [],
        "price": 400,
        "departure_time": "09:00",
        "arrival_time": "17:00"
    },
    {
        "from": "LAX",
        "to": "JFK",
        "stops": ["DEN"],
        "price": 350,
        "departure_time": "13:00",
        "arrival_time": "21:00"
    },
    {
        "from": "LAX",
        "to": "JFK",
        "stops": ["ATL"],
        "price": 380,
        "departure_time": "17:00",
        "arrival_time": "01:00"
    },
    {
        "from": "LAX",
        "to": "JFK",
        "stops": ["ORD"],
        "price": 360,
        "departure_time": "19:00",
        "arrival_time": "03:00"
    },
    {
        "from": "LAX",
        "to": "LHR",
        "stops": ["ORD"],
        "price": 800,
        "departure_time": "08:00",
        "arrival_time": "20:00"
    },
    {
        "from": "LAX",
        "to": "LHR",
        "stops": [],
        "price": 850,
        "departure_time": "10:00",
        "arrival_time": "22:00"
    },
    {
        "from": "LAX",
        "to": "LHR",
        "stops": ["JFK"],
        "price": 780,
        "departure_time": "14:00",
        "arrival_time": "02:00"
    },
    {
        "from": "LAX",
        "to": "LHR",
        "stops": ["ORD", "DUB"],
        "price": 730,
        "departure_time": "17:00",
        "arrival_time": "07:00"
    },
    {
        "from": "LAX",
        "to": "LHR",
        "stops": ["ORD"],
        "price": 770,
        "departure_time": "20:00",
        "arrival_time": "10:00"
    },
    {
        "from": "LAX",
        "to": "NRT",
        "stops": ["SFO"],
        "price": 950,
        "departure_time": "08:00",
        "arrival_time": "20:00"
    },
    {
        "from": "LAX",
        "to": "NRT",
        "stops": [],
        "price": 1000,
        "departure_time": "10:00",
        "arrival_time": "22:00"
    },
    {
        "from": "LAX",
        "to": "NRT",
        "stops": ["SEA"],
        "price": 920,
        "departure_time": "14:00",
        "arrival_time": "02:00"
    },
    {
        "from": "LAX",
        "to": "NRT",
        "stops": ["SFO", "SEA"],
        "price": 870,
        "departure_time": "17:00",
        "arrival_time": "03:00"
    },
    {
        "from": "LAX",
        "to": "NRT",
        "stops": ["SEA"],
        "price": 910,
        "departure_time": "20:00",
        "arrival_time": "06:00"
    },
    {
        "from": "LAX",
        "to": "SYD",
        "stops": ["HNL"],
        "price": 1300,
        "departure_time": "08:00",
        "arrival_time": "22:00"
    },
    {
        "from": "LAX",
        "to": "SYD",
        "stops": [],
        "price": 1350,
        "departure_time": "10:00",
        "arrival_time": "00:00"
    },
    {
        "from": "LAX",
        "to": "SYD",
        "stops": ["SFO"],
        "price": 1270,
        "departure_time": "14:00",
        "arrival_time": "06:00"
    },
    {
        "from": "LAX",
        "to": "SYD",
        "stops": ["HNL", "AKL"],
        "price": 1220,
        "departure_time": "17:00",
        "arrival_time": "09:00"
    },
    {
        "from": "LAX",
        "to": "SYD",
        "stops": ["HNL"],
        "price": 1260,
        "departure_time": "20:00",
        "arrival_time": "12:00"
    },
    {
        "from": "LHR",
        "to": "JFK",
        "stops": ["BOS"],
        "price": 700,
        "departure_time": "08:00",
        "arrival_time": "18:00"
    },
    {
        "from": "LHR",
        "to": "JFK",
        "stops": [],
        "price": 750,
        "departure_time": "10:00",
        "arrival_time": "20:00"
    },
    {
        "from": "LHR",
        "to": "JFK",
        "stops": ["ORD"],
        "price": 680,
        "departure_time": "14:00",
        "arrival_time": "00:00"
    },
    {
        "from": "LHR",
        "to": "JFK",
        "stops": ["BOS", "DUB"],
        "price": 620,
        "departure_time": "17:00",
        "arrival_time": "03:00"
    },
    {
        "from": "LHR",
        "to": "JFK",
        "stops": ["BOS"],
        "price": 670,
        "departure_time": "20:00",
        "arrival_time": "06:00"
    },
    {
        "from": "LHR",
        "to": "LAX",
        "stops": ["ORD"],
        "price": 800,
        "departure_time": "08:00",
        "arrival_time": "20:00"
    },
    {
        "from": "LHR",
        "to": "LAX",
        "stops": [],
        "price": 850,
        "departure_time": "10:00",
        "arrival_time": "22:00"
    },
    {
        "from": "LHR",
        "to": "LAX",
        "stops": ["JFK"],
        "price": 780,
        "departure_time": "14:00",
        "arrival_time": "02:00"
    },
    {
        "from": "LHR",
        "to": "LAX",
        "stops": ["ORD", "DUB"],
        "price": 730,
        "departure_time": "17:00",
        "arrival_time": "07:00"
    },
    {
        "from": "LHR",
        "to": "LAX",
        "stops": ["ORD"],
        "price": 770,
        "departure_time": "20:00",
        "arrival_time": "10:00"
    },
    {
        "from": "LHR",
        "to": "NRT",
        "stops": ["SFO"],
        "price": 1100,
        "departure_time": "08:00",
        "arrival_time": "00:00"
    },
    {
        "from": "LHR",
        "to": "NRT",
        "stops": [],
        "price": 1150,
        "departure_time": "10:00",
        "arrival_time": "02:00"
    },
    {
        "from": "LHR",
        "to": "NRT",
        "stops": ["JFK"],
        "price": 1070,
        "departure_time": "14:00",
        "arrival_time": "06:00"
    },
    {
        "from": "LHR",
        "to": "NRT",
        "stops": ["SFO", "SEA"],
        "price": 1020,
        "departure_time": "17:00",
        "arrival_time": "09:00"
    },
    {
        "from": "LHR",
        "to": "NRT",
        "stops": ["SEA"],
        "price": 1060,
        "departure_time": "20:00",
        "arrival_time": "12:00"
    },
    {
        "from": "LHR",
        "to": "SYD",
        "stops": ["LAX"],
        "price": 1500,
        "departure_time": "08:00",
        "arrival_time": "20:00"
    },
    {
        "from": "LHR",
        "to": "SYD",
        "stops": [],
        "price": 1550,
        "departure_time": "10:00",
        "arrival_time": "22:00"
    },
    {
        "from": "LHR",
        "to": "SYD",
        "stops": ["SFO"],
        "price": 1470,
        "departure_time": "14:00",
        "arrival_time": "02:00"
    },
    {
        "from": "LHR",
        "to": "SYD",
        "stops": ["LAX", "HNL"],
        "price": 1420,
        "departure_time": "17:00",
        "arrival_time": "07:00"
    },
    {
        "from": "LHR",
        "to": "SYD",
        "stops": ["LAX"],
        "price": 1460,
        "departure_time": "20:00",
        "arrival_time": "10:00"
    },
    {
        "from": "NRT",
        "to": "JFK",
        "stops": ["SFO"],
        "price": 900,
        "departure_time": "08:00",
        "arrival_time": "20:00"
    },
    {
        "from": "NRT",
        "to": "JFK",
        "stops": [],
        "price": 950,
        "departure_time": "10:00",
        "arrival_time": "22:00"
    },
    {
        "from": "NRT",
        "to": "JFK",
        "stops": ["LAX"],
        "price": 870,
        "departure_time": "14:00",
        "arrival_time": "02:00"
    },
    {
        "from": "NRT",
        "to": "JFK",
        "stops": ["SFO", "SEA"],
        "price": 820,
        "departure_time": "17:00",
        "arrival_time": "03:00"
    },
    {
        "from": "NRT",
        "to": "JFK",
        "stops": ["SEA"],
        "price": 860,
        "departure_time": "20:00",
        "arrival_time": "06:00"
    },
    {
        "from": "NRT",
        "to": "LAX",
        "stops": ["SFO"],
        "price": 950,
        "departure_time": "08:00",
        "arrival_time": "20:00"
    },
    {
        "from": "NRT",
        "to": "LAX",
        "stops": [],
        "price": 1000,
        "departure_time": "10:00",
        "arrival_time": "22:00"
    },
    {
        "from": "NRT",
        "to": "LAX",
        "stops": ["SEA"],
        "price": 920,
        "departure_time": "14:00",
        "arrival_time": "02:00"
    },
    {
        "from": "NRT",
        "to": "LAX",
        "stops": ["SFO", "SEA"],
        "price": 870,
        "departure_time": "17:00",
        "arrival_time": "03:00"
    },
    {
        "from": "NRT",
        "to": "LAX",
        "stops": ["SEA"],
        "price": 910,
        "departure_time": "20:00",
        "arrival_time": "06:00"
    },
    {
        "from": "NRT",
        "to": "LHR",
        "stops": ["SFO"],
        "price": 1100,
        "departure_time": "08:00",
        "arrival_time": "00:00"
    },
    {
        "from": "NRT",
        "to": "LHR",
        "stops": [],
        "price": 1150,
        "departure_time": "10:00",
        "arrival_time": "02:00"
    },
    {
        "from": "NRT",
        "to": "LHR",
        "stops": ["JFK"],
        "price": 1070,
        "departure_time": "14:00",
        "arrival_time": "06:00"
    },
    {
        "from": "NRT",
        "to": "LHR",
        "stops": ["SFO", "SEA"],
        "price": 1020,
        "departure_time": "17:00",
        "arrival_time": "09:00"
    },
    {
        "from": "NRT",
        "to": "LHR",
        "stops": ["SEA"],
        "price": 1060,
        "departure_time": "20:00",
        "arrival_time": "12:00"
    },
    {
        "from": "NRT",
        "to": "SYD",
        "stops": ["LAX"],
        "price": 1200,
        "departure_time": "08:00",
        "arrival_time": "20:00"
    },
    {
        "from": "NRT",
        "to": "SYD",
        "stops": [],
        "price": 1250,
        "departure_time": "10:00",
        "arrival_time": "22:00"
    },
    {
        "from": "NRT",
        "to": "SYD",
        "stops": ["SFO"],
        "price": 1170,
        "departure_time": "14:00",
        "arrival_time": "02:00"
    },
    {
        "from": "NRT",
        "to": "SYD",
        "stops": ["LAX", "HNL"],
        "price": 1120,
        "departure_time": "17:00",
        "arrival_time": "07:00"
    },
    {
        "from": "NRT",
        "to": "SYD",
        "stops": ["LAX"],
        "price": 1160,
        "departure_time": "20:00",
        "arrival_time": "10:00"
    },
    {
        "from": "SYD",
        "to": "JFK",
        "stops": ["LAX"],
        "price": 1400,
        "departure_time": "08:00",
        "arrival_time": "20:00"
    },
    {
        "from": "SYD",
        "to": "JFK",
        "stops": [],
        "price": 1450,
        "departure_time": "10:00",
        "arrival_time": "22:00"
    },
    {
        "from": "SYD",
        "to": "JFK",
        "stops": ["SFO"],
        "price": 1370,
        "departure_time": "14:00",
        "arrival_time": "02:00"
    },
    {
        "from": "SYD",
        "to": "JFK",
        "stops": ["LAX", "ORD"],
        "price": 1320,
        "departure_time": "17:00",
        "arrival_time": "07:00"
    },
    {
        "from": "SYD",
        "to": "JFK",
        "stops": ["LAX"],
        "price": 1360,
        "departure_time": "20:00",
        "arrival_time": "10:00"
    },
    {
        "from": "SYD",
        "to": "LAX",
        "stops": ["HNL"],
        "price": 1100,
        "departure_time": "08:00",
        "arrival_time": "20:00"
    },
    {
        "from": "SYD",
        "to": "LAX",
        "stops": [],
        "price": 1150,
        "departure_time": "10:00",
        "arrival_time": "22:00"
    },
    {
        "from": "SYD",
        "to": "LAX",
        "stops": ["SFO"],
        "price": 1070,
        "departure_time": "14:00",
        "arrival_time": "02:00"
    },
    {
        "from": "SYD",
        "to": "LAX",
        "stops": ["HNL", "ORD"],
        "price": 1020,
        "departure_time": "17:00",
        "arrival_time": "07:00"
    },
    {
        "from": "SYD",
        "to": "LAX",
        "stops": ["HNL"],
        "price": 1060,
        "departure_time": "20:00",
        "arrival_time": "10:00"
    },
    {
        "from": "SYD",
        "to": "LHR",
        "stops": ["LAX"],
        "price": 1500,
        "departure_time": "08:00",
        "arrival_time": "20:00"
    },
    {
        "from": "SYD",
        "to": "LHR",
        "stops": [],
        "price": 1550,
        "departure_time": "10:00",
        "arrival_time": "22:00"
    },
    {
        "from": "SYD",
        "to": "LHR",
        "stops": ["SFO"],
        "price": 1470,
        "departure_time": "14:00",
        "arrival_time": "02:00"
    },
    {
        "from": "SYD",
        "to": "LHR",
        "stops": ["LAX", "HNL"],
        "price": 1420,
        "departure_time": "17:00",
        "arrival_time": "07:00"
    },
    {
        "from": "SYD",
        "to": "LHR",
        "stops": ["LAX"],
        "price": 1460,
        "departure_time": "20:00",
        "arrival_time": "10:00"
    },
    {
        "from": "SYD",
        "to": "NRT",
        "stops": ["SIN"],
        "price": 650,
        "departure_time": "10:00",
        "arrival_time": "21:00"
      },
      {
        "from": "SYD",
        "to": "NRT",
        "stops": ["BKK"],
        "price": 700,
        "departure_time": "14:00",
        "arrival_time": "01:00"
      },
      {
        "from": "SYD",
        "to": "NRT",
        "stops": ["HKG"],
        "price": 720,
        "departure_time": "08:00",
        "arrival_time": "19:00"
      },
      {
        "from": "SYD",
        "to": "NRT",
        "stops": ["ICN"],
        "price": 680,
        "departure_time": "13:00",
        "arrival_time": "23:30"
      },
      {
        "from": "SYD",
        "to": "NRT",
        "stops": ["PVG"],
        "price": 710,
        "departure_time": "09:00",
        "arrival_time": "19:00"
      }
]


export default flights;