export const fetchData = async () => {

    let api = 'http://dummy.restapiexample.com/api/v1/employees';
    try {
        const response = await fetch(api);
        const data = await response.json();
        return data;
    } catch (e) {
        console.log(e);
    }

};
