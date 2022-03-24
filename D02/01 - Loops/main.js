
//Create array of all Items purchased from SilverTrack
let purchasedCars = [

    {Type: 22, IdNumber: 21101, Model: 'S1', Insured: true, YearBuilt: '1922'},
    {Type: 'StockCar', IdNumber: 4654, Model: 'S1', Insured: 'True', YearBuilt: '2011'}, 
    {Type: 'Refrigerator', IdNumber: '2072', Model: 'T1', Insured: false, YearBuilt: '1975'}
  
  ]
  
  //loop through purchasedCars array
  for (let i = 0;  i < purchasedCars.length; i++ ) {
  
    //use typeof to get data type
    let getTypeDataType = typeof purchasedCars[i].Type  //expecting String
    if (getTypeDataType !== 'string')
      {
         purchasedCars[i].Type = String(purchasedCars[i].Type);
      }
  
    let getIdNumberDataType = typeof purchasedCars[i].IdNumber //expecting Number
    if (getIdNumberDataType !== 'number')
      {
         purchasedCars[i].IdNumber = Number(purchasedCars[i].IdNumber);
      }  
  
    let getModelDataType = typeof purchasedCars[i].Model //expecting Number
    if (getModelDataType !== 'number')
    {
      purchasedCars[i].IdNumber = Number(purchasedCars[i].IdNumber);
    }
  
    let getInsuredDataType = typeof purchasedCars[i].Insured //expecting Boolean
     if (getInsuredDataType !== 'boolean')
      {
        purchasedCars[i].Insured = Boolean(purchasedCars[i].Insured);
      }  
    let getYearBuiltDataType = typeof purchasedCars[i].YearBuilt //expecting  Number
      if (getYearBuiltDataType !== 'number')
      {
        purchasedCars[i].YearBuilt = Number(purchasedCars[i].YearBuilt);
      }  
  }
  
  //output modified data
  console.log(purchasedCars);  