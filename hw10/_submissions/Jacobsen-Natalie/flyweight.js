// using flyweight to rent out movies, like redbox (or blockbuster lol)
var MovieManager = (function () {

    var MovieDatabase = {};
  
    return {
      addMovie: function ( id, title, director, genre, length, year, rentDate, 
      rentMember, dueReturnDate, availability ) {
  
        //this is where the fluyweight design pattern comes in, aiming to share data between large quantities of similar objects stored in memory
        var movie = MovieDatabase.createMovie( title, director, genre, length, 
        year);
  
        MovieDatabase[id] = {
          rentMember: rentMember,
          rentDate: rentDate,
          dueReturnDate: dueReturnDate,
          availability: availability,
          movie: movie
        };
      },
      updateRentStatus: function ( movieID, newStatus, rentDate, 
      rentMember, newReturnDate ) {
  
        var record = MovieDatabase[movieID];
        record.availability = newStatus;
        record.rentDate = rentDate;
        record.rentMember = rentMember;
        record.dueReturnDate = newReturnDate;
      },
  
      extendRentPeriod: function ( movieID, newReturnDate ) {
        MovieDatabase[movieID].dueReturnDate = newReturnDate;
      },
  
      isPastDue: function ( movieID ) {
        var currentDate = new Date();
        return currentDate.getTime() > Date.parse( 
        MovieDatabase[movieID].dueReturnDate );
      }
    };
  
  });