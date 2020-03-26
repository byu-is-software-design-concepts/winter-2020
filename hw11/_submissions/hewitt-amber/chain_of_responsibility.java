// Chain of Responsibility example from the internet

interface Chain 
{ 
	public abstract void setNext(Chain nextInChain); 
	public abstract void process(Number request); 
} 

class Number 
{ 
	private int number; 

	public Number(int number) 
	{ 
		this.number = number; 
	} 

	public int getNumber() 
	{ 
		return number; 
	} 

} 

class NegativeProcessor implements Chain 
{ 
	private Chain nextInChain; 

	public void setNext(Chain c) 
	{ 
		nextInChain = c; 
	} 

	public void process(Number request) 
	{ 
		if (request.getNumber() < 0) 
		{ 
			System.out.println("NegativeProcessor : " + request.getNumber()); 
		} 
		else
		{ 
			nextInChain.process(request); 
		} 
	} 
} 

class ZeroProcessor implements Chain 
{ 
	
	private Chain nextInChain; 

	public void setNext(Chain c) 
	{ 
		nextInChain = c; 
	} 

	public void process(Number request) 
	{ 
		if (request.getNumber() == 0) 
		{ 
			System.out.println("ZeroProcessor : " + request.getNumber()); 
		} 
		else
		{ 
			nextInChain.process(request); 
		} 
	} 
} 

class PositiveProcessor implements Chain 
{ 

	private Chain nextInChain; 

	public void setNext(Chain c) 
	{ 
		nextInChain = c; 
	} 

	public void process(Number request) 
	{ 
		if (request.getNumber() > 0) 
		{ 
			System.out.println("PositiveProcessor : " + request.getNumber()); 
		} 
		else
		{ 
			nextInChain.process(request); 
		} 
	} 
} 

class TestChain 
{ 
	public static void main(String[] args) { 
		//configure Chain of Responsibility 
		Chain c1 = new NegativeProcessor(); 
		Chain c2 = new ZeroProcessor(); 
		Chain c3 = new PositiveProcessor(); 
		c1.setNext(c2); 
		c2.setNext(c3); 

		//calling chain of responsibility 
		c1.process(new Number(90)); 
		c1.process(new Number(-50)); 
		c1.process(new Number(0)); 
		c1.process(new Number(91)); 
	} 
} 
