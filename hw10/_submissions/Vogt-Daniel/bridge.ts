abstract class Building { 
    protected Workshop workShop1; 
    protected Workshop workShop2; 
  
    protected Building(Workshop workShop1, Workshop workShop2) 
    { 
        this.workShop1 = workShop1; 
        this.workShop2 = workShop2; 
    } 
  
    abstract public void manufacture(); 
} 
  
class Hospital extends Building { 
    public Hospital(Workshop workShop1, Workshop workShop2) 
    { 
        super(workShop1, workShop2); 
    } 
  
    @Override
    public void manufacture() 
    { 
        System.out.print("Hospital "); 
        workShop1.work(); 
        workShop2.work(); 
    } 
} 
  
class Mansion extends Building { 
    public Mansion(Workshop workShop1, Workshop workShop2) 
    { 
        super(workShop1, workShop2); 
    } 
  
    @Override
    public void manufacture() 
    { 
        System.out.print("Mansion" "); 
        workShop1.work(); 
        workShop2.work(); 
    } 
} 
  
interface Workshop 
{ 
    abstract public void work(); 
} 
   
class Produce implements Workshop { 
    @Override
    public void work() 
    { 
        System.out.print("Produced"); 
    } 
} 
  
class Assemble implements Workshop { 
    @Override
    public void work() 
    { 
        System.out.print(" And"); 
        System.out.println(" Assembled."); 
    } 
} 
  
class BridgePattern { 
    public static void main(String[] args) 
    { 
        Building building1 = new Hospital(new Produce(), new Assemble()); 
        building1.manufacture(); 
        Building building2 = new Mansion(new Produce(), new Assemble()); 
        building2.manufacture(); 
    } 
} 