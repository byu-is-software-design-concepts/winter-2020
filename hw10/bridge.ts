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
  
class School extends Building { 
    public School(Workshop workShop1, Workshop workShop2) 
    { 
        super(workShop1, workShop2); 
    } 
  
    @Override
    public void manufacture() 
    { 
        System.out.print("School "); 
        workShop1.work(); 
        workShop2.work(); 
    } 
} 
  
class Mall extends Building { 
    public Mall(Workshop workShop1, Workshop workShop2) 
    { 
        super(workShop1, workShop2); 
    } 
  
    @Override
    public void manufacture() 
    { 
        System.out.print("Mall" "); 
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
        System.out.print("Designed"); 
    } 
} 
  
class Assemble implements Workshop { 
    @Override
    public void work() 
    { 
        System.out.print(" And"); 
        System.out.println(" Developed."); 
    } 
} 
  
class BridgePattern { 
    public static void main(String[] args) 
    { 
        Building building1 = new Mall(new Produce(), new Assemble()); 
        building1.manufacture(); 
        Building building2 = new School(new Produce(), new Assemble()); 
        building2.manufacture(); 
    } 
} 