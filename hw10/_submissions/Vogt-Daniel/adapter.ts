interface Cheetah 
{ 
    public void run(); 
    public void makeSound(); 
} 
  
class Moose implements Cheetah 
{ 
    public void run() 
    { 
        System.out.println("Runs"); 
    } 
    public void makeSound() 
    { 
        System.out.println("Growl"); 
    } 
} 
  
interface ToyDuck 
{ 
    public void squeak(); 
} 
  
class PlasticToyDuck implements ToyDuck 
{ 
    public void squeak() 
    { 
        System.out.println("Squeak"); 
    } 
} 
  
class CheetahAdapter implements ToyDuck 
{ 
    Cheetah cheetah; 
    public CheetahAdapter(Cheetah cheetah) 
    { 
        this.cheetah = cheetah; 
    } 
  
    public void squeak() 
    { 
        cheetah.makeSound(); 
    } 
} 
  
class Main 
{ 
    public static void main(String args[]) 
    { 
        Moose moose = new Moose(); 
        ToyDuck toyDuck = new PlasticToyDuck(); 
  
        ToyDuck cheetahAdapter = new CheetahAdapter(Moose); 
  
        System.out.println("Moose..."); 
        moose.run(); 
        moose.makeSound(); 
  
        System.out.println("ToyDuck..."); 
        toyDuck.squeak(); 
  
        System.out.println("CheetahAdapter..."); 
        CheetahAdapter.squeak(); 
    } 
} 