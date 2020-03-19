// Constructor function
function TravelFacade(reservationType) {
    this.reservationType = reservationType;

    this.flight = new FlightBooker();
    this.hotel = new HotelBooker();
    this.train = new TrainBooker();
}

// Establish book method of new TravelFacade Class
TravelFacade.prototype.book = function (reservationInfo) {
    switch (this.reservationType) {
        case 'Flight':
            // book flight;
            this.flight.book(reservationInfo);
            break;
        case 'Hotel':
            // book hotel;
            this.hotel.book(reservationInfo);
            break;
        case 'Train':
            // book Train;
            this.train.book(reservationInfo);
            break;
        case 'Flight_And_Hotel':
            // book Flight and Hotel
            this.flight.book(reservationInfo);
            this.hotel.book(reservationInfo);
            break;
        case 'Train_And_Hotel':
            // book Train and Hotel
            this.train.book(reservationInfo);
            this.hotel.book(reservationInfo);
            break;
        default:
            // throw an error
            throw Error('Reservation type is not supported.');
    }
}

function FlightBooker() {
    function book(bookingInfo) {
        // handle booking flight
        console.log("Flight Info: ")
        console.log(bookingInfo.flight);
    }

    // revealing module pattern
    return {
        book: book
    }
}

function TrainBooker() {
    function book(bookingInfo) {
        // handle train booking
        console.log("Train Info: ")
        console.log(bookingInfo.train);
    }

    // revealing module pattern
    return {
        book: book
    }
}

function HotelBooker() {
    function book(bookingInfo) {
        // handle hotel booking
        console.log("Hotel Info: ")
        console.log(bookingInfo.hotel);
    }

    // revealing module pattern
    return {
        book: book
    }
}

let flight = {
    'departure_datetime': '03/18/2020 09:00',
    'return_datetime': '03/25/2020 22:00',
    'from': 'Salt Lake City',
    'to': 'Knoxville'
};

let train = {
    'departure_datetime': '03/18/2020 20:00',
    'return_datetime': '03/23/2020 10:00',
    'from': 'Provo',
    'to': 'Seattle'
};

let hotel = {
    'check_in_date': '03/18/2020',
    'nights': 6,
    'city': 'Knoxville',
    'hotel_name': 'Four Seasons Hotel'
};


// First Trip is a flight and a hotel
let travel1 = new TravelFacade('Flight_And_Hotel');
travel1.book({flight, hotel});


hotel = {
    'check_in_date': '03/18/2017 20:00',
    'nights': 4,
    'city': 'Seattle',
    'hotel_name': 'Marriott Hotel'
};


// Second trip is a train and a hotel
let travel2 = new TravelFacade('Train_And_Hotel');
travel2.book({train, hotel});