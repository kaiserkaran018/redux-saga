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


export const fetchDataById = async (id) => {

    let api = `http://dummy.restapiexample.com/api/v1/employee/${id}`;
    try {
        const response = await fetch(api);
        const data = await response.json();
        return data;
    } catch (e) {
        console.log(e);
    }

};

export const createEmployee = async(data) => {

    let api = `http://dummy.restapiexample.com/api/v1/create`;
    const post = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({name: data.data.name, salary: data.data.salary, age: data.data.age})
    };
    try {
        const response = await fetch(api, post);
        const data = await response.json();
        return data;
    } catch (e) {
        console.log(e);
    }

};


