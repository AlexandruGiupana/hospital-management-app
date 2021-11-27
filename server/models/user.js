export class User {
  constructor(
    email,
    password,
    account_type,
    first_name,
    last_name,
    address,
    city,
    county,
    postal_code,
    phone_number,
    cnp
  ) {
    this.email = email;
    this.password = password;
    this.account_type = account_type;
    this.first_name = first_name;
    this.last_name = last_name;
    this.address = address;
    this.city = city;
    this.county = county;
    this.email = email;
    this.postal_code = postal_code;
    this.phone_number = phone_number;
    this.cnp = cnp;
  }
}
