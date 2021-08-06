class Fetch {
    async getCurrent(input) {
      const myKey = "b34fa18b04b459199c2ac482c911fc16";
  
      //make request to url
  
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}&units=imperial`
      );
  
      const data = await response.json();
  
      console.log(data);
  
      return data;
    }
  }