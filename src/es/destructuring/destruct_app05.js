/**
 * Created by Sam on 2019/5/6.
 */
const jQuery = {
    ajax(url, {
        async = true,
        beforeSend = () => {},
        cache = true,
        complete = () => {},
        crossDomain = false,
        global = true
    } = {}) {
        console.log(url, async, beforeSend, cache, complete, crossDomain, global)
    }
}
jQuery.ajax('http://www.google.com', { crossDomain: true })