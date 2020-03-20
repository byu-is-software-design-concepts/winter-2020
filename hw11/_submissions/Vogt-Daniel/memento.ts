class Date 
{ 
	private String moment; 

	public void set(String moment) 
	{ 
		System.out.println("Setting moment to " + moment); 
		this.moment = moment; 
	} 

	public Memento saveToMemento() 
	{ 
		System.out.println("Saving moment to Memento"); 
		return new Memento(moment); 
	} 

	public void restoreFromMemento(Memento memento) 
	{ 
		moment = memento.getSavedmoment(); 
		System.out.println("moment restored from Memento: " + moment); 
	} 

	public static class Memento 
	{ 
		private final String moment; 

		public Memento(String momentToSave) 
		{ 
			moment = momentToSave; 
		} 

		public String getSavedmoment() 
		{ 
			return moment; 
		} 
	} 
} 

class Build 
{ 
	
	public static void main(String[] args) 
	{ 
		
		List<Date.Memento> savedmoments = new ArrayList<Date.Memento>(); 

		Date Date = new Date(); 

		//moment travel and record the eras 
		Date.set("2012"); 
		savedmoments.add(Date.saveToMemento()); 
		Date.set("2014"); 
		savedmoments.add(Date.saveToMemento()); 
		Date.set("2016"); 
		savedmoments.add(Date.saveToMemento()); 
		Date.set("2018"); 

		Date.restoreFromMemento(savedmoments.get(0)); 

	} 
} 