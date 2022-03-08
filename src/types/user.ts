export default interface User {
    id: number;
    name:string;
    username:string;
    address:address;
    phone:string;
    website: string;
    compony:compony
  }

  interface address{
    street:string;
    suite : string;
    city:string;
    zipcode:string
    geo:geo
  }
  interface geo{
      lat:string
      lng:string
  }
  interface compony{
    street:string;
    suite : string;
    city:string;
    zipcode:string
  }
