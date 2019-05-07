/**
 * Created by Sam on 2019/5/7.
 */
function fetch(url, {
    body = '',
    method = 'GET',
    headers = {}
} = {}) {
    console.log(url, body, method, headers);
}

fetch('http://example.com/', { body: 'body'});
fetch('http://example.com/');