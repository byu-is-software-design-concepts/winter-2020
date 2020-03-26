/* OBSERVER
 * This interface declares a set of methods for managing Mutual app users.
 */
interface User {
    numberOfMatches: number;
    accountActive: boolean;
    createUserAccount(user: MutualAppUser, name: string): void;
    deleteUserAccount(user: MutualAppUser, name: string): void;
    notifyUserOfMatch(user: MutualAppUser, name: string): void;
}

class MutualDatingApp implements User {
    /**
     * @type {number} For the sake of simplicity, the Subject's state, essential
     * to all app users, is stored in this variable.
     */
    public numberOfMatches: number;
    public accountActive: boolean;

    /** List of Mutual app users
      @type {MutualAppUsers[]}
     */
    private appUsers: MutualAppUser[] = [];

    public createUserAccount(user: MutualAppUser, name: string): void {
        console.log('Created a new Mutual account for ' + name);
        this.appUsers.push(user);
        this.accountActive = true;
    }

    public deleteUserAccount(user: MutualAppUser, name: string): void {
        const userIndex = this.appUsers.indexOf(user);
        if (userIndex === -1) {
            return console.log('An account for ' + name + ' does not exist.');
        }

        this.appUsers.splice(userIndex, 1);
        console.log('An account for ' + name + ' was deleted.');
        this.accountActive = false;
    }

    public notifyUserOfMatch(user: MutualAppUser, name: string): void {
        console.log(`App notification: "` + name + `, just wanted to let you know you have ${this.numberOfMatches} matches."`);
        for (const user of this.appUsers) {
            user.update(this);
        }
    }

    public countNumberOfMatches(user: MutualAppUser, name: string): void {
        this.numberOfMatches = Math.floor(Math.random() * (10 + 1));
        console.log(name + ` has ${this.numberOfMatches} matches`);
        this.notifyUserOfMatch(user, name);
    }
}

/** The MutualAppUser interface declares the update method, used by app users.*/
interface MutualAppUser {
    update(user: User): void; // Receive update from subject.
}

/**
 * Concrete Observers react to the updates issued by the User they had been
 * attached to.
 */
class MatchSucess implements MutualAppUser {
    public update(user: User): void {
        if (user.numberOfMatches > 1 && user.accountActive == true) {
            console.log('The app worked! Someone got matched up!');
        }
    }
}

class MatchFailure implements MutualAppUser {
    public update(user: User): void {
        if (user.numberOfMatches === 0 && user.accountActive == true) {
            console.log('The app failed. Someone did not get matched up.');
        }
    }
}

/** The client code */
const appUser = new MutualDatingApp();

const James = new MatchSucess();
appUser.createUserAccount(James, "James");
appUser.countNumberOfMatches(James, "James");

console.log('');

const Jane = new MatchFailure();
appUser.createUserAccount(Jane, "Jane");
appUser.countNumberOfMatches(Jane, "Jane");
appUser.deleteUserAccount(Jane, "Jane");