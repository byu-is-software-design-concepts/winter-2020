/* STRATEGY
 * This behavioral design pattern turns a set of behaviors into objects
 * and makes them interchangeable inside the original context object.
 * /

/* The Context defines the interface of interest to clients. */
class SocialMediaContext {
    /**
     * @type {Strategy} The Context maintains a reference to one of the Strategy
     * objects. The Context does not know the concrete class of a strategy. It
     * should work with all strategies via the Strategy interface.
     */
    private strategy: Strategy;

    /**
     * Usually, the Context accepts a strategy through the constructor, but also
     * provides a setter to change it at runtime.
     */
    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    /**
     * Usually, the Context allows replacing a Strategy object at runtime.
     */
    public setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }

    /**
     * The Context delegates some work to the Strategy object instead of
     * implementing multiple versions of the algorithm on its own.
     */
    public connectToSocialMediaPlatform(nameOfFriend: string): void {
        console.log('Context: Choosing the correct social media platform to connect to.');
        const friend = this.strategy.connectWithFriend(nameOfFriend);
    }
}

/**
 * The Strategy interface declares operations common to all supported versions
 * of some algorithm.
 *
 * The Context uses this interface to call the algorithm defined by Concrete
 * Strategies.
 */
interface Strategy {
    connectWithFriend(string: string): string;
}

/**
 * Concrete Strategies implement the algorithm while following the base Strategy
 * interface. The interface makes them interchangeable in the Context.
 */
class FacebookStrategy implements Strategy {
    public connectWithFriend(friend: string): string {
        var result = "Became friends with " + friend + " through Facebook.";
        return result;
    }
}

class InstagramStrategy implements Strategy {
    public connectWithFriend(friend: string): string {
        var result = "Became friends with " + friend + " through Instagram.";
        return result;
    }
}

class TwitterStrategy implements Strategy {
    public connectWithFriend(friend: string): string {
        var result = "Became friends with " + friend + " through Twitter.";
        return result;
    }
}

/**
 * The client code picks a concrete strategy and passes it to the context. The
 * client should be aware of the differences between strategies in order to make
 * the right choice.
 */
const context = new SocialMediaContext(new FacebookStrategy());
console.log('Client: Strategy is set to Facebook Strategy.');
context.connectToSocialMediaPlatform("Ganderson");

console.log('');

console.log('Client: Strategy is set to Instagram Strategy.');
context.setStrategy(new InstagramStrategy());
context.connectToSocialMediaPlatform("Ganderson");

console.log('');

console.log('Client: Strategy is set to Twitter Strategy.');
context.setStrategy(new TwitterStrategy());
context.connectToSocialMediaPlatform("Ganderon");