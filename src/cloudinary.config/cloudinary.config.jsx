fetch('/get-credentials')
  .then((response) => response.json())
  .then((data) => {
    const cloudinaryConfig = {
      cloud_name: data.cloudName,
      api_key: data.apiKey,
      api_secret: data.apiSecret,
    };
    
    console.log(cloudinaryConfig);
  })
  .catch((error) => console.error(error));