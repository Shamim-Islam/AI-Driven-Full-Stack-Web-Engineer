class chaShop {
  title: string;
  soldItems: any = []

  constructor(title:string) {
    this.title = title
  }
 buy(name: string, price:number) {
    this.soldItems.push({name, price})
 }

}

const shop1 = new chaShop('Tea shop')
shop1.buy('Tea', 10)
console.log(shop1);
