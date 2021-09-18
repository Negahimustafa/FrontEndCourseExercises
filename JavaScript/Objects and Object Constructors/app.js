

function book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages =  pages
    this.read = read
    this.info = function() {
     return (title, author, pages, read);
    }
  }
const book1 = new book ("little prince", "JD", "401 pages", "not read yet");
console.log(book1.title, book1.author, " ", book1.pages);


console.log(book1.info());


// Implement the following functionality in JavaScript:

// Create a Function constructor that creates Bank Accounts
// Implement the following prototype methods:
// 2.1. deposit: will deposit an amount to the current balance
// 2.2. withdraw: will withdraw an amount from the current balance and return the withdrawn amount
// Validation rules include:
// 2.2.1. Amount must not be negative number
// 2.2.2. Amount must be of type Number
// 2.2.3. Amount must not exceed current balance
// 2.3. getBalance: will return the current balance
// Automatically give a new IBAN number to new accounts. (Static property)

function Account(name){
  this.name = name
  
  this.balance = 0
  this.deposit1 = 100
  this.withdraw = 50
  this.remain = this.deposit1 - this.withdraw
  

}
Account.prototype.getBalance = function (){ return this.balance 
  

}
Account.prototype.deposit = function (){ return this.balance + this.deposit1

}
Account.prototype.withDraw = function (){
   return this.deposit1 - this.withdraw

}
Account.prototype.withDraw = function (){
  return this.deposit1 - this.withdraw

}





const newAccount = new Account( "Kostas Minaidis" );  ''  
// New account created for: Kostas Minaidis
// IBAN: GR00010003

console.log(newAccount.getBalance());   
console.log(newAccount.deposit()); 
console.log(newAccount.withDraw()); 




// newAccount.withdraw( 500 )   // Error 'Insufficient balance!'

// newAccount.withdraw( "50" )  // Error 'Invalid amount'
// newAccount.withdraw( -150 )  // Error 'Invalid amount'
