# Weather-App

This Weather-App is a simple web application built with HTML, CSS, and JavaScript. It fetches weather data using the OpenWeatherMap API to display weather information for a specified city, including humidity and wind speed.

## Features
- Fetches current weather data based on the city name provided.
- Utilizes `fetch` to communicate with the OpenWeatherMap API.
- Displays essential weather details such as temperature, humidity, and wind speed.

## Usage
1. Clone the repository.
2. Replace `{city name}` in the API URL with the desired city name.
3. Open the `index.html` file in your browser to view the weather information.

## Displayed Weather Information
- **Temperature:** Current temperature in Celsius.
- **Humidity:** Percentage of humidity in the air.
- **Wind Speed:** Speed of wind in meters per second.

## APIs Used
The application uses the OpenWeatherMap API to retrieve weather data. You can find more details about the API [here]
(https://api.openweathermap.org/data/2.5/weather?q={city name}).

# Generating OpenWeatherMap API Key

To use the OpenWeatherMap API and access weather data in the Weather-App, you need to obtain an API key. Follow these steps to generate your API key:

## Steps to Obtain OpenWeatherMap API Key

1. **Create an Account**
   - Visit [OpenWeatherMap Sign Up](https://home.openweathermap.org/users/sign_up) page.
   - Sign up for a new account by providing the required details.

2. **Verify Your Account**
   - After signing up, check your email for a verification link sent by OpenWeatherMap.
   - Click on the verification link to verify your account.

3. **Access API Keys Section**
   - Log in to your OpenWeatherMap account.
   - Go to the [API Keys](https://home.openweathermap.org/api_keys) section.

4. **Generate a New API Key**
   - Once in the API Keys section, click on "Generate" to create a new API key.
   - Optionally, you can provide a name to the key for easier identification.

5. **Copy Your API Key**
   - After generating the API key, copy it from the dashboard or API Keys section.
   - This key will be used in the Weather-App to access weather data.

## Using Your API Key in Weather-App
- Replace `{YOUR_API_KEY}` in the API URL with the generated API key.
- Update the API URL in the Weather-App's JavaScript code (where the API call is made) with your unique API key.

Ensure to keep your API key secure and do not share it publicly. This key enables access to OpenWeatherMap's services and should be handled confidentially.

---







