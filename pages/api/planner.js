const BASE_URL = 'https://xoa6hl1aec.execute-api.us-east-1.amazonaws.com/Prod/schedule';

async function postData(date, data) {
  try {
    const response = await fetch(BASE_URL, {
      body: JSON.stringify({
        date: date,
        data: data,
      }),
      method: 'POST',
    });
    const parsedResponse = await response.json();
    console.log('parsed', parsedResponse);
    if(response.ok) {
        return true;
    }
    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function getData(date) {
  try {
    const response = await fetch(BASE_URL + `?date=${date}`, {
      method: 'GET',
    });
    if (!response.ok) {
      console.log('error', response);
      return {};
    }
    const parsedResponse = await response.json();
    console.log('parsed', parsedResponse);
    return parsedResponse;
  } catch (error) {
    console.log('ERROR', error);
    return {};
  }
}

export default { postData, getData };
