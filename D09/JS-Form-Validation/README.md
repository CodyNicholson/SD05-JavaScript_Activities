| Field         | Required | Validation                                              |
| ------------- | -------- | ------------------------------------------------------- |
| Name          | Yes      | Alphabetical Only                                       |
| Phone Number  | Yes      | (###)###-####, ##########, or ###-###-####              |
| Company Email | No       | Alphabetical@Aphabetical.Aphabetical                    |
| Zip Code      | Yes      | Numbers, only 5 characters or 5 followed by - then 4 #s |

In other words, for the Name field it should have validation that ensures that it is only made up of letters, the phone number is of one of three formats (shown in above table), the Company email is a string of letters followed by an @ followed by a string of letters, a period, and another string of letters, and the Zip Code will either be for format ##### or #####-####.