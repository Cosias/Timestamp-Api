# Timestamp Api

* A user can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).
                                         
* If it does, it returns both the Unix timestamp and the natural language form of that date.
```
{"unix":Unix_Timestamp,"natural":"Natural_Language_Date"}
```

* If it does not contain a date or Unix timestamp, it returns null for those properties.
```
{"unix":null,"natural":null}
```

## Example Usage
```
https://timestamp-api-ms.herokuapp.com/February,22,2017
```

```
localhost:3000/1487721600
```

## Example Output
```
{ "unix": "1487721600", "natural": "February 22, 2017" }
```
