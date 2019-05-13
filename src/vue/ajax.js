/**
 * Created by Sam on 2019/5/12.
 */
const ajax =  ({url = '', method = 'GET', dataType = 'json',}) => {
    return new Promise((resolve, reject) => {
        try {
            let xhr = new XMLHttpRequest();
            xhr.responseType = dataType;
            xhr.open(method, url);
            xhr.onload = () => {
                xhr.status === 200 ? resolve(xhr.response) : reject(xhr.response);
            }
            xhr.send()
        } catch (error) {
            reject(error);
        }
    });
};