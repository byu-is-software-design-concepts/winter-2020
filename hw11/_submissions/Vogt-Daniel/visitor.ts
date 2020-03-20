interface ItemElement 
{ 
	public int accept(BookStoreVisitor visitor); 
} 

class Book implements ItemElement 
{ 
	private int price; 
	private String isbnNumber; 

	public Book(int cost, String isbn) 
	{ 
		this.price=cost; 
		this.isbnNumber=isbn; 
	} 

	public int getPrice() 
	{ 
		return price; 
	} 

	public String getIsbnNumber() 
	{ 
		return isbnNumber; 
	} 

	@Override
	public int accept(BookStoreVisitor visitor) 
	{ 
		return visitor.visit(this); 
	} 

} 

class Magazine implements ItemElement 
{ 
	private int price; 
	private int numPages; 
	private String name; 

	public Magazine(int price, int pages, String nm) 
	{ 
		this.price=price; 
		this.numPages=pages; 
		this.name = nm; 
	} 

	public int getprice() 
	{ 
		return price; 
	} 

	public int getnumPages() 
	{ 
		return numPages; 
	} 

	public String getName() 
	{ 
		return this.name; 
	} 

	@Override
	public int accept(BookStoreVisitor visitor) 
	{ 
		return visitor.visit(this); 
	} 

} 

interface BookStoreVisitor 
{ 

	int visit(Book book); 
	int visit(Magazine magazine); 
} 

class BookStoreVisitorImpl implements BookStoreVisitor 
{ 

	@Override
	public int visit(Book book) 
	{ 
		int cost=0; 
		//apply 5$ discount if book price is greater than 50 
		if(book.getPrice() > 50) 
		{ 
			cost = book.getPrice()-5; 
		} 
		else
			cost = book.getPrice(); 
			
		System.out.println("Book ISBN::"+book.getIsbnNumber() + " cost ="+cost); 
		return cost; 
	} 

	@Override
	public int visit(Magazine Magazine) 
	{ 
		int cost = Magazine.getprice()*Magazine.getnumPages(); 
		System.out.println(Magazine.getName() + " cost = "+cost); 
		return cost; 
	} 

} 

class BookStoreClient 
{ 

	public static void main(String[] args) 
	{ 
		ItemElement[] items = new ItemElement[]{new Book(20, "1234"), 
							new Book(100, "5678"), new Magazine(10, 2, "Banana"), 
							new Magazine(5, 5, "Apple")}; 

		int total = calculatePrice(items); 
		System.out.println("Total Cost = "+total); 
	} 

	private static int calculatePrice(ItemElement[] items) 
	{ 
		BookStoreVisitor visitor = new BookStoreVisitorImpl(); 
		int sum=0; 
		for(ItemElement item : items) 
		{ 
			sum = sum + item.accept(visitor); 
		} 
		return sum; 
	} 

}