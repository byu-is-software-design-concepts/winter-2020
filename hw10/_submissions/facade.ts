/**
 * The Facade class provides a simple interface to the complex logic of one or
 * several subsystems. The Facade delegates the client requests to the
 * appropriate objects within the subsystem. The Facade is also responsible for
 * managing their lifecycle. All of this shields the client from the undesired
 * complexity of the subsystem.
 */
class Hotel {
    protected restaurants: Restaurants;

    protected housekeeping: Housekeeping;

    /**
     * Depending on your application's needs, you can provide the Facade with
     * existing subsystem objects or force the Facade to create them on its own.
     */
    constructor(restaurants: Restaurants = null, housekeeping: Housekeeping = null) {
        this.restaurants = restaurants || new Restaurants();
        this.housekeeping = housekeeping || new Housekeeping();
    }

    /**
     * The Facade's methods are convenient shortcuts to the sophisticated
     * functionality of the subsystems. However, clients get only to a fraction
     * of a subsystem's capabilities.
     */
    public operation(): string {
        // First Steps for Restaurant and Housekeeping Functions
        let result = 'Facade initializes hotel and functions:\n';
        result += this.restaurants.openRestaurant();
        result += this.housekeeping.getSupplies();
        result += '\n';

        // Restaurant and Housekeeping subsystems ordered to perform other actions
        result += 'Facade orders subsystems (restaurants and housekeeping) to perform other actions:\n';
        // Restaurant Operations
        result += this.restaurants.getIngredients();
        result += this.restaurants.cookFood();
        result += this.restaurants.serveFood();
        result += this.restaurants.closeRestaurant();

        // Housekeeping Operations
        result += this.housekeeping.makeSureRoomIsEmpty();
        result += this.housekeeping.vacuummFloors();
        result += this.housekeeping.dustEverything();
        result += this.housekeeping.leaveRoom();

        return result;
    }
}

/**
 * The Subsystem can accept requests either from the facade or client directly.
 * In any case, to the Subsystem, the Facade is yet another client, and it's not
 * a part of the Subsystem.
 */
class Restaurants {
    public openRestaurant(): string {
        return 'Restaturant: The restaurant is now open!\n';
    }

    public getIngredients(): string {
        return 'Restaturant: We got the ingredients.\n';
    }

    public cookFood(): string {
        return 'Restaturant: The food is being cooked.\n';
    }

    public serveFood(): string {
        return 'Restaturant: The food is served to customers.\n';
    }

    public closeRestaurant(): string {
        return 'Restaurant: The restaurant is now closed!\n';
    }
}

/**
 * Some facades can work with multiple subsystems at the same time.
 */
class Housekeeping {
    public getSupplies(): string {
        return 'Housekeeping: Supplies are ready, let\'s get cleaning!\n';
    }

    public makeSureRoomIsEmpty(): string {
        return 'Housekeeping: Knock on hotel room and say, "Housekeeping".\n';
    }

    public vacuummFloors(): string {
        return 'Housekeeping: Vacuuming all the floors.\n';
    }

    public dustEverything(): string {
        return 'Housekeeping: Dusting everything in sight.\n';
    }

    public leaveRoom(): string {
        return 'Housekeeping: Cleaning is all done!\n';
    }

}

/**
 * The client code works with complex subsystems through a simple interface
 * provided by the Facade. When a facade manages the lifecycle of the subsystem,
 * the client might not even know about the existence of the subsystem. This
 * approach lets you keep the complexity under control.
 */
function clientCode(facade: Hotel) {
    console.log(facade.operation());
}

/**
 * The client code may have some of the subsystem's objects already created. In
 * this case, it might be worthwhile to initialize the Facade with these objects
 * instead of letting the Facade create new instances.
 */
const restaurants = new Restaurants();
const housekeeping = new Housekeeping();
const facade = new Hotel(restaurants, housekeeping);
clientCode(facade);